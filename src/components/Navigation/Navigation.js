import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const Navigation = ({ navigation }) => {
  return (
    <div className="container-fluid">
      <div className="navigation" style={navigation}>
        <div className="logo">
          <Link to="/">
            <div className="text-wrapper">Logo</div>
          </Link>
        </div>
        <div className="nav-items">
          {navigationItems.map((item, index) => (
            <div className="nav-item" key={index}>
              <Link to={item.path}>{item.label}</Link>
            </div>
          ))}
          <div>
            <Link to="/Registration">
              <Button text="Sign Up" />
            </Link>
          </div>
          <div>
            <Link to="/SignIn">
              <Button text="Sign In" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
