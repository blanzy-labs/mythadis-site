import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onRequest } from '../functions/api/claims.ts';
const valid = { claim_url: 'https://example.com/claim', claim_summary: 'A device promises free energy.', why_interesting: 'Can the output exceed the input?', 'cf-turnstile-response': 'test-token' };
const verifyOK = { success: true, hostname: 'mythadis.com', action: 'submit_claim' };
async function run(fields = valid, options = {}) {
  const stored = []; const calls = [];
  const original = globalThis.fetch;
  globalThis.fetch = async (url, init) => {
    calls.push({ url, init });
    if (options.verifyThrows) throw Error('secret internal error');
    return new Response(JSON.stringify(options.verification ?? verifyOK), { status: options.verifyStatus ?? 200 });
  };
  try {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json', ...(options.headers ?? {}) };
    const request = new Request('https://mythadis.com/api/claims', { method: options.method ?? 'POST', headers, ...(!['GET', 'HEAD'].includes(options.method) ? { body: options.raw ?? new URLSearchParams(fields) } : {}) });
    const env = options.noEnv ? {} : { TURNSTILE_SECRET_KEY: 'private-test-secret', CLAIM_SUBMISSIONS: { async put(key, value) { if (options.storageThrows) throw Error('secret storage identifier'); stored.push({ key, value: JSON.parse(value) }); } } };
    const response = await onRequest({ request, env });
    const content = await response.text();
    const json = response.headers.get('Content-Type').includes('application/json') ? JSON.parse(content) : undefined;
    assert.equal(response.headers.get('Cache-Control'), 'no-store');
    assert.ok(!content.includes('private-test-secret'));
    return { response, json, content, stored, calls };
  } finally { globalThis.fetch = original; }
}
test('minimal submission verified and stored once with server metadata and no sensitive extras', async () => {
  const r = await run(); assert.equal(r.response.status, 200); assert.equal(r.json.ok, true); assert.equal(r.stored.length, 1);
  const { key, value } = r.stored[0];
  assert.match(key, /^claim:\d{4}-\d\d-\d\dT.+:[a-f0-9-]{36}$/);
  assert.equal(value.id, r.json.submission_id); assert.equal(key, `claim:${value.submitted_at}:${value.id}`);
  assert.equal(value.status, 'new'); assert.equal(value.source, 'mythadis.com/submit');
  assert.deepEqual(Object.keys(value).sort(), ['id','submitted_at','status','claim_url','claim_summary','why_interesting','name','email','notes','source'].sort());
  assert.equal(value.email, '');
  const params = r.calls[0].init.body;
  assert.equal(params.get('response'), 'test-token'); assert.equal(params.get('secret'), 'private-test-secret'); assert.equal(params.has('remoteip'), false);
});
test('optional fields trimmed and stored as plain text without interpretation', async () => {
  const r = await run({ ...valid, name: '  Example Person  ', email: ' test@example.com ', notes: ' <script>alert(1)</script> ' });
  assert.equal(r.response.status, 200); assert.equal(r.stored[0].value.name, 'Example Person'); assert.equal(r.stored[0].value.notes, '<script>alert(1)</script>');
  assert.ok(!r.content.includes('<script>'));
});
for (const [name, fields, field] of [
  ['missing URL', { ...valid, claim_url: '' }, 'claim_url'],
  ['malformed URL', { ...valid, claim_url: 'not a url' }, 'claim_url'],
  ['non-HTTP URL', { ...valid, claim_url: 'javascript:alert(1)' }, 'claim_url'],
  ['credentials in URL', { ...valid, claim_url: 'https://user:pass@example.com/' }, 'claim_url'],
  ['missing summary', { ...valid, claim_summary: '' }, 'claim_summary'],
  ['noise summary', { ...valid, claim_summary: '   x   ' }, 'claim_summary'],
  ['missing reason', { ...valid, why_interesting: '' }, 'why_interesting'],
  ['invalid email', { ...valid, email: 'invalid' }, 'email'],
  ['oversized summary', { ...valid, claim_summary: 'x'.repeat(1201) }, 'claim_summary'],
  ['oversized reason', { ...valid, why_interesting: 'x'.repeat(1601) }, 'why_interesting'],
  ['oversized name', { ...valid, name: 'x'.repeat(101) }, 'name'],
  ['oversized notes', { ...valid, notes: 'x'.repeat(2001) }, 'notes'],
  ['control characters', { ...valid, notes: '\u0000' }, 'notes'],
]) test(name, async () => { const r = await run(fields); assert.equal(r.response.status, 400); assert.ok(r.json.errors[field]); assert.equal(r.stored.length, 0); assert.equal(r.calls.length, 0); });
test('honeypot returns ordinary success without verification or storage', async () => { const r = await run({ ...valid, company: 'bot' }); assert.equal(r.json.ok, true); assert.equal(r.stored.length, 0); assert.equal(r.calls.length, 0); });
for (const token of ['', 'x'.repeat(2049)]) test(`missing or excessive token (${token.length})`, async () => { const r = await run({ ...valid, 'cf-turnstile-response': token }); assert.equal(r.response.status, 403); assert.equal(r.stored.length, 0); assert.equal(r.calls.length, 0); });
for (const verification of [{ success: false }, { success: true }, { ...verifyOK, hostname: 'other.example' }, { ...verifyOK, action: 'other' }]) test(`invalid verification ${JSON.stringify(verification)}`, async () => { const r = await run(valid, { verification }); assert.equal(r.response.status, 403); assert.equal(r.stored.length, 0); });
for (const options of [{ storageThrows: true }, { verifyThrows: true }, { verifyStatus: 500 }, { noEnv: true }]) test(`safe unavailable response ${JSON.stringify(options)}`, async () => { const r = await run(valid, options); assert.equal(r.response.status, 503); assert.equal(r.stored.length, 0); assert.ok(!r.content.includes('secret')); });
test('payload cap applies without content-length', async () => { const r = await run(valid, { raw: 'notes=' + 'x'.repeat(32769) }); assert.equal(r.response.status, 413); assert.equal(r.stored.length, 0); });
test('payload cap applies with content-length', async () => { const r = await run(valid, { headers: { 'Content-Length': '99999' } }); assert.equal(r.response.status, 413); });
test('duplicate fields rejected', async () => { const r = await run(valid, { raw: new URLSearchParams(valid).toString() + '&claim_url=https://other.example' }); assert.equal(r.response.status, 400); });
test('unknown fields and uploads rejected', async () => { const r = await run({ ...valid, ip: '1.2.3.4' }); assert.equal(r.response.status, 400); const upload = await run(valid, { headers: { 'Content-Type': 'multipart/form-data' } }); assert.equal(upload.response.status, 415); });
test('cross-origin submission rejected', async () => { const r = await run(valid, { headers: { Origin: 'https://other.example' } }); assert.equal(r.response.status, 403); });
for (const method of ['GET','HEAD','PUT','DELETE','OPTIONS']) test(`${method} disallowed`, async () => { const r = await run(valid, { method }); assert.equal(r.response.status, 405); assert.equal(r.response.headers.get('Allow'), 'POST'); assert.equal(r.stored.length, 0); });
test('normal POST returns readable HTML confirmation; errors contain no submitted markup', async () => { const r = await run(valid, { headers: { Accept: 'text/html' } }); assert.ok(r.content.includes('CLAIM RECEIVED')); const bad = await run({ ...valid, claim_url: '<script>bad</script>' }, { headers: { Accept: 'text/html' } }); assert.equal(bad.response.status, 400); assert.ok(bad.content.includes('CLAIM NOT RECEIVED')); assert.ok(!bad.content.includes('<script>')); });
