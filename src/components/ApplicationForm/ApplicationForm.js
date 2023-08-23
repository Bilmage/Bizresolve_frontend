import React, { useState } from "react";
import { FaMapPin } from "react-icons/fa";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ApplicationForm = ({ className }) => {
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

  const handleFormSubmit = (event) => {
  event.preventDefault();
  // Add your form submission logic here
  // For example, you can send the form data to a backend server
};


  const handleSetLocation = () => {
    // Get user's current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData((prevData) => ({
            ...prevData,
            location: { latitude, longitude },
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

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
            Learn more about Bizresolve Accreditation today
          </Typography>
          <Typography style={{ color: "#a95b1f" }} sx={{ mb: 4 }}>
            Bizresolve will use this information to contact you via phone or
            email to learn more about your business
          </Typography>

          <Card variant="outlined">
            <CardContent sx={{ px: 4 }}>
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
                  <Typography variant="subtitle1">Upload Documents</Typography>
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
                      Upload required documents
                    </Button>
                  </label>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mt: 2 }}
                  >
                    Upload required documents or any other relevant file. Max
                    file size 50 MB
                  </Typography>
                </Grid>
              </Grid>

              <hr className="mx-n3" />

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", mt: 4 }}
                  >
                    Have you been in business for more than six months?
                  </Typography>
                  <RadioGroup
                    row
                    aria-label="Verified"
                    name="hasBeenInBusiness"
                    value={formData.hasBeenInBusiness}
                    onChange={handleFormChange}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                <Grid item xs={12} md={9}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleSetLocation}
                  >
                    <FaMapPin />
                    &nbsp;Set Location
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                <Grid item xs={12} md={9}>
                  <input
                    accept=".png, .jpg, .jpeg"
                    id="logoInput"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleLogoUpload}
                  />
                  <label htmlFor="logoInput">
                    <Button variant="outlined" size="large" component="span">
                      Upload your company logo
                    </Button>
                  </label>
                  {formData.logo && (
                    <img
                      src={formData.logo}
                      alt="Business Logo"
                      style={{
                        maxWidth: "25%",
                        maxHeight: "25%",
                        marginTop: "8px",
                      }}
                    />
                  )}
                </Grid>
              </Grid>

              <Button variant="contained" size="large" fullWidth sx={{ my: 4 }} style={{backgroundColor: '#F78431'}}>
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

export default ApplicationForm;
