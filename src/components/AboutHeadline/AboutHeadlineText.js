import React from "react";
import AboutText from "./AboutText";
import AboutHeadline from "./AboutHeadline";

export const AboutHeadlineText = ({style}) => {
  return (
    <div className="container" style={style}>
      <AboutHeadline style={style} />
      <AboutText style={style} />
      
     
      
    </div>
  );
};

export default AboutHeadlineText;