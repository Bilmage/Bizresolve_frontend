import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Profile1 from "../../assets/images/Profilepic1.png";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,  
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const BusinessRegistration = ({ className }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    businessCategory: "",
    businessDescription: "",
    hasBeenInBusiness: "Yes", // Default value
    location: null, // Initialize location as null
    logo: null, // Initialize logo as null
  });

<<<<<<< HEAD
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("formData", formData);
      // const result = await
    } catch (error) {
      console.log("Error", error);
    }
    // Add your form submission logic here
    // For example, you can send the form data to a backend server
  };
=======
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // For example, you can send the form data to a backend server
  };


>>>>>>> aad2d5e80d37755f223a160908b7f83ba0642c20


  const handleLogoUpload = (event) => {
    const logoFile = event.target.files[0];
    if (logoFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          logo: e.target.result,
        }));
      };
      reader.readAsDataURL(logoFile);
    }
  };
  const handleFileUpload = (event) => {
    const logoFile = event.target.files[0];
    if (logoFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          logo: e.target.result,
        }));
      };
      reader.readAsDataURL(logoFile);
    }
  };
  // Handle form change
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <form onSubmit={handleFormSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={9}>
            <Typography
              variant="h4"
              style={{ color: "#a95b1f", fontWeight: 700 }}
              sx={{ mb: 4 }}
            >
              Register your business with Bizresolve today
            </Typography>
            <Typography style={{ color: "#a95b1f" }} sx={{ mb: 4 }}>
              Bizresolve will use this information to contact you via phone or
              email to learn more about your business
            </Typography>

            <Card variant="outlined">
              <CardContent sx={{ px: 4 }}>
                <div style={{ alignItems: 'center', textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    style={{ color: "#a95b1f", fontWeight: 700 }}
                    sx={{ mt: 2 }}
                  >
                    Click to Upload Your Business logo
                  </Typography>
                  <label htmlFor="logoInput">
                    {Profile1 ? (
                      <img src={Profile1} alt="Profile" style={{ width: '100px', height: '100px' }} />
                    ) : (
                      <Avatar sx={{ m: 1, bgcolor: 'secondary.main', cursor: 'pointer' }}>
                        <LockOutlinedIcon />
                      </Avatar>
                    )}
                    <input
                      accept=".png, .jpg, .jpeg"
                      id="logoInput"
                      type="file"
                      style={{ display: 'none' }}
                      onChange={handleLogoUpload}
                    />
                  </label>
                </div>


                <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="subtitle1">
                      Business Full name
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      fullWidth
                      label="Business Full name"
                      variant="outlined"
                      size="small"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                </Grid>

                <hr className="mx-n3" />

                <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="subtitle1">
                      Business Email address
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      fullWidth
                      label="Business Email address"
                      variant="outlined"
                      size="small"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleFormChange}
                    />
                  </Grid>
                </Grid>

                <hr className="mx-n3" />

                <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="subtitle1">
                      Business Phone Number
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      fullWidth
                      label="Business Phone Number"
                      variant="outlined"
                      size="small"
                      name="businessPhone"
                      value={formData.businessPhone}
                      onChange={handleFormChange}
                    />
                  </Grid>
                </Grid>

                <hr className="mx-n3" />



                <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="subtitle1">Business Category</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel id="subject-label">
                        Business Category
                      </InputLabel>
                      <Select
                        labelId="subject-label"
                        label="Business Category"
                        name="businessCategory"
                        value={formData.businessCategory}
                        onChange={handleFormChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Subject 1</MenuItem>
                        <MenuItem value={2}>Subject 2</MenuItem>
                        <MenuItem value={3}>Subject 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <hr className="mx-n3" />

                <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="subtitle1">
                      Business Description
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      fullWidth
                      label="Business Description"
                      variant="outlined"
                      size="small"
                      multiline
                      rows={3}
                      name="businessDescription"
                      value={formData.businessDescription}
                      onChange={handleFormChange}
                    />
                  </Grid>
                </Grid>

                <hr className="mx-n3" />

                <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="subtitle1">Upload Document</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <input
                      accept=".pdf, .doc, .docx"
                      id="fileInput"
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                    <label htmlFor="fileInput">
                      <Button variant="outlined" size="large" component="span">
                        Click to upload
                      </Button>
                    </label>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ mt: 2 }}
                    >
                      Upload your business license (Required) Max
                      file size 50 MB
                    </Typography>
                  </Grid>
                </Grid>

                <hr className="mx-n3" />





                <Button variant="contained" size="large" fullWidth sx={{ my: 4 }} style={{ backgroundColor: '#F78431' }}>
                  Submit
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default BusinessRegistration;
