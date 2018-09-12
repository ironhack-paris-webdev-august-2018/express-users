const nodemailer = require("nodemailer");


const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.gmail_email,
    pass: process.env.gmail_password,
  },
});


function sendSignupMail (userDoc) {
  const { fullName, email } = userDoc;

  return transport.sendMail({
    from: "Express Users <express.users@example.com>",
    to: `${fullName} <${email}>`,
    subject: "😎 Thank you for joining Express Users!",
    text: `Welcome, ${fullName}! Thank you for joining Express Users.`,
    html: `
      <h1 style="color: orange;">Welcome, ${fullName}!</h1>
      <p>Thank you for joining Express users.</p>
    `,
  });
}


function sendPasswordEmail () {
  return transport.sendMail({
    from: "Express Users <express.users@example.com>",
    to: "blah@example.com",
    subject: "🤦‍♀️ Don't forget your password",
    text: "Don't be dumb...",
    html: "<h1>Don't be dumb...</h1>",
  });
}


module.exports = { sendSignupMail, sendPasswordEmail };
