import React from "react";
import './footer.css';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from "react-router-dom";



export const BizFooter = ({ footer }) => {
  return (
    <>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h1>Subscribe to our newsletter!</h1>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email..." required="" />
                <Link to="#"><button type="submit">Subscribe Now {<FaPaperPlane />}</button></Link>
              </form>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>For Consumers</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">Search for a Bizresolve Accredited business</a>
                </li>
                <li>
                  <a href="/">Start a review</a>
                </li>
                <li>
                  <a href="/">File a complaint</a>
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
            <div >
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