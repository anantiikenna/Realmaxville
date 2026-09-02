"use server";

// In-Memory Rate Limiter (Max 3 submissions per 10 minutes)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.delete(identifier);
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}

// XSS Prevention - HTML Escaping
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export type ContactActionResult = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(formData: FormData): Promise<ContactActionResult> {
  try {
    const name = (formData.get("name") as string | null)?.trim() ?? "";
    const email = (formData.get("email") as string | null)?.trim().toLowerCase() ?? "";
    const phone = (formData.get("phone") as string | null)?.trim() ?? "";
    const subject = (formData.get("subject") as string | null)?.trim() ?? "General Inquiry";
    const message = (formData.get("message") as string | null)?.trim() ?? "";
    const hp = (formData.get("hp_field") as string | null) ?? "";
    const smsConsent = formData.get("sms_consent") === "true";

    // 1. Honeypot check (silently reject bots)
    if (hp) {
      return { success: true };
    }

    // 2. Rate Limit check
    const rateLimitKey = email || "anonymous";
    if (isRateLimited(rateLimitKey)) {
      return {
        success: false,
        error: "Too many contact submissions. Please wait a few minutes before trying again.",
      };
    }

    // 3. Server-side Validation
    if (!name || name.length > 100) {
      return { success: false, error: "Please provide a valid full name (max 100 characters)." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return { success: false, error: "Please provide a valid email address." };
    }

    if (phone) {
      const phoneRegex = /^[\d\s\+\-\(\)]{7,20}$/;
      if (!phoneRegex.test(phone)) {
        return { success: false, error: "Please provide a valid phone number." };
      }
    }

    if (!message || message.length < 10) {
      return { success: false, error: "Please enter a message of at least 10 characters." };
    }

    // 4. Sanitize inputs to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    console.log("[CONTACT_FORM_SUBMISSION]", {
      timestamp: new Date().toISOString(),
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      subject: safeSubject,
      messageSnippet: safeMessage.slice(0, 50),
      smsConsent,
      consentVersion: "1.0",
    });

    return { success: true };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    console.error("[ContactAction] Error processing form:", errorMsg);
    return {
      success: false,
      error: "An unexpected error occurred while processing your request. Please try again or call us.",
    };
  }
}
