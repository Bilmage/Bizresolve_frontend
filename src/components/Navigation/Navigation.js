import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useAuth } from "../../hooks";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const Navigation = ({ navigation }) => {
  const auth = useAuth();
  console.log("Auth", auth);
  return (
    <div className="container-fluid">
      <div className="navigation" style={navigation}>
        <div className="logo">
          <Link to="/">
            <div className="text-wrapper"></div>
          </Link>
        </div>
        <div className="nav-items">
          {navigationItems.map((item, index) => (
            <div className="nav-item" key={index}>
              <Link to={item.path}>{item.label}</Link>
            </div>
          ))}
          {auth && auth.user ? (
            <div>
              Welcome {auth.user.firstName} {auth.user.lastName}
            </div>
          ) : (
            <div className="container">
              <div>
                <Link to="/Registration">
                  <Button text="Sign up" />
                </Link>
              </div>
              &nbsp; &nbsp; 
              <div>
                <Link to="/SignIn">
                  <Button text="Log in" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
