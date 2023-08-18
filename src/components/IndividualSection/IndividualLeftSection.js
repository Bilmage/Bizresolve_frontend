import React from "react";
import individualpic from '../../assets/images/Individual.png';
import './individual.css';


export const Individualleft = ({ individual }) => {
    return (
        <div className="individualleft" style={individual}>
            <img className="image" alt="img" src={individualpic} />
        </div>
    );
};
export default Individualleft;