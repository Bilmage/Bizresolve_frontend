import React from "react";
import MissionText from "./MissionText";
import MissionHeadline from "./MissionHeadline";

export const MissionSection = ({ style }) => {
  return (
    <div className="container" style={style}>
      <MissionHeadline style={style} />
      <MissionText style={style} />
    </div>
  );
};

export default MissionSection;
