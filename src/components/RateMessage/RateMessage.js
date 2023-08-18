import React from "react";
import "./rate.css";

export const RateMessage = ({ className }) => {
    return (
        <div className="container">
        <div className={`rate-message ${className}`}>
            
            <h1 className="rate-your-experience">Rate your experience with us</h1>
            <p className="are-you-satisfied">Are you satisfied with our service ?</p>
            </div>
        </div>
    );
};
export default RateMessage;