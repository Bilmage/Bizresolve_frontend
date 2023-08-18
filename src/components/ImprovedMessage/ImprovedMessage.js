import React from "react";
import "./improved.css";

export const ImprovedMessage = ({ className }) => {
    return (
        <div className={`improved-message ${className}`}>
            <p className="tell-us-what-can-be">Tell us what can be improved ?</p>
        </div>
    );
};
export default ImprovedMessage;