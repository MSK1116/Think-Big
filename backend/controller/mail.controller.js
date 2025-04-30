import sibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

const brevoClient = sibApiV3Sdk.ApiClient.instance;
const apiKey = brevoClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

export const sendConfirmationEmail = async (userDetails) => {
  try {
    let firstName, lastName;
    const emailApi = new sibApiV3Sdk.TransactionalEmailsApi();
    const contactApi = new sibApiV3Sdk.ContactsApi();

    if (userDetails.fullName) {
      const nameParts = (userDetails.fullName || "N/A").trim().split(" ");
      firstName = nameParts.shift();
      lastName = nameParts.join(" ");
    }

    const sender = {
      email: "no-reply@thinkbig.org.np", // Replace with your email
      name: "Think Big", // Replace with your app name
    };

    const receivers = [{ email: userDetails.email }];

    const emailContent = {
      sender,
      to: receivers,
      subject: `Registration Confirmation for ${userDetails.eventName}`,
      htmlContent: `${userDetails.emailContent}`,
    };

    await emailApi.sendTransacEmail(emailContent);

    const contactData = {
      email: userDetails.email,

      listIds: [userDetails.brevoListId], // Replace with your Brevo List ID
      attributes: {
        FIRSTNAME: firstName || "N/A",
        LASTNAME: lastName || "N/A",
        ADDRESS: userDetails.address || "N/A",
        EVENT: userDetails.eventName || "N/A",
      },
    };

    await contactApi.createContact(contactData);

    return " sent";
  } catch (error) {
    console.error("Error while sending email:", error.message);
    return " failed";
  }
};
