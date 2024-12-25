const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: './path/to/.env' });

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
    user: 'email@gmail.com',
    pass: 'emailPassord', // App password
  },
});

// API Endpoint to Send Email
app.post('/send-email', (req, res) => {
  const { nome, cognome, email, telefono, messagio } = req.body;

  const mailOptions = {
    from: process.env.REACT_APP_EMAIL_USER,
    to: 'email@gmail.com', // Your recipient email
    subject: 'New Contact Form Submission',
    text: `
      Nome: ${nome}
      Cognome: ${cognome}
      Email: ${email}
      Telefono: ${telefono}
      Messagio: ${messagio}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      return res.status(500).send('Email not sent');
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).send('Email sent successfully');
    }
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
