import express from "express";

import application from "../model/apply.model.js";
import { sendConfirmationEmail } from "./mail.controller.js";

export const applicationReg = async (req, res) => {
  let firstName, lastName;
  try {
    const { fullName, email, address, date } = req.body;

    const user = await application.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "You have already applied" });
    }

    const applicationRegTemp = new application({
      fullName: fullName,
      email: email,
      address: address,
      date: date,
    });

    await applicationRegTemp.save();

    if (fullName) {
      const nameParts = (fullName || "N/A").trim().split(" ");
      firstName = nameParts.shift();
      lastName = nameParts.join(" ");
    }
    const emailStatus = await sendConfirmationEmail({
      fullName: fullName,
      address,
      eventName: "Application for Arjuna",
      email,
      date,
      brevoListId: 13,
      emailContent: `<!DOCTYPE html>
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
                    <p>Thank you for your interest in Arjuna Scholarship-2025.</p>

                    <p style="text-wrap:none;">Please complete your registration by filling up this
                        <a style="color: #2D9C6D; font-weight: 800; text-decoration:none;"
                            href="https://forms.gle/PjGDjcGYksch7iky5"> Google
                            form</a>

                    </p>
                    <p style=" font-size:11px; font-weight: 700;">Note: We recommend you to not share this google form
                        randomly, instead,
                        you may share our
                        website's application page.</p>
                    <table cellspacing="0" cellpadding="0" style="  color: #333; line-height: 1.2;">
                        <tr>
                            <td style="padding-bottom: 0px;">Wishing you all the best,</td>
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
                            contact@thinkbig.org.np </a>
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
                            email@manishmahato.info.np </a>
                    </p>
                </td>
            </tr>
        </table>
        <img style="height: 100%; width: 100%;" src="https://www.thinkbig.org.np/webi/Mountains&Temples.png" />
    </div>
</body>

</html>`,
    });

    res.status(201).json({ message: "Email registered", emailStatus });
  } catch (error) {
    console.log("Failed apply_controller.js", error.message);
    res.status(500).json({ message: error.message });
  }
};
