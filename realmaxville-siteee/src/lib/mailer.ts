export interface SendEmailPayload {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendNotificationEmail(payload: SendEmailPayload): Promise<boolean> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log("[MAILER_SIMULATION] SMTP credentials not configured. Notification payload:", payload);
    return true;
  }

  try {
    // Safe dynamic require check to avoid TS missing module errors when nodemailer is optional
    const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
    const nodemailer = requireFunc("nodemailer");
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Realmaxville System" <${smtpUser}>`,
      to: payload.to,
      replyTo: payload.replyTo,
      subject: payload.subject,
      html: payload.html,
    });

    return true;
  } catch (err) {
    console.error("[Mailer] Transporter error or missing dependency:", err instanceof Error ? err.message : err);
    return false;
  }
}

declare const __webpack_require__: any;
declare const __non_webpack_require__: any;
