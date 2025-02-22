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
          <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Registration Confirmation</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
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
        .header {
            display: flex;
            align-items: center;
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
            position: relative;
        }
        .logo-col {
            flex: 0 0 50px;
        }
        .logo-col img {
            max-width: 100px;
        }
        .text-col {
            flex: 1;
            padding-left: 15px;
        }
        .text-col h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 28px;
            color: #2D9C6D; /* bg-emeralad-700 color */
            margin: 0;
            text-align: center;
        }
        .text-col p {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 14px;
            color: #777;
            margin: 5px 0 0 0;
            text-align: center;
        }
        .reg-number {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 10px;
            color: #777;
            text-align: center;
        }
        .email-content {
            font-size: 16px;
            color: #333;
            line-height: 1.6;
        }
        .btn-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            gap: 10px;
        }
        .btn {
            display: inline-block;
            padding: 10px 10px;
            background-color: #2D9C6D; /* bg-emeralad-700 */
            color: white;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
            width: 48%; /* Adjust width for side-by-side */
            margin-bottom: 10px;
            margin-left: 10px; /* Add gap between buttons on mobile */
        }
        .btn i {
            margin-right: 8px; /* Add some space between the icon and the text */
        }
        .footer {
            font-size: 14px;
            text-align: center;
            color: #777;
            padding-top: 20px;
        }
        .footer p {
            margin: 5px 0;
        }
        .footer a {
            color: #3498db;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: none;
        }
        /* Footer Styles */
        .footer-container {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            font-family: 'Poppins', sans-serif;
        }
        .footer-left {
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
            color: #777;
            text-align: left;
            width: 50%;
        }
        .footer-left p {
            margin: 0;
        }
        .footer-right {
            font-family: 'Playfair Display', serif;
            font-size: 16px;
            color: #333;
            text-align: center;
            width: 50%;
        }
        /* Responsive adjustments */
        @media screen and (max-width: 600px) {
            .btn {
                width: 100%; /* Stack buttons full width on small screens */
            }
            .footer-container {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>

    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo-col">
                <img src="https://www.thinkbig.org.np/Logo_noBg.png" alt="Think Big Logo">
            </div>
            <div class="text-col">
                <h1>Think Big Organization</h1>
                <p>Serving since 2023</p>
                <div class="reg-number">
                    Regd. No. 3435/080/081
                </div>
                <p><a href="https://www.thinkbig.org.np" style="color: #2D9C6D; text-decoration: none;">thinkbig.org.np</a></p>
            </div>
        </div>

 
        <div class="email-content">
           <div >
  <div style="padding: 20px;">
    <p>Hello ${recipient.firstName},</p>
    
    <p>I hope you're having a great time,</p>
    
    <p>Thank you for registering for the mental health program. Today is the first episode of this program, so please join with 
      <a href="https://www.thinkbig.org.np/joinevent" style="color: #007bff; text-decoration: none;">this link</a> 
      not later than 8PM.
    </p>
    
    <p>This program spans up to six episodes and we will try to cover everything possible. If you want to give any suggestions about things that you would like to be included, please 
      <a href="https://www.thinkbig.org.np/contact" style="color: #007bff; text-decoration: none;">fill this form</a> 
      or directly email us.
    </p>
    
    <p>We expect you to maintain a peaceful environment during our sessions and any bad act can result in dismissal from our upcoming sessions and program.</p>
    
    
    
   
  </div>
</div>
<hr>

            <!-- Button Container with Support, Our 2025 Goal, and FAQ -->
            <div class="btn-container">
                <a href="https://www.thinkbig.org.np/giveus" class="btn">
                    <i class="fa fa-heart"></i> Support Our Mission
                </a>
                <a href="https://www.thinkbig.org.np/2025" class="btn">
                    Our 2025 Goal
                </a>
                <a href="https://www.thinkbig.org.np/event" class="btn">
                Event
                </a>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer-container">
            <div class="footer-left">
                <p>Think Big<br>Dhanusha, Nepal<br>Regd. No. 3435/080/081</p>
 <p>Email: <a href="mailto:contact@thinkbig.org.np" style="color: #2D9C6D;">contact@thinkbig.org.np</a></p>
 <p>Copyright © 2025. All rights reserved.</p>
            </div>
            <div class="footer-right">
                <p>"Ending Exploitation, Ensuring Education"</p>
               
            </div>
        </div>
<hr>
        <div class="footer">
            <p>This is an automated email. Please do not reply to this message.</p>
<p>For immediate technical support mail at: <a href="mailto:email@manishmahato.info.np">email@manishmahato.info.np</a> </p>
        </div>
    </div>

</body>
</html>
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
