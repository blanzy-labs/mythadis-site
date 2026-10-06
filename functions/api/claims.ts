/** Cloudflare Pages Function. No submitted content is logged or rendered as markup. */
interface Env {
  CLAIM_SUBMISSIONS?: { put(key: string, value: string): Promise<void> };
  TURNSTILE_SECRET_KEY?: string;
}
interface Context { request: Request; env: Env }
const limits = {
  claim_url: [1, 2048], claim_summary: [10, 1200], why_interesting: [10, 1600],
  name: [0, 100], email: [0, 254], notes: [0, 2000],
} as const;
const labels = {
  claim_url: "Claim URL", claim_summary: "Claim summary", why_interesting: "Why it is interesting",
  name: "Name", email: "Email", notes: "Notes",
};
const MAX_BYTES = 32768;
const unavailable = "The lab could not receive your claim. Please try again later.";
type Payload = { ok: boolean; message?: string; errors?: Record<string, string>; submission_id?: string };
function reply(request: Request, status: number, payload: Payload): Response {
  const headers = new Headers({ "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
  if (status === 405) headers.set("Allow", "POST");
  if (request.headers.get("Accept")?.includes("application/json")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
    return new Response(JSON.stringify(payload), { status, headers });
  }
  // Only fixed application messages are rendered; never submitted text or server details.
  const escape = (value: string) => value.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
  const title = payload.ok ? "CLAIM RECEIVED" : "CLAIM NOT RECEIVED";
  const message = payload.ok ? "It's in the evidence pile. If it survives triage, it may become a Mythadis investigation." : payload.message ?? unavailable;
  headers.set("Content-Type", "text/html; charset=utf-8");
  headers.set("Content-Security-Policy", "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'");
  return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${title} — Mythadis</title><style>body{margin:0;background:#e9dfc7;color:#151716;font:18px/1.6 Arial}main{max-width:650px;margin:8vh auto;padding:24px;border:5px solid #151716;box-shadow:8px 8px 0 #e65b2e}h1{font:48px/1 Impact,Arial,sans-serif}a{color:inherit;font-weight:bold}li{margin:12px 0}</style></head><body><main><b>MYTHADIS / SEND IT TO THE LAB</b><h1>${title}</h1><p>${escape(message)}</p>${payload.errors ? `<ul>${Object.values(payload.errors).map(e => `<li>${escape(e)}</li>`).join("")}</ul>` : ""}<p>${payload.ok ? '<a href="/submit/">Return to the lab</a>' : 'Use your browser’s Back button to return to your claim, or <a href="/submit/">start again</a>.'}</p></main></body></html>`, { status, headers });
}
async function readSmallBody(request: Request): Promise<string> {
  const declared = request.headers.get("Content-Length");
  if (declared && Number(declared) > MAX_BYTES) throw new RangeError();
  const reader = request.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BYTES) { await reader.cancel(); throw new RangeError(); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}
export async function onRequest({ request, env }: Context): Promise<Response> {
  if (request.method !== "POST") return reply(request, 405, { ok: false, message: "Use the claim form to send a submission." });
  const type = request.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase();
  if (type !== "application/x-www-form-urlencoded") return reply(request, 415, { ok: false, message: "Use the claim form to send a submission." });
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) return reply(request, 403, { ok: false, message: "Please submit from the Mythadis claim form." });
  let params: URLSearchParams;
  try { params = new URLSearchParams(await readSmallBody(request)); }
  catch (error) { return reply(request, error instanceof RangeError ? 413 : 400, { ok: false, message: "The submission is malformed or too large. Please shorten it and try again." }); }
  const allowed = new Set([...Object.keys(limits), "company", "cf-turnstile-response"]);
  for (const key of params.keys()) {
    if (!allowed.has(key) || params.getAll(key).length !== 1) return reply(request, 400, { ok: false, message: "Please check the form and try again." });
  }
  // Give bots the ordinary confirmation, with no verification call and no storage.
  if (params.get("company")?.trim()) return reply(request, 200, { ok: true });
  const fields = {} as Record<keyof typeof limits, string>;
  const errors: Record<string, string> = {};
  for (const key of Object.keys(limits) as (keyof typeof limits)[]) {
    const value = (params.get(key) ?? "").trim();
    fields[key] = value;
    const [min, max] = limits[key];
    if (value.length < min || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) errors[key] = `${labels[key]} must contain ${min ? `${min}–${max}` : `no more than ${max}`} characters of plain text.`;
  }
  try {
    const url = new URL(fields.claim_url);
    if (!["http:", "https:"].includes(url.protocol) || !url.hostname || url.username || url.password) throw new Error();
  } catch { errors.claim_url = "Enter a full HTTP or HTTPS link to the original claim, without login credentials."; }
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = "Enter a valid email address, or leave it empty.";
  if (Object.keys(errors).length) return reply(request, 400, { ok: false, message: "Please check the indicated fields.", errors });
  const token = (params.get("cf-turnstile-response") ?? "").trim();
  if (!token || token.length > 2048) return reply(request, 403, { ok: false, message: "Complete the verification and try again." });
  if (!env.TURNSTILE_SECRET_KEY || !env.CLAIM_SUBMISSIONS) return reply(request, 503, { ok: false, message: unavailable });
  try {
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token }),
      signal: AbortSignal.timeout(10000),
    });
    if (!verification.ok) throw new Error();
    const result = await verification.json() as { success?: boolean; hostname?: string; action?: string };
    if (result.success !== true || result.hostname !== new URL(request.url).hostname || result.action !== "submit_claim") {
      return reply(request, 403, { ok: false, message: "Verification could not be completed. Refresh the verification and try again." });
    }
  } catch { return reply(request, 503, { ok: false, message: unavailable }); }
  const id = crypto.randomUUID();
  const submitted_at = new Date().toISOString();
  const record = { id, submitted_at, status: "new", ...fields, source: "mythadis.com/submit" };
  try { await env.CLAIM_SUBMISSIONS.put(`claim:${submitted_at}:${id}`, JSON.stringify(record)); }
  catch { return reply(request, 503, { ok: false, message: unavailable }); }
  return reply(request, 200, { ok: true, submission_id: id });
}
