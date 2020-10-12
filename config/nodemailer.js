"use strict";
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "d636a18c53a76c",
          pass: "b4bcfb8232129c"
        }
      });
module.exports = transporter