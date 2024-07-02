exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { name, email, question } = JSON.parse(event.body);

  // Example: Send email using a service like SendGrid, Mailgun, etc.
  // This is a placeholder for the actual email sending logic
  try {
    // Replace with your email sending logic
    await sendEmail({ name, email, question });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};

async function sendEmail({ name, email, question }) {
  // Implement your email sending logic here
  // For example, using SendGrid:
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'your-email@example.com', // Replace with your email
    from: 'no-reply@example.com', // Replace with your verified sender
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nQuestion: ${question}`,
  };

  await sgMail.send(msg);
}

