// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const toggleSidebar = () => {
    onClose(); // Close the sidebar when the close button is clicked
  };

  // Define your navigation items
  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Register your business", path: "/Registration" },
    { label: "Sign up", path: "/Registration" },
    { label: "Login", path: "/login" },
  ];

  return (
    <div className={`sidebar-mobile ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
      <div className="close-btn">
        <i  class="fa fa-times"></i>
      </div>
      <div className="nav-items">
        {navigationItems.map((item, index) => (
          <div className="nav-item" key={index}>
            <Link to={item.path} onClick={toggleSidebar}>
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="navigational-items">
        <div>
          <Link to="/businessregistration" onClick={toggleSidebar}>
            <Button text="Register your Business" icon={faPlus} size="small"></Button>
          </Link>
        </div>
        <div>
          <Link to="/Registration" onClick={toggleSidebar}>
            <Button text="Sign up"  size="small"/>
          </Link>
        </div>
        <div>
          <Link to="/SignIn" onClick={toggleSidebar}>
            <Button text="Log in"  size="small"/>
          </Link>
        </div>
      </div> */}
      {/* ... existing code for user authentication */}
    </div>
  );
};

export default Sidebar;
