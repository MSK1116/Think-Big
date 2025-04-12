import sibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

export const bulkMailer = async (req, res) => {
  try {
    const { recipients, subject } = req.body;

    if (!recipients || !Array.isArray(recipients) || recipients.length === 0 || !subject) {
      return res.status(400).json({ message: "Missing or invalid required fields" });
    }

    // Immediately respond so client doesn't timeout
    res.status(202).json({ message: "Email sending started in background" });

    // Async sending in background
    setImmediate(async () => {
      const brevoClient = sibApiV3Sdk.ApiClient.instance;
      const apiKey = brevoClient.authentications["api-key"];
      apiKey.apiKey = process.env.BREVO_API_KEY;

      const emailApi = new sibApiV3Sdk.TransactionalEmailsApi();

      const sender = { email: "no-reply@thinkbig.org.np", name: "Think Big | Event Wing" };

      for (const recipient of recipients) {
        if (!recipient.firstName || !recipient.email) continue;

        const emailData = {
          sender,
          to: [{ email: recipient.email }],
          subject,
          htmlContent: `<p>Hi ${recipient.firstName},<br/>Mental Health Program is happening tonight. Join us at 8PM <a href="https://www.thinkbig.org.np/joinevent">here</a>.</p>`,
        };

        try {
          await emailApi.sendTransacEmail(emailData);
        } catch (e) {
          console.error(`Failed for ${recipient.email}:`, e.message);
        }
      }

      console.log("Bulk email job finished.");
    });
  } catch (error) {
    console.error("Failed to start email job:", error.message);
    res.status(500).json({ message: "Failed to start email job" });
  }
};
