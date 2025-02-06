import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body

    try {
      // Set up the email transporter
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Use Gmail as the email service
        auth: {
          user: "kprijun@gmail.com", // Replace with your email
          pass: "Maideniron@1984" // Replace with your app password
        }
      })

      // Email options
      const mailOptions = {
        from: email, // Sender's email
        to: "kprijun@gmail.com", // Your email
        subject: `Contact Form Submission from ${name}`,
        text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
      }

      // Send email
      await transporter.sendMail(mailOptions)

      res.status(200).json({ message: "Email sent successfully!" })
    } catch (error) {
      console.error("Error sending email:", error)
      res.status(500).json({ error: "Failed to send email" })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
