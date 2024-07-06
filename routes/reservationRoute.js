import express from "express";
import reservationModel from "../models/reservationModel.js";

const Router = express.Router();

Router.post("/send", async (req, res, next) => {
    const { firstName, lastName, email, date, time, phone } = req.body;
    if (!firstName || !lastName || !email || !date || !time || !phone) {
      console.log("Missing required fields");
      return res.status(400).json({ message: "Please Fill The Complete Reservation Form!" });
    }
  
    try {
      await reservationModel.create({ firstName, lastName, email, date, time, phone });
      console.log("Reservation Successfull");
      return res.status(201).json({
        message: "Reservation Successfull!",
      });
    } 
    catch (error) {
      // Handle Mongoose validation errors
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        const verr = validationErrors.join(', ')
        console.log(verr);
        return res.status(400).json({ message: verr });
      }
      // Handle other errors
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

export default Router;




