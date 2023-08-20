import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
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

export const SignIn = () => {
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
                <FaUser />
                &nbsp; &nbsp;
                <TextField label="First Name" id="form1" fullWidth />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <FaUser />
                &nbsp; &nbsp;
                <TextField label="Last Name" id="form2" fullWidth />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaEnvelope />
                &nbsp; &nbsp;
                <TextField label="Email" id="form3" type="email" fullWidth />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaLock />
                &nbsp; &nbsp;
                <TextField label="Password" id="form4" type="password" fullWidth />
              </div>

              <Button text="Sign In" />

              <br />
              <GoogleButton
                style={{ borderRadius: "54px" }}
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
