import React from "react";
import Checked from "../../assets/icons/🔒checked.svg";
import "./eligibility.css";

export const EligibilityHeader = ({ className }) => {
  return (
    <h1 className={`eligibility-header ${className}`}>
      <img src={Checked} alt="img" />
      <div className="headline">Check your Eligibility</div>
    </h1>
  );
};

export default EligibilityHeader;
