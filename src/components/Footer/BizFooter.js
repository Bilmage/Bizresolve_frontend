import React, { useState } from "react";
import './footer.css';
import { FaPaperPlane } from 'react-icons/fa';


export const BizFooter = ({ footer }) => {
  const [email, setEmail] = useState(""); // State to store the entered email

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update the email state as the user types
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the email to your backend server for storage
    try {
      const response = await fetch("YOUR_BACKEND_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send the email in JSON format
      });

      if (response.ok) {
        console.log("Email stored successfully!"); // Handle success
      } else {
        console.error("Failed to store email."); // Handle failure
      }
    } catch (error) {
      console.error("An error occurred:", error); // Handle errors
    }

    // Clear the email input after submission
    setEmail("");
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h1>Subscribe to our newsletter!</h1>
              <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                  type="email"
                  placeholder="Enter E-mail"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button type="submit">Subscribe<FaPaperPlane /></button>
              </form>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>For Consumers</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">Search for a Bizresolve Accredited business</a>
                </li>
                <li>
                  <a href="/ratings">Start a review</a>
                </li>
                <li>
                  <a href="/logcomplaint">File a complaint</a>
                </li>
                <li>
                  <a href="/">Frequently asked questions (FAQS)</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>For Businesses</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">Get Accredited</a>
                </li>
                <li>
                  <a href="/">Apply for Bizresolve Accreditation</a>
                </li>
                <li>
                  <a href="/">Become a partner</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div>
              <p className="copyright-text">
                © 2023 Bizresolve. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BizFooter;
