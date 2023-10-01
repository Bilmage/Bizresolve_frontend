import React from "react";
import "./feedback.css";
import Lottie from "lottie-react";
import thumbsup from '../../thumbup.json';
import IconBack from '../IconBack/IconBack';

export const FeedbackMessage = ({ className }) => {
    return (
        <>
        <div className="container">
        <div className={`feedback-message ${className}`}>
        < Lottie animationData ={thumbsup} className="thumb-up"/>
            <div className="text">
                <div className="thank-you">Thank you</div>
            </div>
            <div className="text">
                <p className="message">Your feedback was successfully submitted</p>
            </div>
            <div>
                <IconBack />
            </div>
        </div>
        </div>
        </>
    );
};
export default FeedbackMessage;