import React from "react";
import ChevronLeft from "../../assets/icons/Chevron Left.png";
import ChevronRight from "../../assets/icons/Chevron Right.png";
import "./bottomnav.css";

export const BottomNav = ({ className }) => {
  return (
    <div className={`bottom-nav ${className}`}>
      <a href="/">
        <div className="div">
          <img src={ChevronLeft} className="icon-back-instance" alt="img" />
          <div className="back-to-home">Back to home</div>
        </div>
      </a>
      <a href="/">
        <div className="div">
          <div className="next">Next</div>
          <img src={ChevronRight} className="icon-next-instance" alt="img" />
        </div>
      </a>
    </div>
  );
};

export default BottomNav;
