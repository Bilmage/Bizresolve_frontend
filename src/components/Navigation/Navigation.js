import React, { useState } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import Button from "../Button/Button";
import Logo from '../../assets/images/logoipsum.svg';
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
  const auth = useAuth();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
    <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
      <div className="navigation">
      <div className='nav'>
      <Link to="/"><img src={Logo} alt="Logo" /></Link>
        
        <div className='nav_right'>
        <Link to='#' className={`menu-bars ${sidebarOpen ? 'close' : ''}`} onClick={toggleSidebar}>
          {sidebarOpen ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
        </Link>
        </div>
      </div>
        
    <div className="container-fluid">
        <div className={`sidecontent ${sidebarOpen ? "active" : "sidebar-hidden"}`}>
          <ul className="nav-items">
            {navigationItems.map((item, index) => (
              <div className="nav-item" key={index}>
                <Link to={item.path} >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="nav-items">
              <Link to="/businessregistration">
                <Button text="Register your Business" icon={faPlus} size="small"></Button>
              </Link>
              &nbsp; &nbsp;
              <Link to="/Registration">
                <Button text="Sign up" size="small" />
              </Link>
              &nbsp; &nbsp;
              <Link to="/SignIn" >
                <Button text="Log in" size="small" />
              </Link>
            </div>
            {auth && auth.user ? (
              <div className="d-flex flex-column">
                <div className="dropdown">
                  <Link
                    to="#"
                    role="button"
                    id="avatar-dropdown"
                    onClick={handleToggleDropdown}
                    aria-expanded={isOpen}
                  >
                    <img
                      src="https://robohash.org/mail@ashallendesign.co.uk"
                      alt="avatar-img"
                      className="avatar-logo"
                    />
                  </Link>
                  <ul
                    className={`dropdown-menu ${isOpen ? "show" : ""}`}
                    aria-labelledby="avatar-dropdown"
                  >
                    <li>
                      <Link to="#" onClick={handleLogout} className="logout-link">
                        Logout
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard" className="logout-link">
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="welcome-text">
                  Welcome 👋{auth.user.firstName} {auth.user.lastName}
                </p>
              </div>
            ) : (
              <div className="container"></div>
            )}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navigation;
