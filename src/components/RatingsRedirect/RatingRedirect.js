import React from "react";
import "./feedback.css";
import Thumbsup from '../../assets/images/Thumbsup.svg';
import IconBack from '../IconBack/IconBack';

export const FeedbackMessage = ({ className }) => {
    return (
        <div className={`feedback-message ${className}`}>
            <img className="thumb-up" alt="Thumb up" src={Thumbsup} />
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
    );
};
export default FeedbackMessage;