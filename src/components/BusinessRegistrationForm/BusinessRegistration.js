import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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
import {
  useAddBusinessFileMutation,
  useRegisterBusinessMutation,
} from "../../app/services";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BusinessRegistration = ({ className }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    businessCategory: "",
    businessDescription: "",
    hasBeenInBusiness: "Yes", // Default value
    // location: null, // Initialize location as null
    // logo: null, // Initialize logo as null
  });

  const [registerBusiness, { isLoading }] = useRegisterBusinessMutation();
  const [addBusinessFile, { isLoading: isUploading }] =
    useAddBusinessFileMutation();
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

  // const handleLogoUpload = (event) => {
  //   const logoFile = event.target.files[0];
  //   if (logoFile) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         logo: e.target.result,
  //       }));
  //     };
  //     reader.readAsDataURL(logoFile);
  //   }
  // };
  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // const reader = new FileReader();
      // reader.onload = (e) => {
      //   setFormData((prevData) => ({
      //     ...prevData,
      //     logo: e.target.result,
      //   }));
      // };
      // reader.readAsDataURL(file);
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

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const body = {
        businessName: formData.businessName,
        phoneNumber: formData.businessPhone,
        email: formData.businessEmail,
        category: formData.businessCategory,
        businessOwners: [user.id],
        businessDescription: formData.businessDescription,
      };
      console.log("body", body);
      const result = await registerBusiness(body).unwrap();
      console.log("Result", result);
      const { businessEntityID } = result;
      if (businessEntityID) {
        toast.success(
          "You have successfully registered a business on Bizresolve"
        );
        setFormData({
          businessName: "",
          businessEmail: "",
          businessPhone: "",
          businessCategory: "",
          businessDescription: "",
          hasBeenInBusiness: "Yes",
        });
        // const formBody = new FormData();
        // console.log("Selected File", selectedFile);
        // formBody.append("file", selectedFile);
        // // console.log("Form Body", formBody)
        // const businessFile = await addBusinessFile(businessEntityID, formBody);
        // console.log("Business file", businessFile);
        // if (businessFile.fileID) {
        //   setFormData({
        //     businessName: "",
        //     businessEmail: "",
        //     businessPhone: "",
        //     businessCategory: "",
        //     businessDescription: "",
        //     hasBeenInBusiness: "Yes",
        //   });
        // }
      }
    } catch (error) {
      console.log("Error", error.data.message);
      toast.error(`${error.data.message}`);
    }
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
                {/* <div style={{ alignItems: "center", textAlign: "center" }}>
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
                      <img
                        src={Profile1}
                        alt="Profile"
                        style={{
                          width: "100px",
                          height: "100px",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <Avatar
                        sx={{
                          m: 1,
                          bgcolor: "secondary.main",
                          cursor: "pointer",
                        }}
                      >
                        <LockOutlinedIcon />
                      </Avatar>
                    )}
                    <input
                      accept=".png, .jpg, .jpeg"
                      id="logoInput"
                      type="file"
                      style={{ display: "none", cursor: "pointer" }}
                      onChange={handleLogoUpload}
                    />
                  </label>
                </div> */}

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
                    <Typography variant="subtitle1">
                      Business Category
                    </Typography>
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
                          <em>Select a category</em>
                        </MenuItem>
                        <MenuItem value="building & construction">
                          Building & construction
                        </MenuItem>
                        <MenuItem value="JuaKali artisan">
                          JuaKali artisan
                        </MenuItem>
                        <MenuItem value="Bookshop">Bookshop</MenuItem>
                        <MenuItem value="">Pharmacy</MenuItem>
                        <MenuItem value="car wash">Car wash</MenuItem>
                        <MenuItem value="laundramat">Laundramat</MenuItem>
                        <MenuItem value="mini supermaket">
                          Mini supermaket
                        </MenuItem>
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
                      Upload your business license (Required) Max file size 50
                      MB
                    </Typography>
                  </Grid>
                </Grid>
                <hr className="mx-n3" />
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  type="submit"
                  sx={{ my: 4 }}
                  style={{ backgroundColor: "#F78431" }}
                  onClick={(e) => handleRegister(e)}
                >
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
