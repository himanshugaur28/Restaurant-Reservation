import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "himanshugaur2852001@gmail.com",
      pass: "xpxn kppq kssi aowv",
    },
  });

const sendEmail = (email, otp) => {
  const mailOptions = {
    from: 'himanshugaur2852001@gmail.com',
    to: email,
    subject: 'Your OTP for the Reservation',
    text: `Your OTP is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export default sendEmail;
