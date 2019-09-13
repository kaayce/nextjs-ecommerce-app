const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const emailContent = text => `
  <div className="email" style="
    border: 1px solid black;
    border-radius: 20px;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
  ">
    <h2>Hello!</h2>
    <p>${text}</p>

    <p>Sent with ❤️ from Patrick Nzediegwu</p>
  </div>
`;

exports.transport = transport;
exports.emailContent = emailContent;
