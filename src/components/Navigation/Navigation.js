import React, { useState } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const Navigation = ({ navigation }) => {
  // const [auth, setAuth] = useState(true);
  const auth = useAuth();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  // const auth = useAuth();
  console.log("Auth", auth);

  return (
    <div className="container-fluid">
      <div className="navigation" style={navigation}>
        <Link to="/"> <div className="logo">

          <div className="text-wrapper"></div>

        </div></Link>
        <div className="nav-items">
          {navigationItems.map((item, index) => (
            <div className="nav-item" key={index}>
              <Link to={item.path}>{item.label}</Link>
            </div>
          ))}
          <div>
            <Link to="/businessregistration">
              <Button text="Register your Business" icon={faPlus}></Button>
            </Link>
          </div>

          {/* when Auth is true */}
          {auth && auth.user ? (
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
                    <a href="#" onClick={handleLogout} className="logout-link">
                      Logout
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard" className="logout-link">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
              <p className="welcome-text">Welcome {auth.user.firstName} {auth.user.lastName}</p>
            </div>
          ) : (
            <div className="container-fluid">
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
