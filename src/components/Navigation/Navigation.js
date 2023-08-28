import React, { useState } from "react";
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
  const [auth, setAuth] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logging out...');
  };

  // const auth = useAuth();
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

          {/* when Auth is true */}
          {auth ? (
            <div className="d-flex flex-row w-100">
              <div className="dropdown">
                <a
                  href="#"
                  role="button"
                  id="avatar-dropdown"
                  onClick={handleToggleDropdown}
                  aria-expanded={isOpen}
                >
                  <img
                    src="https://robohash.org/mail@ashallendesign.co.uk"
                    alt="avatar-image"
                    className="avatar-logo"
                  />
                </a>
                <ul
                  className={`dropdown-menu${isOpen ? " show" : ""}`}
                  aria-labelledby="avatar-dropdown"
                >
                  <li>
                    <a href="#" onClick={handleLogout}  className="logout-link">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              <p className="welcome-text">Welcome MJ!</p>
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
