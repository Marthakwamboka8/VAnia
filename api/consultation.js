import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"VAnia Assist Website" <${process.env.SMTP_USER}>`,
      to: "info@vaniaassist.com",
      replyTo: email,

      subject: `New consultation request from ${name}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #2F241F;
        ">

          <h2 style="color: #4A2A1A;">
            New VAnia Consultation Request
          </h2>

          <p>
            Someone has submitted a consultation request
            through the VAnia Assist website.
          </p>

          <hr />

          <h3>Contact Details</h3>

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

          <h3>Message</h3>

          <p>
            ${message}
          </p>

          <hr />

          <p style="color: #5C514A; font-size: 13px;">
            This enquiry was submitted through the
            VAnia Assist website.
          </p>

        </div>
      `,
    });

    console.log("Email sent successfully.");

    return res.status(200).json({
      message: "Your consultation request has been sent successfully.",
    });

  } catch (error) {
    console.error("Email error:", error);

    return res.status(500).json({
      message: "Something went wrong while sending your request.",
    });
  }
}