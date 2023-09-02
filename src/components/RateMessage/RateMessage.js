import React from "react";
import { Link } from "react-router-dom";
import "./rate.css";

export const RateMessage = ({ className }) => {
    return (
        <div className="container">
        <div className={`rate-message ${className}`}>
            
            <h1 className="rate-your-experience">Rate your experience with us</h1>
            <p className="are-you-satisfied">Are you satisfied with our service ?</p>
            <p className="additionally-you-ll">
                    <span className="text-wrapper">
                    Alternatively you can Search for another business by clicking {" "}
                        <Link to="/search">  <strong style={{ textDecoration: "underline", color: '#F78431' }}>
                        here
                        </strong></Link>
                    </span>

                </p>
            
            </div>
        </div>
    );
};
export default RateMessage;