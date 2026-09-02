"use server";

import { sendNotificationEmail } from "@/lib/mailer";

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
    const location = (formData.get("location") as string | null)?.trim() ?? "";
    const projectType = (formData.get("projectType") as string | null)?.trim() ?? "General Inquiry";
    const budget = (formData.get("budget") as string | null)?.trim() ?? "Unspecified";
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
      return { success: false, error: "Please enter project vision details of at least 10 characters." };
    }

    // 4. Sanitize inputs to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeLocation = escapeHtml(location);
    const safeProjectType = escapeHtml(projectType);
    const safeBudget = escapeHtml(budget);
    const safeMessage = escapeHtml(message);

    console.log("[CONTACT_FORM_SUBMISSION]", {
      timestamp: new Date().toISOString(),
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      location: safeLocation,
      projectType: safeProjectType,
      budget: safeBudget,
      messageSnippet: safeMessage.slice(0, 50),
      smsConsent,
      consentVersion: "1.0",
    });

    // 5. Send notification email if configured
    const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || "admin@realmaxville.com";
    await sendNotificationEmail({
      to: recipient,
      replyTo: safeEmail,
      subject: `[Realmaxville Consultation] ${safeProjectType} - ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
          <h2>New Executive Consultation Request</h2>
          <p><strong>Full Name:</strong> ${safeName}</p>
          <p><strong>Email Address:</strong> ${safeEmail}</p>
          <p><strong>Phone / WhatsApp:</strong> ${safePhone || "Not provided"}</p>
          <p><strong>Proposed Location:</strong> ${safeLocation || "Not provided"}</p>
          <p><strong>Project Type:</strong> ${safeProjectType}</p>
          <p><strong>Target Budget:</strong> ${safeBudget}</p>
          <p><strong>SMS Opt-In:</strong> ${smsConsent ? "YES (Consented)" : "NO"}</p>
          <hr />
          <h3>Project Vision & Notes:</h3>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; rounded: 8px;">${safeMessage}</p>
        </div>
      `,
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
