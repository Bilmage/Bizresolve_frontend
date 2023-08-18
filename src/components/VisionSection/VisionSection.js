import React from "react";
import VisionText from "./VisionText";
import VisionHeadlineText from "./VisionHeadlineText";

export const VisionSection = ({style}) => {
  return (
    <div className="container" style={style}>
      <VisionText style={style} />
      <VisionHeadlineText style={style} />
     
      
     
      
    </div>
  );
};

export default VisionSection;