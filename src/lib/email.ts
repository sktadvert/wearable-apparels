// Listmonk API integration for transactional emails
const LISTMONK_URL = process.env.LISTMONK_URL || "http://localhost:9000";
const LISTMONK_USER = process.env.LISTMONK_USER || "admin";
const LISTMONK_PASS = process.env.LISTMONK_PASSWORD || "";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${Buffer.from(`${LISTMONK_USER}:${LISTMONK_PASS}`).toString("base64")}`,
};

export async function sendTransactionalEmail({
  to,
  subject,
  body,
  templateId,
  data,
}: {
  to: string;
  subject: string;
  body?: string;
  templateId?: number;
  data?: Record<string, unknown>;
}) {
  try {
    const payload: Record<string, unknown> = {
      subscriber_email: to,
      subject,
    };

    if (templateId) {
      payload.template_id = templateId;
      payload.data = data || {};
    } else {
      payload.body = body || "";
      payload.content_type = "html";
    }

    const res = await fetch(`${LISTMONK_URL}/api/tx`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Listmonk email error:", error);
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    console.error("Email send failed:", error);
    // Don't throw — email failures shouldn't crash the app
    return { success: false, error: String(error) };
  }
}

// Pre-built email templates
export function rfqConfirmationEmail(name: string, rfqId: string) {
  return {
    subject: "We've received your project request — Wearable Apparels",
    body: `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f0f0f0; padding: 40px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <div style="display: inline-block; padding: 12px 20px; background: linear-gradient(135deg, #c9a96e, #e0c992); border-radius: 12px;">
            <span style="color: #0a0a0a; font-weight: 900; font-size: 18px;">WA</span>
          </div>
        </div>
        <h1 style="color: #c9a96e; font-size: 24px; margin-bottom: 16px;">Project Request Received</h1>
        <p style="color: #999; line-height: 1.6;">Hi ${name},</p>
        <p style="color: #999; line-height: 1.6;">
          We've received your project request and our team is reviewing it.
          You'll hear back from us within 24-48 hours with a detailed quote.
        </p>
        <div style="background: rgba(201, 169, 110, 0.1); border: 1px solid rgba(201, 169, 110, 0.2); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <p style="color: #c9a96e; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Reference ID</p>
          <p style="color: #fff; font-size: 18px; font-weight: 700;">${rfqId}</p>
        </div>
        <p style="color: #999; line-height: 1.6;">
          In the meantime, you can track your request status in your dashboard.
        </p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || "https://wearableapparels.com"}/dashboard/rfq"
           style="display: inline-block; padding: 14px 32px; background: #c9a96e; color: #0a0a0a; font-weight: 700; border-radius: 12px; text-decoration: none; margin-top: 16px;">
          View Dashboard
        </a>
        <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 32px 0;" />
        <p style="color: #555; font-size: 12px;">
          Wearable Apparels — Premium Custom Manufacturing<br />
          <a href="https://instagram.com/wearable_apparels" style="color: #c9a96e;">@wearable_apparels</a>
        </p>
      </div>
    `,
  };
}

export function rfqAdminNotification(rfqData: {
  name: string;
  email: string;
  company: string;
  projectType: string;
  quantity: number;
  description: string;
}) {
  return {
    subject: `🔔 New RFQ: ${rfqData.projectType} × ${rfqData.quantity} — ${rfqData.company || rfqData.name}`,
    body: `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>New Project Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 600;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${rfqData.name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 600;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${rfqData.email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 600;">Company</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${rfqData.company || "N/A"}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 600;">Project</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${rfqData.projectType}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 600;">Quantity</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${rfqData.quantity}</td></tr>
          <tr><td style="padding: 8px; font-weight: 600;">Description</td><td style="padding: 8px;">${rfqData.description}</td></tr>
        </table>
      </div>
    `,
  };
}
