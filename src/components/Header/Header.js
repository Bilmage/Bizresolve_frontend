import React from "react";
import "./header.css";
import Line from "../../assets/images/Line 1.svg";

export const Header = ({ className, mainText, secondaryText }) => {
  return (
    <div className="container">
      <h1 className={`header ${className}`}>
        <p className="our-services">
          <span className="text-wrapper">{mainText}</span>
          <span className="span">&nbsp;</span>
          <span className="text-wrapper-2">{secondaryText}</span>
        </p>
        <img className="line" alt="Line" src={Line} />
      </h1>
    </div>
  );
};

export default Header;
