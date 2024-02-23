import React from "react";
import Bizpic from "../../assets/images/Bizpic.png";
import './business.css';
export const BusinessRight = ({ business }) => {
    return (
        <div className="container">
        <div className="business-right" style={business}>
            <img className="image" alt="img" src={Bizpic} />
        </div>
        </div>
    );
};
export default BusinessRight;