import sibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

export const bulkMailer = async (req, res) => {
  try {
    const brevoClient = sibApiV3Sdk.ApiClient.instance;
    const apiKey = brevoClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const { recipients, subject } = req.body;

    if (!recipients || !Array.isArray(recipients) || recipients.length === 0 || !subject) {
      return res.status(400).json({ message: "Missing or invalid required fields" });
    }

    const emailApi = new sibApiV3Sdk.TransactionalEmailsApi();

    const sender = { email: "no-reply@thinkbig.org.np", name: "Think Big | Event Wing" };

    // Send emails one by one (since free-tier does not support bulk sending)
    for (const recipient of recipients) {
      if (!recipient.firstName || !recipient.email) continue; // Skip invalid recipients

      const emailData = {
        sender,
        to: [{ email: recipient.email }],
        subject,
        htmlContent: `
          <p>Dear ${recipient.firstName},</p>
          <p>This is a gentle reminder about our first session on <strong>Saturday, February 22, at 8 PM</strong>.</p>
          <p>Your privacy is important to us—enabling your camera or microphone is entirely optional.</p>
          <p>Looking forward to seeing you there!</p>
          <p>Regards, <br> Think Big Organization</p>
        `,
      };

      await emailApi.sendTransacEmail(emailData);
    }

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Failed to send emails:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
