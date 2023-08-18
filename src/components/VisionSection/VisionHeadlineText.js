import React from "react";
import "./vision.css";

export const VisionHeadlineText = ({ className }) => {
  return (
    <h1 className={`vision-headline-text ${className}`}>
      <span className="our-vision">
        <span className="text-wrapper">Our</span>
        <span className="span">&nbsp;</span>
        <span className="text-wrapper-2">Vision</span>
      </span>
    </h1>
  );
};


export default VisionHeadlineText;