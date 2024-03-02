// Navigation.js

import React, { useState, useEffect } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks";
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import { logout } from "../../features/auth/authSlice";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const Navigation = ({ navigation }) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const handleToggleDropdown = () => {
    setSidebarOpen(false); // Close the sidebar when dropdown is toggled
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div
        className={`navigation ${
          isSidebarOpen && isSmallScreen ? "sidebar-open" : ""
        }`}
        style={navigation}
      >
        <Link to="/">
          <div className="logo">{/* Your logo content here */}</div>
        </Link>
        {isSmallScreen && (
          <div className="toggle-sidebar-btn" onClick={toggleSidebar}>
            <i class="fa fa-bars"></i>
          </div>
        )}
        {isSidebarOpen && isSmallScreen && (
          <div className="sidebar-backdrop" onClick={toggleSidebar}></div>
        )}
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div
          className={`nav-items ${
            isSmallScreen && !isSidebarOpen ? "hidden" : ""
          }`}
        >
          {navigationItems.map((item, index) => (
            <div className="nav-item" key={index}>
              <Link
                to={item.path}
                onClick={isSmallScreen ? handleToggleDropdown : undefined}
              >
                {item.label}
              </Link>
            </div>
          ))}
          <div>
            <Link
              to="/businessregistration"
              onClick={isSmallScreen ? handleToggleDropdown : undefined}
            >
              <Button text="Register your Business" icon={faPlus}></Button>
            </Link>
          </div>

          {/* when Auth is true */}
          {auth && auth.user ? (
            <div className="d-flex flex-row w-100">
              <div className="dropdown">
                <Link
                  to="#"
                  role="button"
                  id="avatar-dropdown"
                  onClick={isSmallScreen ? handleToggleDropdown : undefined}
                  // eslint-disable-next-line no-undef
                  aria-expanded={isOpen}
                >
                  <img
                    src="https://robohash.org/mail@ashallendesign.co.uk"
                    alt="avatar-img"
                    className="avatar-logo"
                  />
                </Link>
                <ul
                  className={`dropdown-menu${setSidebarOpen ? " show" : ""}`}
                  aria-labelledby="avatar-dropdown"
                >
                  <li>
                    <Link to="#" onClick={handleLogout} className="logout-link">
                      Logout
                    </Link>
                    <Link to="#" className="logout-link">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <a href="/dashboard" className="logout-link">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
              <p className="welcome-text">
                Welcome {auth.user.firstName} {auth.user.lastName}
              </p>
            </div>
          ) : (
            <div className="container">
              <div>
                <Link
                  to="/Registration"
                  onClick={isSmallScreen ? handleToggleDropdown : undefined}
                >
                  <Button text="Sign up" />
                </Link>
              </div>
              &nbsp; &nbsp;
              <div>
                <Link
                  to="/SignIn"
                  onClick={isSmallScreen ? handleToggleDropdown : undefined}
                >
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
