import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaKey } from "react-icons/fa";
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
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";

export const RegistrationForm = () => {
  const [selectedRole, setSelectedRole] = useState("IndividualUser");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
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
              <h1
                className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                style={{ color: "#ec6809" }}
              >
                Welcome to Bizresolve
              </h1>
              <FormControl component="fieldset" className="mb-4">
                <FormLabel
                  component="legend"
                  className="fw-bold"
                  style={{ color: "#5c6670" }}
                >
                  Choose an option you want to sign up with. Are you an
                  IndividualUser or Business owner ? click on the link to learn
                  more{" "}
                  <Link to="/">
                    <strong
                      style={{ textDecoration: "underline", color: "#ec6809" }}
                    >
                      Bizresolve user roles
                    </strong>
                  </Link>
                </FormLabel>
                <RadioGroup
                  aria-label="role"
                  name="role"
                  value={selectedRole}
                  onChange={handleRoleChange}
                  className="d-flex flex-row align-items-center"
                  row // Add this attribute
                >
                  <FormControlLabel
                    value="IndividualUser"
                    control={<Radio />}
                    label="Individual User"
                  />
                  <FormControlLabel
                    value="BusinessOwner"
                    control={<Radio />}
                    label="Business Owner"
                  />
                </RadioGroup>
              </FormControl>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaUser />
                &nbsp; &nbsp;
                <TextField
                  label={
                    selectedRole === "IndividualUser"
                      ? "First Name"
                      : "Business Name"
                  }
                  id="firstName"
                  fullWidth
                />
              </div>

              {selectedRole === "IndividualUser" && (
                <div className="d-flex flex-row align-items-center mb-4">
                  <FaUser />
                  &nbsp; &nbsp;
                  <TextField label="Last Name" id="lastName" fullWidth />
                </div>
              )}

              <div className="d-flex flex-row align-items-center mb-4">
                <FaEnvelope />
                &nbsp; &nbsp;
                <TextField
                  label={
                    selectedRole === "IndividualUser"
                      ? "Email"
                      : "Business Email"
                  }
                  id="form2"
                  type="email"
                  fullWidth
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaLock />
                &nbsp; &nbsp;
                <TextField
                  label="Password"
                  id="form3"
                  type="password"
                  fullWidth
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaKey />
                &nbsp; &nbsp;
                <TextField
                  label="Repeat your password"
                  id="form4"
                  type="password"
                  fullWidth
                />
              </div>

              <div className="mb-4">
                <FormControlLabel
                  control={<Checkbox name="flexCheck" id="flexCheckDefault" />}
                  label="I do accept the Terms and Conditions of Bizresolve."
                />
              </div>

              <Button text="Sign Up" />
              <br />
              <GoogleButton
                style={{ borderRadius: "54px" }}
                type="light"
                label="Sign up with Google"
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
              <br />
              <hr className="mx-n3" />
              <p style={{ color: "#ec6809" }}>
                Already Signed up ? click button below to sign in
              </p>
              <div>
                <Link to="/SignIn">
                  <Button text="Sign In" />
                </Link>
              </div>
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
