import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import RegistrationAnimation from "../../RegistrationAnimation.json";
// import { toast } from 'react-toastify';

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

export const ForgotPass = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
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
                Forgot password ?
              </p>
              <p style={{ color: "#ec6809" }}>
                  Enter your email below to revive your account{" "}



                </p>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaEnvelope />
                &nbsp; &nbsp;
                <TextField
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                  label="Email"
                  id="form3"
                  type="email"
                  name="email"
                  fullWidth
                />
              </div>
              

              <Button text="Send Reset Email" onClick={handleSubmit} />
              <Link
                to="/"
                
              >&nbsp; &nbsp;
                <p style={{ color: "#ec6809"}}>
                  <FontAwesomeIcon icon={faChevronLeft} /> Back to Home{" "}



                </p></Link>

              &nbsp; &nbsp;            
         
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

export default ForgotPass;
