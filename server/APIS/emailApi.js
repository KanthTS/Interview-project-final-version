
require('dotenv').config();
const exp = require('express');
const nodemailer = require('nodemailer');
const emailApp = exp.Router();
const emailModel = require('../models/EmailModel');

const {requireAuth, clerkMiddleware}=require('@clerk/express')
emailApp.use(clerkMiddleware())

require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "✅ Loaded" : "❌ Missing");


emailApp.post('/email', async (req, res) => {
  const { to, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to:to,
    subject,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    const r = new emailModel({ to, subject, message });
    await r.save();
    res.send({ message: "Sent successfully", payload: r });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Email sending failed", error: err });
  }
});

emailApp.get('/emails',requireAuth({signInUrl:"unauthorized"}),async(req,res)=>{
  let j=await emailModel.find({isEmailActive:true})
    res.status(200).send({message:"getemails",payload:j})
})
emailApp.get('/unauthorized',async(req,res)=>{
    res.send({message:"pleaze relogin again unauthorized request"})
})
module.exports = emailApp;
