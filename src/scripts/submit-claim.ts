const form = document.querySelector<HTMLFormElement>("#claim-form");
const feedback = document.querySelector<HTMLElement>("#claim-feedback");
const button = form?.querySelector<HTMLButtonElement>(".claim-send");
if (form && feedback && button) {
  let sending = false;
  const show = (heading: string, message: string, success = false) => {
    feedback.replaceChildren();
    const title = document.createElement("h2"); title.textContent = heading;
    const text = document.createElement("p"); text.textContent = message;
    feedback.append(title, text);
    feedback.hidden = false;
    feedback.classList.toggle("received", success);
    feedback.focus();
  };
  const resetVerification = () => {
    const api = (window as Window & { turnstile?: { reset(container: HTMLElement): void } }).turnstile;
    const widget = form.querySelector<HTMLElement>(".cf-turnstile");
    if (api && widget) api.reset(widget);
  };
  document.addEventListener("claim-verification", (event) => {
    const state = (event as CustomEvent<string>).detail;
    const help = document.querySelector("#verification-help");
    if (help) help.textContent = state === "verified" ? "Verification complete. Ready to send." : state === "expired" ? "Verification expired. Complete it again before sending." : "Verification could not load. Check your connection and reload the page. Your claim has not been sent.";
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending || form.dataset.configured !== "true") return;
    const values = new URLSearchParams();
    for (const [key, value] of new FormData(form)) if (typeof value === "string") values.append(key, value.trim());
    if (!values.get("cf-turnstile-response")) {
      show("CHECK THE VERIFICATION", "Complete the verification before sending your claim. If it has not loaded, check your connection and reload the page."); return;
    }
    form.querySelectorAll<HTMLElement>(".field-error").forEach(el => { el.hidden = true; el.textContent = ""; });
    form.querySelectorAll("[aria-invalid]").forEach(el => el.removeAttribute("aria-invalid"));
    sending = true; button.disabled = true; button.textContent = "SENDING TO THE LAB…"; form.setAttribute("aria-busy", "true");
    try {
      const response = await fetch(form.action, {
        method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded" },
        body: values, signal: AbortSignal.timeout(20000),
      });
      const result = await response.json() as { ok?: boolean; message?: string; errors?: Record<string, string> };
      if (response.ok && result.ok === true) {
        form.hidden = true;
        show("CLAIM RECEIVED", "It's in the evidence pile. If it survives triage, it may become a Mythadis investigation.", true);
        return;
      }
      show("CLAIM NOT RECEIVED", result.message ?? "The lab could not receive your claim. Please try again later.");
      if (result.errors) for (const [key, message] of Object.entries(result.errors)) {
        const input = form.elements.namedItem(key);
        const error = document.getElementById(`${key}-error`);
        if (input instanceof HTMLElement && error) { input.setAttribute("aria-invalid", "true"); error.textContent = message; error.hidden = false; }
      }
      resetVerification();
    } catch {
      show("RECEIPT NOT CONFIRMED", "We could not confirm whether the lab received your claim. Check your connection before trying again. Your form details are still here.");
      resetVerification();
    } finally {
      sending = false; button.disabled = false; button.textContent = "SEND THE CLAIM →"; form.removeAttribute("aria-busy");
    }
  });
}
