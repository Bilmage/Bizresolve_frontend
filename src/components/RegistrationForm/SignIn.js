import React, { useState } from "react";
import {  FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../Button/Button";
import GoogleButton from "react-google-button";
import Lottie from "lottie-react";
import RegistrationAnimation from "../../RegistrationAnimation.json";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
} from "@mui/material";
import { useLoginMutation } from "../../app/services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";

export const SignIn = () => {
  const [formData, setFormData ] = useState({
    email:'',
    password: ''
  })
 const [login] = useLoginMutation();
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const handleSubmit = async (event) =>{
   event.preventDefault()
   console.log('Data', formData)
  try {
    const response = await login(formData).unwrap();
    const { user, accessToken } = response;
    console.log("User", user)
    console.log("Access token", accessToken)
    if (user && accessToken) {
      dispatch(setCredentials({ user, accessToken }));
      // toast.success("You have logged in successfully");
      navigate("/", { replace: true });
      // setTimeout(() => {
      // }, 200);
    }
  } catch (error) {
    console.log('Error', error)
  }
 }
  return (
    <Container maxWidth="lg">
      <Card sx={{ borderRadius: "25px" }} className="text-black m-5">
        <CardContent>
          <Grid container spacing={2}>
            <Grid
              item
              md={6}
              lg={6}
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p
                className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                style={{ color: "#ec6809" }}
              >
                Sign In
              </p>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaEnvelope />
                &nbsp; &nbsp;
                <TextField value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value }) } label="Email" id="form3" type="email" name="email" fullWidth />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaLock />
                &nbsp; &nbsp;
                <TextField value={formData.password} onChange={(event) => setFormData({...formData, password: event.target.value }) } label="Password" id="form4" type="password" name="password" fullWidth />
              </div>

              <Button text="Sign In" onClick={handleSubmit} />

              <br />
              <GoogleButton
                style={{ borderRadius: "54px", width: '130px', height: '50px' }}
                label="Google"
                type="light" // can be light or dark
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
            </Grid>

            <Grid
              item
              md={6}
              lg={6}
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <CardMedia>
                <Lottie animationData={RegistrationAnimation} />
              </CardMedia>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignIn;
