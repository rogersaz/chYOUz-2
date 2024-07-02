const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Set up email data
  let mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: 'your-email@example.com', // list of receivers
    subject: 'Contact Form Submission',
    text: message,
  };

  try {
    // Send mail
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};


  // Set up email data
  let mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: 'amy@chyouz.com', // list of receivers
    subject: 'Contact Form Submission',
    text: message,
  };

  try {
    // Send mail
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }

