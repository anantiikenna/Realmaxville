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
    console.log("[MAILER_SIMULATION] SMTP credentials not configured. Email logged to console:", payload);
    return true;
  }

  try {
    // Dynamic import of nodemailer if available
    const nodemailer = await import("nodemailer");
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
    console.error("[Mailer] Failed to send email via SMTP:", err instanceof Error ? err.message : err);
    return false;
  }
}
