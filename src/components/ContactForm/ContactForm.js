import React, { useState } from "react";
import "../BusinessRegistrationForm/registration.css";

export const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",    
    email: "",
    phone: "",
    county: "",
    city: "",
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
    <div className="container">
    <form className="form" onSubmit={handleFormSubmit}>
      <h4>Get in touch</h4>
      <p>
        Bizresolve will use this information to contact you via phone or email 
      </p>      
      
      <div className="text-input">
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" name="Name" placeholder="Enter your name" value={formData.name}
          onChange={handleFormChange} />
      </div>
      <hr />
      <div className="text-input">
        <label htmlFor="Email">Email address</label>
        <input type="email" id="businessEmail" name="Email" placeholder="Enter email address" value={formData.email}
          onChange={handleFormChange} />
      </div>
      <hr />
      <div className="text-input">
        <label htmlFor="Phone">Phone Number (optional)</label>
        <input type="tel" id="Phone" name="Phone" placeholder="Enter phone number" value={formData.phone}
          onChange={handleFormChange} />
      </div>
      <hr />
      <div className="text-input">
        <label htmlFor="Category">Physical Address</label>
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
        &nbsp; &nbsp;
        <select id="City" name="City" value={formData.city}
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
     
      <div className="description-input">
        <label htmlFor="businessDescription" className="text-input">Get in touch</label>
        <textarea
          id="businessDescription"
          name="businessDescription"
          type="description"
          rows={3}
          value={formData.description}
          onChange={handleFormChange}
        />
      </div>
      <hr />
     
      
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default ContactForm;
