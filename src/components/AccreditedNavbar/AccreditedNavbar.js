import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Button from "../Button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LogoIpsum from "../../assets/images/logoipsum.svg";
import Profilepic2 from "../../assets/images/Profilepic2.png";

export const AccreditedNavBar = ({ className }) => {
  const navItems = [
    { text: "Home", path: "/" },
    { text: "Featured reviews", path: "/featuredreviews" },
    { text: "File a complaint", path: "/filecomplaints" },
  ];

  return (
    <div className="container-fluid">
      <div className={`accredited-nav-bar ${className}`}>
        <div className="logo">
          <Link to="/">
            <img className="img" alt="Logo" src={LogoIpsum} />
          </Link>
        </div>
        <div className="nav-items">
          {navItems.map((item, index) => (
            <div className="text-wrapper" key={index}>
              <Link to={item.path}>{item.text}</Link>
            </div>
          ))}
          <div>
            <Link to="/Registration">
              <Button text="Get Accredited" icon={faPlus}></Button>
            </Link>
          </div>
          <img className="image" alt="Img" src={Profilepic2} />
        </div>
      </div>
    </div>
  );
};

export default AccreditedNavBar;