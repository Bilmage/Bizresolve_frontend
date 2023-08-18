import React from "react";
import "./mission.css";

const MissionHeadline = ({ className }) => {
  return (
    <h1 className={`mission-headline ${className}`}>
      <div className="headline">
        <div className="our-mission">
          <span className="text-wrapper">Our</span>
          <span className="span">&nbsp;</span>
          <span className="text-wrapper-2">Mission</span>
        </div>
      </div>
    </h1>
  );
};

export default MissionHeadline;
