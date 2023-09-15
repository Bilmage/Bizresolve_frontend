import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
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
  const [formData,setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    role: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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
              xs={12}
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <h1
                className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                style={{ color: "#ec6809" }}
              >
                Get started
              </h1>
              <div className="mb-4 d-flex flex-column" style={{ gap: '1rem' }}>
                <label htmlFor="role" className="fw-bold" style={{ color: "#5c6670" }}>
                  Choose an option you want to sign up with.
                </label>
                <Select id="role" fullWidth>
                  <MenuItem value="IndividualUser">Individual User</MenuItem>
                  <MenuItem value="BusinessOwner">Business Owner</MenuItem>
                </Select>
              </div>


              <div className="d-flex flex-row align-items-center mb-4" style={{ display: 'flex', gap: '3rem', alignItems: 'center', width: 'auto' }}>
                <FaUser />
                <TextField onChange={handleInputChange} label="First Name" id="firstName" fullWidth  value={formData.firstName}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4" style={{ display: 'flex', gap: '3rem', alignItems: 'center', width: 'auto' }}>
                <FaUser />
                <TextField label="Last Name" id="lastName" fullWidth />
              </div>

              <div className="d-flex flex-row align-items-center mb-4" style={{ display: 'flex', gap: '3rem', alignItems: 'center', width: 'auto' }}>
                <FaEnvelope />
                <TextField label="Email" id="form2" type="email" fullWidth />
              </div>

              <div className="d-flex flex-row align-items-center mb-4" style={{ display: 'flex', gap: '3rem', alignItems: 'center', width: 'auto' }}>
                <FaLock />
                <TextField label="Password" id="form3" type="password" fullWidth />
              </div>

              <div className="d-flex flex-row align-items-center mb-4" style={{ display: 'flex', gap: '3rem', alignItems: 'center', width: 'auto' }}>
                <FaKey />
                <TextField label="Repeat your password" id="form4" type="password" fullWidth />
              </div>

              <div className="mb-4">
                <FormControlLabel
                  control={<Checkbox name="flexCheck" id="flexCheckDefault" />}
                  label={
                    <span>
                      I accept the{" "}
                      <a href="/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
                        Terms and Conditions
                      </a>{" "}
                      of Bizresolve.
                    </span>
                  }
                  style={{ color: "#5c6670" }}
                />
              </div>


              <Button text="Sign up" />
              &nbsp; &nbsp; 
              <p style={{ color: "#5c6670" }}>
                or you can sign up with
              </p>
              <GoogleButton
                style={{ borderRadius: "54px", width: '130px', height: '50px' }}
                type="light"
                label="Google"
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
              <br />
              <hr className="mx-n3" />
              <p style={{ color: "#5c6670" }}>
                Already have an account ?  <Link to="/signIn" style={{ textDecoration: "underline", color: "#ec6809" }}>Log in</Link>
              </p>
              <br />
              <Link
                to="/"
                
              >&nbsp; &nbsp;
                <p style={{ color: "#ec6809"}}>
                  <FontAwesomeIcon icon={faChevronLeft} /> Back to Home{" "}



                </p></Link>
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
