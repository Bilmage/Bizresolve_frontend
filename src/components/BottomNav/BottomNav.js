import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./bottomnav.css";

export const BottomNav = ({ className, nextPath }) => {
  return (
    <div className="container">
      <div className={`bottom-nav ${className}`}>
        <Link to="/">
          <div className="div">
            <FontAwesomeIcon icon={faChevronLeft} className="icon-style"/>
            <div className="back-to-home">Back to home</div>
          </div>
        </Link>
        <Link to={nextPath}>
          <div className="div">
            <div className="next">Next</div>
            <FontAwesomeIcon icon={faChevronRight} className="icon-style right"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
