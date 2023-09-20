import React from "react";
import "./mission.css";

export const MissionHeadline = ({ className }) => {
  return (
    <div className="container">
    <h1 className={`mission-headline ${className}`}>
      <div className="headline">
        <div className="our-mission">
          <span className="text-wrapper">Our</span>
          <span className="span">&nbsp;</span>
          <span className="text-wrapper-2">Mission</span>
        </div>
      </div>
    </h1>
    </div>
  );
};

export default MissionHeadline;
