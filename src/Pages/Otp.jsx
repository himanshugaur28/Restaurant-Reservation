import axios from "axios";
import { useNavigate } from 'react-router-dom';
import PropType from "prop-types" 
let otp;

const Otp=(props)=> {
  const navigate =useNavigate();
  let email = props.email;
  let enteredOTP;
  async function generateOTP() {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    otp = randomNumber;
    console.log(otp, typeof otp);
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/reservation/sendOTP",
      {email,otp},  
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(data)
    return otp;
  }
  generateOTP();

 
  const checkOTP = (e) => {
    e.preventDefault();
    
    if (enteredOTP == otp) {
      navigate("/Success")
    } 
    else{

      window.alert("Wrong Otp");
    }
  };
  return (
    <div >
        <div >
            <input
              className="otpinput"
              type="text"
              placeholder="4-digit OTP"
              onChange={(e) =>{
                enteredOTP= e.target.value;
              }}
            />
        </div>
            <input
              type="submit"
              value="Submit"
              className="otpbutton"
              onClick={(e) => checkOTP(e)

              }
            />

    </div>
  )
}
Otp.propTypes = {
  email: PropType.string.isRequired,
};

export default Otp
