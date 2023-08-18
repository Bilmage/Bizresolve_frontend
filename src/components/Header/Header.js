import React from "react";
import "./header.css";

export const Header = ({ className }) => {
  return (
    <div className="container">
    <h1 className={`header ${className}`}>
      <p className="our-services">
        <span className="text-wrapper">How to file a</span>
        <span className="span">&nbsp;</span>
        <span className="text-wrapper-2">complaint</span>
      </p>
      <img className="line" alt="Line" src="line-1.svg" />
    </h1>
    </div>
  );
};

export default Header;
