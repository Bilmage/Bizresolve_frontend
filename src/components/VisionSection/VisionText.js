import React from "react";
import "./vision.css";

export const VisionText = ({ className }) => {
    return (
        <div className="container-fluid">
        <div className={`vision-text ${className}`}>
            <p className="paragraph">
                To be the leading provider of complaint management services in Kenya, empowering businesses to resolve customer
                complaints quickly and efficiently, and improving customer satisfaction and loyalty.
            </p>
        </div>
        </div>
    );
};

export default VisionText;