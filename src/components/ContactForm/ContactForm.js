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

export const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    physicalAddress: "",
    email: "",
    phone: "",
    county: "",
    description: "",
    
  });

  const handleFormSubmit = (event) => {
  event.preventDefault();
  // Add your form submission logic here
  // For example, you can send the form data to a backend server
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
          email
          </Typography>

          <Card variant="outlined">
            <CardContent sx={{ px: 4 }}>
              <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                <Grid item xs={12} md={3}>
                  <Typography variant="subtitle1">
                  Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    size="small"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </Grid>
              </Grid>

              <hr className="mx-n3" />
              <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                <Grid item xs={12} md={3}>
                  <Typography variant="subtitle1">
                    Physical Addresses
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    label="Physical Addresses"
                    variant="outlined"
                    size="small"
                    name="physicalAddresses"
                    value={formData.physicalAddresses}
                    onChange={handleFormChange}
                  />
                </Grid>
              </Grid>

              <hr className="mx-n3" />

              <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                <Grid item xs={12} md={3}>
                  <Typography variant="subtitle1">
                     Email address
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    size="small"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                </Grid>
              </Grid>

              <hr className="mx-n3" />

              <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                <Grid item xs={12} md={3}>
                  <Typography variant="subtitle1">
                     Phone Number (optional)
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </Grid>
              </Grid>

              <hr className="mx-n3" />

              <Grid container spacing={2} sx={{ pt: 4, pb: 3 }}>
                <Grid item xs={12} md={3}>
                  <Typography variant="subtitle1">County</Typography>
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
                  Get in Touch
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    label="Ask us about anything..."
                    variant="outlined"
                    size="small"
                    multiline
                    rows={3}
                    name="Description"
                    value={formData.description}
                    onChange={handleFormChange}
                  />
                </Grid>
              </Grid>

              <hr className="mx-n3" />

              

              <hr className="mx-n3" />

             

              <Button variant="contained" size="large" fullWidth sx={{ my: 4 }}>
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

export default ContactForm;
