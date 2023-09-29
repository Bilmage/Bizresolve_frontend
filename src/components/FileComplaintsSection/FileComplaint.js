import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./filecomplaint.css";

export const FileComplaint = ({ className }) => {
  const [value, setValue] = useState("option1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <div className={`file-complaint ${className}`}>
        <div className="div">
          <div className="sub-headline">File a complaint</div>
          <div className="div-2">
            <p className="paragraph">
              Bizresolve welcomes the opportunity to assist you with your market
              place challenge. Whether you need to file a complaint, post a
              review, tell us about a misleading advertisement, or report a
              scam, you're in the right place. There are some disputes Bizresolve cannot help with, You can view those{" "}
              <Link to="#" className="link">
                <strong>here</strong>
              </Link>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                className="radio-input"
                value="option1"
                checked={value === "option1"}
                onChange={handleChange}
              />
              I'd like to file a complaint against a business, and have Bizresolve help me get a resolution to my problem.
            </label>
            <label className="radio-label">
              <input
                type="radio"
                className="radio-input"
                value="option2"
                checked={value === "option2"}
                onChange={handleChange}
              />
              I'd like to share an experience about a business.
            </label>
            <label className="radio-label">
              <input
                type="radio"
                className="radio-input"
                value="option3"
                checked={value === "option3"}
                onChange={handleChange}
              />
              I'd like to warn others about a business or offer that sounds like a fraud.
            </label>
            <label className="radio-label">
              <input
                type="radio"
                className="radio-input"
                value="option4"
                checked={value === "option4"}
                onChange={handleChange}
              />
              I'd like to file a complaint about a warranty dispute for a vehicle.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileComplaint;
