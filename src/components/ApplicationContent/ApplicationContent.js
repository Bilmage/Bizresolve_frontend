import React from "react";
import { Link } from "react-router-dom";
import "./content.css";

export const ApplicationContent = ({ className }) => {
  return (
    <div className="container">
      <div className={`application-content ${className}`}>
        <div className="accreditation">
          <div className="div-wrapper">
            <p className="okay-so-how-should-i">
              Okay, So How Should I Prepare For The Application Process ?
            </p>
          </div>
          <div className="div-wrapper">
            <p className="the-first">
              <span className="text-wrapper">
                The first requirement for Bizresolve Accreditation is a minimum
                business tenure of six months. This criterion allows businesses
                to establish a track record, assess their business plan, manage
                customer experiences, and demonstrate resilience in staying
                operational. These factors are carefully evaluated during the
                verification process following the application.
                <br />
                <br />
                If you are a new business owner nearing or surpassing the
                six-month milestone, it is advisable to assess your alignment
                with Bizresolve Accreditation standards and{" "}
              </span>
              <Link to="#">  <strong style={{ textDecoration: "underline", color: '#F78431' }}>
              eligibility criteria
            </strong></Link>
              <span className="text-wrapper">
                . Additionally, gather the necessary documentation outlined
                below in preparation for your application.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplicationContent;
