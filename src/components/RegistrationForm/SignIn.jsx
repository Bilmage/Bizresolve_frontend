import React, { useState } from "react";
import "./sign.css";
import GoogleButton from "react-google-button";
import Lottie from "lottie-react";
import RegistrationAnimation from "../../RegistrationAnimation.json";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../app/services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";


export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      if (user && accessToken) {
        dispatch(setCredentials({ user, accessToken }));
        navigate("/", { replace: true });
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
          <h1>Log In</h1>
          <form>
            <div className="form-item">
            <label htmlFor="email"/>
          
        

              <input
                onChange={handleInputChange}
                type="email"
                name="email"
                required="required"
                placeholder="Email Address"
                value={formData.email}
              />
            </div>
            <div className="form-item">
              <label htmlFor="password" />
              <input
                onChange={handleInputChange}
                type="password"
                name="password"
                required="required"
                placeholder="Password"
                value={formData.password}
              />
            </div>

            <div className="button-panel">
              <input
                onClick={handleSubmit}
                className="button"
                title="Log In"
                defaultValue="Log In"
              />
            </div>
          </form>
          <div className="form-footer">
            <p>
              <Link to="/Registration">Create an account</Link>
            </p>
            <p>
              <Link to="/forgotpassword">Forgot password?</Link>
            </p>
            <p>
              <Link to="/">Back to home</Link>
            </p>
            <div className="line"></div>
            <GoogleButton
              style={{ borderRadius: "6px", height: "50px", margin: "auto" }}
              type="light"
              label="Sign in with Google"
              onClick={() => {
                console.log("Google button clicked");
              }}
            />
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

export default SignIn;
