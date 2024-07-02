const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Parse the incoming request body
  let parsedBody;
  try {
    parsedBody = JSON.parse(event.body);
  } catch (error) {
    console.error('Error parsing request body:', error);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid request body' }),
    };
  }

  const { name, email, question } = parsedBody;

  // Validate required fields
  if (!name || !email || !question) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Missing required fields' }),
    };
  }

  // Create a transporter object using SMTP transport
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  } catch (error) {
    console.error('Error creating transporter:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to create email transporter' }),
    };
  }

  // Set up email data
  const mailOptions = {
    from: email,
    to: 'amy@chyouz.com',
    subject: `New Jam Alert: Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nQuestion: ${question}`,
  };

  try {
    // Send mail
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Your message just moonwalked into our inbox! 🕺✨' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Uh-oh! The email band missed a note. Let\'s try that tune again! 🎶🚫📧' }),
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
};

