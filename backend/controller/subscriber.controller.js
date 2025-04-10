import express from "express";
import subscriber from "../model/subscriber.model.js";
import { sendConfirmationEmail } from "./mail.controller.js";

export const subscriberReg = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await Event.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "You have already Subscribed" });
    }

    const subscriberRegTemp = new subscriber({
      email: email,
      date: date,
    });

    await subscriberRegTemp.save();

    const emailStatus = await sendConfirmationEmail({
      eventName: "Newsletter",
      email,
      date,
      brevoListId: 12,
      emailContent: `
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
    <p>Hey BIG THINKER <span style="color:#2D9C6D">${firstName}</span>, </p>

<div>


 <p>Thank you for registering for <strong>${eventName}</strong>. We have received your registration successfully.</p>

            <p>Our team will send you a follow-up email shortly, including all the details you'll need for the event.</p>


  <p>This program spans six episodes, and we aim to cover as much as possible. If you have any suggestions for topics you’d like us to include, please fill out  
    <a href="https://www.thinkbig.org.np/contact" style="color: #007bff; text-decoration: none;">this form</a>  
    or email us directly.
  </p>

  <p>Just in case you missed the first episode, you can use  
    <a href="https://docs.google.com/presentation/d/1-7OnsbZ8e2vArNIfDJbu9gRIXnXOxjGv/edit?usp=sharing&ouid=116334907021628253115&rtpof=true&sd=true" style="color: #007bff; text-decoration: none;">this link</a>  
    to access the PPT. </p>
  <p>Don't forget to share our registration page so others can join too! </p>
</div>

  </div>
</div>
<hr>

        
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
    });

    res.status(201).json({ message: "Event registered", emailStatus });
  } catch (error) {
    console.log("Failed event_controller.js", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
