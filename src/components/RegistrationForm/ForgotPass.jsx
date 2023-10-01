import React, { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import RegistrationAnimation from "../../RegistrationAnimation.json";
// import { toast } from 'react-toastify';
import { useLoginMutation } from "../../app/services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";

export const ForgotPass = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Data", formData);
    try {
      const response = await login(formData).unwrap();
      const { user, accessToken } = response;
      console.log("User", user);
      console.log("Access token", accessToken);
      if (user && accessToken) {
        dispatch(setCredentials({ user, accessToken }));
        // toast.success("You have logged in successfully");
        navigate("/", { replace: true });
        // setTimeout(() => {
        // }, 200);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className="container">
      <div className="flex-container">
        {/* Left side with input fields */}
        <div className="form-wrapper">
          <h1>Forgot Password ?</h1>
          
            <p style={{color: '#8c8c8c'}}>
              Enter yor email below to recover your password
            </p>
          
          <form>
            <div className="form-item">
              <label htmlFor="email" />

              <input
                onChange={handleInputChange}
                type="email"
                name="email"
                required="required"
                placeholder="Email"
                value={formData.email}
              />
            </div>
            <div className="button-panel">
              <input
                onClick={handleSubmit}
                className="button"
                title="Submit"
                defaultValue="Submit"
              />
            </div>
          </form>
          <div className="line"></div>
          <div className="form-footer">
            <p>
              <Link to="/">Back to home</Link>
            </p>
            <p>
              <Link to="/SignIn">Go back to login ?</Link>
            </p>
          </div>
        </div>

        {/* Right side with Lottie animation */}
        <div className="animation-container">
          <Lottie animationData={RegistrationAnimation} />
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
