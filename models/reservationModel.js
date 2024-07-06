import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minLength: [3, "First name must be of atleast 3 Characters"],
    maxLength: [30, "First name cannot exceed 30 Characters"],
  },
  lastName: {
    type: String,
    require: true,
    minLength: [3, "Last name must be of atleast 3 Characters"],
    maxLength: [30, "Last name cannot exceed 30 Characters"],
  },
  date: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    require: true,
    minLength: [10, "Phone number must contain 10 Digits"],
    maxLength: [10, "Phone number must contain 10 Digits"],
  },
});

const reservationModel = new mongoose.model("reservationModel", reservationSchema);
export default reservationModel;
