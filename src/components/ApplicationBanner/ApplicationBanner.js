import React from "react";
// import Banner from '../../assets/images/ContactMap.png';
import "./banner.css";
import Lottie from "lottie-react";
import ApplicationAnimation from "../../ApplicationAnimation.json";

export const ApplicationBanner = ({ className }) => {
    return (
        <div className="container-fluid">
            <div className={`application-banner ${className}`}>
            <Lottie animationData={ApplicationAnimation} className="contact-map"/>
            </div>
        </div>
    );
};

export default ApplicationBanner;
