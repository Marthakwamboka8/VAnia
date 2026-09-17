import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get("/", (req, res) => {
  res.json({
    message: "VAnia backend is running successfully!",
  });
});

app.post("/api/consultation", async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      support,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Please fill in your name, email and message.",
      });
    }

    await transporter.sendMail({
      from: `"Vania Assist" <info@vaniaassist.com>`,
      to: "info@vaniaassist.com",
      replyTo: email,
      subject: `New consultation request from ${name}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #2F241F;
          max-width: 700px;
          margin: 0 auto;
        ">

          <h2 style="color: #4A2A1A;">
            New VAnia Consultation Request
          </h2>

          <p>
            Someone has submitted a consultation request
            through the VAnia Assist website.
          </p>

          <hr style="border: none; border-top: 1px solid #E8E3DD;" />

          <h3 style="color: #4A2A1A;">
            Contact Details
          </h3>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Company:</strong> ${company || "Not provided"}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone || "Not provided"}
          </p>

          <p>
            <strong>Support needed:</strong>
            ${support || "Not specified"}
          </p>

          <h3 style="color: #4A2A1A;">
            Message
          </h3>

          <div style="
            background: #F7F7F5;
            border-left: 4px solid #D9480F;
            padding: 16px;
            margin: 15px 0;
          ">
            ${message}
          </div>

          <hr style="border: none; border-top: 1px solid #E8E3DD;" />

          <p style="
            color: #5C514A;
            font-size: 13px;
          ">
            This enquiry was submitted through the
            VAnia Assist website.
          </p>

        </div>
      `,
    });

    console.log("Email sent successfully.");

    return res.status(200).json({
      message:
        "Your consultation request has been sent successfully!",
    });

  } catch (error) {
    console.error("Email error:", error);

    return res.status(500).json({
      message:
        "Something went wrong while sending your request.",
    });
  }
});

app.listen(PORT, () => {
  console.log(
    `VAnia backend running on http://localhost:${PORT}`
  );
});