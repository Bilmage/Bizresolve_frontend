import React, { useState } from "react";
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

const FileComplaintForm = ({ className }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessPhysicalAddress: "",
    businessEmail: "",
    businessPhone: "",
    county: "",
    complaintDescription: "",    
  });

  const handleFormSubmit = (event) => {
  event.preventDefault();
  // Add your form submission logic here
  // For example, you can send the form data to a backend server
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
            Get in touch
          </Typography>
          <Typography style={{ color: "#a95b1f" }} sx={{ mb: 4 }}>
          Bizresolve will use this information to contact you via phone or
            email to learn more about your complaint
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
                    Business Full name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    label="Business Physical Address"
                    variant="outlined"
                    size="small"
                    name="businessPhysicalAddress"
                    value={formData.businessPhysicalAddress}
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
                    Business Phone Number (optional)
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
                  <Typography variant="subtitle1">County the Business is situated</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel id="subject-label">
                      County
                    </InputLabel>
                    <Select
                      labelId="subject-label"
                      label="County"
                      name="county"
                      value={formData.county}
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
                    Describe your complaint
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    label="Tell us how we can assist you..."
                    variant="outlined"
                    size="small"
                    multiline
                    rows={3}
                    name="complaintDescription"
                    value={formData.complaintDescription}
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

export default FileComplaintForm;
