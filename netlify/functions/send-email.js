const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const { name, email, question } = JSON.parse(event.body);

  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Set email options
  let mailOptions = {
    from: email,
    to: "amy@chyouz.com",
    subject: `New Jam Alert: Message from  ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nQuestion: ${question}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Your message just moonwalked into our inbox! 🕺✨" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Uh-oh! The email band missed a note. Let's try that tune again! 🎶🚫📧" }),
    };
  }
};
