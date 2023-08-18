import PropTypes from "prop-types";
import React from "react";
import "./navigation.css";
import Hamburger from '../../assets/images/Menu.png';

export const NavigationMobile = ({ className, menu = {Hamburger} }) => {
    return (
        <div className={`navigation-mobile ${className}`}>
            <div className="logo">
                <div className="text-wrapper">Logo</div>
            </div>
            <img className="menu" alt="Menu" src={menu} />
        </div>
    );
};

NavigationMobile.propTypes = {
    menu: PropTypes.string,
};

export default NavigationMobile;