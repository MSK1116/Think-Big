import sibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

const brevoClient = sibApiV3Sdk.ApiClient.instance;
const apiKey = brevoClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

export const sendConfirmationEmail = async (userDetails) => {
  try {
    const emailApi = new sibApiV3Sdk.TransactionalEmailsApi();

    const sender = {
      email: "no-reply@thinkbig.org.np", // Replace with your email
      name: "Think Big", // Replace with your app name
    };

    const receivers = [{ email: userDetails.email }];

    const emailContent = {
      sender,
      to: receivers,
      subject: `Registration Confirmation for ${userDetails.eventName}`,
      htmlContent: `
        <h1>Hi ${userDetails.Fullname},</h1>
        <p>Thank you for registering for the event <strong>${userDetails.eventName}</strong>.</p>
        <p>Here are your details:</p>
        <ul>
          <li><strong>Full Name:</strong> ${userDetails.Fullname}</li>
          <li><strong>Email:</strong> ${userDetails.email}</li>
          <li><strong>Address:</strong> ${userDetails.address}</li>
          <li><strong>Message:</strong> ${userDetails.textarea}</li>
          <li><strong>Date:</strong> ${userDetails.date}</li>
        </ul>
        <p>We look forward to seeing you at the event!</p>
        <p>Best regards,</p>
        <p>Your Team</p>
      `,
    };

    await emailApi.sendTransacEmail(emailContent);
    return "sent";
  } catch (error) {
    console.error("Error while sending email:", error.message);
    return "failed";
  }
};
