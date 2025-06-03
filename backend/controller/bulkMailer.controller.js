import sibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

export const bulkMailer = async (req, res) => {
  try {
    const brevoClient = sibApiV3Sdk.ApiClient.instance;
    const apiKey = brevoClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const { recipient, subject } = req.body;

    if (!recipient || !subject) {
      return res.status(400).json({ message: "Missing or invalid required fields" });
    }

    const emailApi = new sibApiV3Sdk.TransactionalEmailsApi();

    const sender = { email: "no-reply@thinkbig.org.np", name: "Think Big Org" };

    const emailData = {
      sender,
      to: [{ email: recipient.email }],
      subject,
      htmlContent: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Registration Confirmation</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <!-- Header -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
            style="max-width: 600px; margin: 0 auto; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px; margin-bottom: 5px;">
            <tr>
                <!-- Logo Column -->
                <td style="width: 100px; padding: 10px;">
                    <img src="https://www.thinkbig.org.np/Logo_noBg.png" alt="Think Big Logo"
                        style="max-width: 100%; height: auto; display: block; margin: 0 auto;" />
                </td>

                <!-- Text Column -->
                <td style="padding: 10px; text-align: center; font-family: 'Poppins', Arial, sans-serif;">
                    <h1 style="margin: 0; font-size: 24px; color: #2D9C6D;">Think Big Organization</h1>
                    <p style="margin: 0 0; font-size: 12px; color: #777;">Serving since 2023</p>
                    <p style="margin: 0 0; font-size: 10px; color: #777;">Regd. No. 3435/080/081</p>
                    <p style="margin: 5px 0; font-size: 14px;">
                        <a href="https://www.thinkbig.org.np" target="_blank"
                            style="color: #2D9C6D; text-decoration: none;">thinkbig.org.np</a>
                    </p>
                </td>
            </tr>
        </table>


        <!-- email body -->
        <div style="color: #333; font-size: 15px;">
            <div style="padding: 0px;">
                <p>Dear <span style="color:#2D9C6D">${recipient.firstName}</span>,</p>

                <div>
                    <p>
                        Thank you for your interest in the Arjuna Scholarship.
                    </p>


                    <p>
                        As of now, we haven’t received your application via the <a target="_blank"
                            style="text-decoration: none; color: #2D9C6D; font-weight: 600;"
                            href="https://forms.gle/PjGDjcGYksch7iky5">Google Form</a>.

                    </p>
                    <P>There’s only <strong style="color: #2D9C6D;">one day</strong> left to submit your application —
                        please make sure to
                        complete the form by
                        tomorrow midnight (June
                        4, 2025) to be considered.

                    </P>
                    <table cellspacing="0" cellpadding="0" style="  color: #333; line-height: 1.2;">
                        <tr>
                            <td style="padding-bottom: 0px;">Wishing you all the best,</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 0px;">
                                <a href="https://manishmahato.info.np" target="_blank"
                                    style="color: #333; text-decoration: none;">
                                    Manish Singh Mahato
                                </a>
                            </td>
                        </tr>

                    </table>

                </div>
            </div>
        </div>
        <hr />
        <!-- three button -->
        <table role="presentation" cellpadding="0" cellspacing="0" style=" width: 100%; max-width: 600px;">
            <tr>
                <td style="padding: 5px; width: 33.33%; text-align: center;">
                    <a href="https://www.thinkbig.org.np/giveus" target="_blank"
                        style="display: inline-block; width: 90%; padding: 10px 0; background-color: #2D9C6D; color: #ffffff; border-radius: 5px; text-decoration: none; font-size: 14px; font-family: Arial, sans-serif;">
                        ❤️ Support
                    </a>
                </td>
                <td style="padding: 5px; width: 33.33%; text-align: center;">
                    <a href="https://www.thinkbig.org.np/2025" target="_blank"
                        style="display: inline-block; width: 90%; padding: 10px 0; background-color: #2D9C6D; color: #ffffff; border-radius: 5px; text-decoration: none; font-size: 14px; font-family: Arial, sans-serif;">
                        🎯 2025 Goal
                    </a>
                </td>
                <td style="padding: 5px; width: 33.33%; text-align: center;">
                    <a href="https://www.thinkbig.org.np/event" target="_blank"
                        style="display: inline-block; width: 90%; padding: 10px 0; background-color: #2D9C6D; color: #ffffff; border-radius: 5px; text-decoration: none; font-size: 14px; font-family: Arial, sans-serif;">
                        📅 Events
                    </a>
                </td>
            </tr>
        </table>

        <!-- main Footer -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
            style="max-width: 600px; margin: 10px auto 0 auto; font-family: 'Poppins', Arial, sans-serif;">
            <tr>
                <!-- Left Column -->
                <td style="width: 50%; padding: 10px; font-size: 12px; color: #777; vertical-align: top;">
                    <p style="margin: 0 0 0 0;">Think Big<br />Dhanusha, Nepal<br />Regd. No. 3435/080/081</p>
                    <p style="margin: 0 0 0 0;">
                        Email:
                        <a href="mailto:contact@thinkbig.org.np" style="color: #2D9C6D; text-decoration: none;">
                            contact@thinkbig.org.np
                        </a>
                    </p>
                    <p style="margin: 0;">© 2025 Think Big. All rights reserved.</p>
                </td>

                <!-- Right Column -->
                <td
                    style="width: 50%; padding: 10px; text-align: center; font-family: 'Playfair Display', serif; font-size: 16px; color: #333; vertical-align: middle;">
                    <p style="margin: 0;">"Ending Exploitation, Ensuring Education"</p>
                </td>
            </tr>
        </table>
        <!-- footer -->

        <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
            style="max-width: 600px; margin: 1px auto 0 auto; border-top: 1px solid #ccc; font-family: 'Poppins', Arial, sans-serif;">
            <tr>
                <td style="padding: 15px 10px; text-align: center; font-size: 12px; color: #777;">
                    <p style="margin: 0 0 0px 0;">This is an automated email. Please do not reply to this message.</p>
                    <p style="margin: 0;">
                        For immediate technical support mail at:
                        <a href="mailto:email@manishmahato.info.np" style="color: #2D9C6D; text-decoration: none;">
                            email@manishmahato.info.np
                        </a>
                    </p>
                </td>
            </tr>

        </table>
        <img style="height: 100%; width: 100%;" src="https://www.thinkbig.org.np/webi/Mountains&Temples.png">
    </div>

</body>

</html>`,
    };
    await emailApi.sendTransacEmail(emailData);

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Failed to send emails:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
