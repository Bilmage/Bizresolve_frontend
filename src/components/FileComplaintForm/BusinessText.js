import React from "react";
import { Link } from "react-router-dom";
import "./business.css";

export const BusinessText = ({ className }) => {
  return (
    <div className="container">
      <div className={`business-text ${className}`}>
        <div className="p-wrapper">
          <h1 className="headline">What Type Of Business Are You Reporting?</h1>
        </div>
        <div className="p-wrapper">
          <p className="paragraph">
            Bizresolve welcomes the opportunity to assist you with your market
            place challenge. Whether you need to file a complaint, post a
            review, tell us about a misleading advertisement, or report a scam,
            you&#39;re in the right place. There are some disputes Bizresolve
            cannot help with, You can view those{" "}
            <Link to="#">  <strong style={{ textDecoration: "underline", color: '#F78431' }}>
              here.
            </strong></Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default BusinessText;
