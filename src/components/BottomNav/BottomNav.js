import React from "react";
import { Link } from "react-router-dom";
import ChevronLeft from "../../assets/icons/Chevron Left.png";
import ChevronRight from "../../assets/icons/Chevron Right.png";
import "./bottomnav.css";

export const BottomNav = ({ className, backPath, nextPath }) => {
  return (
    <div className="container">
      <div className={`bottom-nav ${className}`}>
        <Link to={backPath}>
          <div className="div">
            <img src={ChevronLeft} alt="img" />
            <div className="back-to-home">Back to home</div>
          </div>
        </Link>
        <Link to={nextPath}>
          <div className="div">
            <div className="next">Next</div>
            <img src={ChevronRight} alt="img" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
