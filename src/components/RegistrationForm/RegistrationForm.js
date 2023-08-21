import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaKey,
  
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
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
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material";

export const RegistrationForm = () => {
  return (
    <Container maxWidth="lg">
      <Card sx={{ borderRadius: "25px" }} className="text-black m-5">
        <CardContent>
          <Grid container spacing={2}>
            <Grid
              item
              md={6}
              lg={6}
              xs={12}              
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <h1
                className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                style={{ color: "#ec6809" }}
              >
                Get started
              </h1>
              <div className="mb-4">
                <label htmlFor="role" className="fw-bold" style={{ color: "#5c6670" }}>
                  Choose an option you want to sign up with.
                </label>
                <Select id="role" fullWidth>
                  <MenuItem value="IndividualUser">Individual User</MenuItem>
                  <MenuItem value="BusinessOwner">Business Owner</MenuItem>
                </Select>
              </div>
              
              <div className="d-flex flex-row align-items-center mb-4">
                <FaUser />
                &nbsp; &nbsp;
                <TextField label="First Name" id="firstName" fullWidth />
              </div>
              
              <div className="d-flex flex-row align-items-center mb-4">
                <FaUser />
                &nbsp; &nbsp;
                <TextField label="Last Name" id="lastName" fullWidth />
              </div>
              
              <div className="d-flex flex-row align-items-center mb-4">
                <FaEnvelope />
                &nbsp; &nbsp;
                <TextField label="Email" id="form2" type="email" fullWidth />
              </div>
              
              <div className="d-flex flex-row align-items-center mb-4">
                <FaLock />
                &nbsp; &nbsp;
                <TextField label="Password" id="form3" type="password" fullWidth />
              </div>
              
              <div className="d-flex flex-row align-items-center mb-4">
                <FaKey />
                &nbsp; &nbsp;
                <TextField label="Repeat your password" id="form4" type="password" fullWidth />
              </div>
              
              <div className="mb-4">
                <FormControlLabel
                  control={<Checkbox name="flexCheck" id="flexCheckDefault" />}
                  label="I do accept the Terms and Conditions of Bizresolve."
                />
              </div>
              
              <Button text="Sign up" />
              <br />
              <GoogleButton
                style={{ borderRadius: "54px"}}
                type="light"
                label="Sign up with Google"
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
              <br />
              <hr className="mx-n3" />
              <p style={{ color: "#ec6809" }}>
                Already Signed up? <Link to="/signIn" style={{ textDecoration: "underline", color: "#ec6809" }}>Sign in</Link>
              </p>              
              <br />
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

export default RegistrationForm;
