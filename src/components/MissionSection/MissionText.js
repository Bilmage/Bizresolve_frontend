import React from "react";
import "./mission.css";

export const MissionText = ({ className }) => {
    return (
        <div className="container-fluid">
        <div className={`mission-text ${className}`}>
            <p className="at-bizresolve-our">
                At Bizresolve, our mission is to help businesses in Kenya manage complaints effectively and provide solutions
                that meet the needs of their customers. We strive to be a trusted partner for businesses, providing expert
                guidance and support that enables them to resolve complaints in a timely and professional manner. We believe
                that by helping businesses improve their complaint management processes, we can contribute to a more positive
                and customer-focused business environment in Kenya
            </p>
        </div>
        </div>
    );
};

export default MissionText;