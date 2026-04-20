import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 3001;
const YOUR_EMAIL = process.env.EMAIL_USER;
const YOUR_EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO || process.env.EMAIL_USER;

// Gmail transporter - FIXED API
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: YOUR_EMAIL,
    pass: YOUR_EMAIL_PASS,
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { fullName, phone, email, message } = req.body;

  const mailOptions = {
    from: YOUR_EMAIL,
    to: EMAIL_TO,
    replyTo: email,
    subject: `Portfolio Contact Form: ${fullName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
      <hr>
      <p><em>Samnkelsiwe Portfolio Contact Form</em></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${EMAIL_TO}`);
    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API - Contact form ready!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📧 Email config loaded: ${YOUR_EMAIL}`);
});

