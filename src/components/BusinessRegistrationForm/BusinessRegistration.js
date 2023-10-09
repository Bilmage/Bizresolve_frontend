import React, { useState } from "react";
import "./registration.css";
import safaricom from "../../assets/images/Safaricom.png";

const BusinessRegistration = ({ className }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    businessPhysicalAddress: {
      county: "",
      city: "",
    },
    businessCategory: "",
    businessDescription: "",
    hasBeenInBusiness: "Yes", // Default value
    location: null, // Initialize location as null
    logo: null, // Initialize logo as null
    registrationDate: "",
  });

 // Handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();

  };
 // Handle file upload
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
    <div className="container">
      <form className="form" onSubmit={handleFormSubmit}>
        <h4>Register your business with Bizresolve today</h4>
        <p>
          Bizresolve will use this information to contact you via phone or email to
          learn more about your business
        </p>
        <div className="avatar">
          <h5>Click to Upload Your Business logo</h5>
          <label htmlFor="logoInput">
          <div className='avatarr'>
          
          <img src={safaricom} alt="Profile" />

       
      </div>
          </label>
          <input
            accept=".png, .jpg, .jpeg"
            id="logoInput"
            type="file"
            className="logo-upload"
            onClick={handleFileUpload}
          />
        </div>
        <br />
        <hr />
        <div className="text-input">
          <label htmlFor="businessName">Business Full name</label>
          <input type="text" id="businessName" name="businessName" placeholder="Enter business full name" value={formData.businessName}
            onChange={handleFormChange} />
        </div>
        <hr />
        <div className="text-input">
          <label htmlFor="businessEmail">Business Email address</label>
          <input type="email" id="businessEmail" name="businessEmail" placeholder="Enter business email address" value={formData.businessEmail}
            onChange={handleFormChange} />
        </div>
        <hr />
        <div className="text-input">
          <label htmlFor="businessPhone">Business Phone Number</label>
          <input type="tel" id="businessPhone" name="businessPhone" placeholder="Enter business phone number" value={formData.businessPhone}
            onChange={handleFormChange} />
        </div>
        <hr />
        <div className="text-input">
          <label htmlFor="businessCategory">Business Physical Address</label>
          <select id="County" name="County" value={formData.businessPhysicalAddress.county}
            onChange={handleFormChange}>
            <option value="">County</option>
            <option value={1}>Nairobi</option>
            <option value={2}>Kisumu</option>
            <option value={3}>Mombasa</option>
            <option value={4}>Nakuru</option>
            <option value={5}>Naivasha</option>
            <option value={6}>Kisii</option>
          </select>
          &nbsp; &nbsp;
          <select id="City" name="City" value={formData.businessPhysicalAddress.city}
            onChange={handleFormChange}>
            <option value="">City</option>
            <option value={1}>Nairobi</option>
            <option value={2}>Kisumu</option>
            <option value={3}>Mombasa</option>
            <option value={4}>Nakuru</option>
            <option value={5}>Naivasha</option>
            <option value={6}>Kisii</option>
          </select>
        </div>
        <hr />
        <div className="text-input">
          <label htmlFor="businessCategory">Business Category</label>
          <select id="businessCategory" name="businessCategory" value={formData.businessCategory}
            onChange={handleFormChange}>
            <option value="none">None</option>
            <option value="internet">Internet</option>
            <option value="finance">Finance</option>
            <option value="webDeveloper">Web Developer</option>
            <option value={""}>Web developer</option>
          </select>
        </div>
        <hr />
        <div className="description-input">
          <label htmlFor="businessDescription" className="text-input">Business Description</label>
          <textarea
            id="businessDescription"
            name="businessDescription"
            type="description"
            rows={3}
            value={formData.businessDescription}
            onChange={handleFormChange}
          />
        </div>
        <hr />
        <div className="file-input">
          <label htmlFor="fileInput">


            <h5><i className="fa fa-upload" aria-hidden="true"></i>&nbsp; &nbsp; Click to upload</h5>
          </label>
          <input accept=".pdf, .doc, .docx" id="fileInput" type="file" onChange={handleFileUpload} />
          &nbsp; &nbsp; &nbsp; &nbsp; <p>Upload your business license (Required) Max file size 50 MB</p>
        </div>
        <hr />
        <div className="date-picker">
          <p>Select today's date (Required)</p>
          <label htmlFor="registrationDate"></label>
          <input type="date" id="registrationDate" name="registrationDate" value={formData.registrationDate}
            onChange={handleFormChange} />

        </div>
        <hr />
        <button type="submit" >Submit</button>
      </form>
    </div>

  );
};

export default BusinessRegistration;
