import React, { useState } from "react";
import { FaMapPin } from "react-icons/fa";
import safaricom from "../../assets/images/Safaricom.png";

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
        <h4>Get acrredited with Biz-resolve today</h4>
        <p>
          Biz-resolve will use this information to contact you via phone or email to
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
          &nbsp; &nbsp; &nbsp; &nbsp; <p>Upload your business plan (Required) Max file size 50 MB</p>
        </div>
        <hr />
        <div className="file-input">
          <label htmlFor="fileInput">


            <h5><i className="fa fa-upload" aria-hidden="true"></i>&nbsp; &nbsp; Click to upload</h5>
          </label>
          <input accept=".pdf, .doc, .docx" id="fileInput" type="file" onChange={handleFileUpload} />
          &nbsp; &nbsp; &nbsp; &nbsp; <p>Upload your KRA PIN certificate (Required) Max file size 50 MB</p>
        </div>
        <hr />
        <div className="date-picker">
          <p>Select today's date (Required)</p>
          <label htmlFor="registrationDate"></label>
          <input type="date" id="registrationDate" name="registrationDate" value={formData.registrationDate}
            onChange={handleFormChange} />

        </div>
        <hr />
        <div className="grid-container">
      <div className="grid-item">
        <fieldset>
          <p className="subtitle">
            Have you been in business for more than six months?
          </p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="hasBeenInBusiness"
                value="Yes"
                checked={formData.hasBeenInBusiness === "Yes"}
                onChange={handleFormChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="hasBeenInBusiness"
                value="No"
                checked={formData.hasBeenInBusiness === "No"}
                onChange={handleFormChange}
              />
              No
            </label>
          </div>
        </fieldset>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <button className="outlined-button" onClick={handleSetLocation}>
            Set Location
          </button>
        </div>
      </div>
    </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default BusinessRegistration;
