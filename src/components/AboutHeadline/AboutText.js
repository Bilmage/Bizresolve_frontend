import React from "react";
import "./aboutheadline.css";

export const AboutText = ({ className }) => {
    return (
        <div className="container">
        <div className={`about-text ${className}`}>
            <p className="paragraph">
                We are dedicated to assisting businesses in Kenya in effectively managing complaints and delivering solutions
                that cater to their customers&#39; needs.
            </p>
        </div>
        </div>
    );
};

export default AboutText;