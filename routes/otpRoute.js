import express from "express";
const router = express.Router();
import sendEmail from '../utils/sendEmail.js';

router.post('/sendOTP', async (req, res) => {
  const { email } = req.body;
  const {otp} = req.body;

  sendEmail(email, otp);    

  res.status(200).send('OTP sent to your email');
});



export default router;
