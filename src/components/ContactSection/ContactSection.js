import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { AiOutlineUsergroupAdd, AiOutlineFileAdd } from 'react-icons/ai';

export const ContactSection = ({ className }) => {
  return (
    
    <div className="newsletter">
      <div className="container">      
        <div className="row justify-content-center" style={{alignItems: 'center', margin: 'auto'}}>
          <div className="col-xl-9 col-lg-9 text-center">
            <div className="section-title text-center">
              <div className="text-center"> {/* Center-align the h2 and p elements */}
                <h2>Get Ready To Be Accredited</h2>
                <p>
                  Here’s the low-down on what you need to get accredited and File a complaint. Click on the button to learn more.
                </p>
              </div>
              <br/><br/>
              <div className="newsletter-form d-flex justify-content-center">
              <Link to="/ratings"> <button type="submit">Leave a review <AiOutlineUsergroupAdd /></button></Link>
              <Link to="/logcomplaint">  <button type="submit">File a complaint <AiOutlineFileAdd /></button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
