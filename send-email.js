require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log({
  'process.env.SENDGRID_API_KEY': process.env.SENDGRID_API_KEY,
  'process.env.SENDGRID_API_EMAIL_TO': process.env.SENDGRID_API_EMAIL_TO,
  'process.env.SENDGRID_API_EMAIL_FROM': process.env.SENDGRID_API_EMAIL_FROM
});
const msg = {
  to: process.env.SENDGRID_API_EMAIL_TO,
  from: process.env.SENDGRID_API_EMAIL_FROM,
  subject: 'Enviando pelo SendGrid',
  text: 'Testando via SendGrid para ver se o serviço é bom',
  html: '<strong>Testando via SendGrid para ver se o serviço é bom</strong>',
};
sgMail.send(msg);
