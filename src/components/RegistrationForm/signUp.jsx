import React, { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import Lottie from "lottie-react";
import RegistrationAnimation from "../../RegistrationAnimation.json";
import { useSignupMutation } from "../../app/services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";

export const SignUp = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    role: "Individual User", // Default role
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async () => {
    console.log("formData", formData);
    try {
      const response = await signup(formData).unwrap();
      const { user, accessToken } = response;
      console.log("User", user);
      console.log("Access token", accessToken);
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
          <h1>Sign up</h1>
          <form>
            <div className="form-item">
              <label
                htmlFor="role"
                className="fw-bold"
                style={{ color: "#5c6670" }}
              >
                Choose an option you want to sign up with.
              </label>
              <select
                onChange={handleInputChange}
                id="role"
                name="role"
                required="required"
                value={formData.role}
              >
                <option value="Individual User">Individual User</option>
                <option value="Business Owner">Business Owner</option>
              </select>
            </div>

            <div className="form-item">
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={handleInputChange}
                id="firstName"
                type="text"
                name="firstName"
                required="required"
                placeholder="First Name"
                value={formData.firstName}
              />
            </div>
            <div className="form-item">
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={handleInputChange}
                id="lastName"
                type="text"
                name="lastName"
                required="required"
                placeholder="Last Name"
                value={formData.lastName}
              />
            </div>

            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleInputChange}
                id="email"
                type="email"
                name="email"
                required="required"
                placeholder="Email"
                value={formData.email}
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleInputChange}
                id="password"
                type="password"
                name="password"
                required="required"
                placeholder="Password"
                value={formData.password}
              />
            </div>
            <div className="form-item">
              <label htmlFor="confirmPassword">Repeat your password</label>
              <input
                onChange={handleInputChange}
                type="password"
                name="confirmPassword"
                required="required"
                placeholder="Repeat your password"
                value={formData.confirmPassword}
              />
            </div>
            <div className="form-item">
              <label
                style={{
                  color: "#5c6670",
                  textAlign: "center",
                  fontSize: "12px",
                  verticalAlign: "middle",
                }}
              >
                <input
                  type="checkbox"
                  name="flexCheck"
                  id="flexCheckDefault"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{ transform: "scale(0.3)" }}
                />
                I accept the{" "}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  Terms and Conditions
                </a>{" "}
                of Bizresolve.
              </label>
            </div>

            <div className="button-panel">
              <input
                onClick={handleSubmit}
                className="button"
                title="Sign up"
                defaultValue="Sign up"
              />
            </div>
          </form>
          <div className="form-footer">
            <hr className="mx-n3" />
            <p style={{ color: "#5c6670" }}>
              Already have an account ?{" "}
              <Link
                to="/signIn"
                style={{ textDecoration: "underline", color: "#ec6809" }}
              >
                Log in
              </Link>
            </p>
            <p>
              <Link to="/">Back to home</Link>
            </p>

            <div className="line"></div>
            <GoogleButton
              style={{ borderRadius: "6px", height: "50px", margin: "auto" }}
              type="light"
              label="Sign up with Google"
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

export default SignUp;
