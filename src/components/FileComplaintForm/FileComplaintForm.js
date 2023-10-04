import React, { useState } from "react";
import "../BusinessRegistrationForm/registration.css";


export const FileComplaintForm = ({ className }) => {
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
        <h4>File a complaint with Bizresolve today</h4>
        <p>
          Bizresolve will use this information to contact you via phone or email to
          learn more about your business
        </p>        
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
          <label htmlFor="businessPhysicalAddress">Business Physical Address</label>
          <input type="text" id="businessPhysicalAddress" name="businessPhysicalAddress" placeholder="Enter business physical address" value={formData.businessPhysicalAddress}
            onChange={handleFormChange} />
        </div>
        <hr />
        <div className="text-input">
          <label htmlFor="businessPhone">Business Phone Number (optional)</label>
          <input type="tel" id="businessPhone" name="businessPhone" placeholder="Enter business phone number" value={formData.businessPhone}
            onChange={handleFormChange} />
        </div>
        <hr />
        <div className="text-input">
          <label htmlFor="businessCategory">County the business is situated</label>
          <select id="County" name="County" value={formData.county}
            onChange={handleFormChange}>
            <option value="">County</option>
            <option value={1}>Nairobi</option>
            <option value={2}>Kisumu</option>
            <option value={3}>Mombasa</option>
            <option value={4}>Nakuru</option>
            <option value={5}>Naivasha</option>
            <option value={6}>Kisii</option>
          </select>       
          
        </div>
        <hr />       
        <div className="description-input">
          <label htmlFor="businessDescription" className="text-input">Describe your complaint</label>
          <textarea
            id="businessDescription"
            name="businessDescription"
            rows={3}
            value={formData.complaintDescription}
            onChange={handleFormChange}
          />
        </div>
        <hr />
        <div className="file-input">
          <label htmlFor="fileInput">


            <h5><i className="fa fa-upload" aria-hidden="true"></i>&nbsp; &nbsp; Click to upload</h5>
          </label>
          <input accept=".pdf, .doc, .docx" id="fileInput" type="file" onChange={handleFileUpload} />
          &nbsp; &nbsp; &nbsp; &nbsp; <p>Upload the required documents or any other relevant file (Required) Max file size 50 MB</p>
        </div>
        <hr />        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FileComplaintForm;
