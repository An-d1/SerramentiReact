const nodemailer = require('nodemailer');
require('dotenv').config(); // Ensure environment variables are loaded

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // App password
  },
});


// Email options
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'andisbara@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js using nodemailer.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if(error) {
    console.error('Error:', error.message)
  } else {
    console.log('email sent:', info.response);
  }
})