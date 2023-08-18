import React from "react";
import { FaCheckSquare } from 'react-icons/fa';
import "./accreditation.css";

export const Accredititation = (className) => {
    return (
        <div className="container-fluid">
        <div className={`accredititation ${className}`}>
            <div className="acrreditation">
                <div className="div">
                    <p className="what-is-bizresolve">What Is Bizresolve Accreditation ?</p>
                </div>
                <div className="div">
                    <p className="text-wrapper">
                        Accreditation is a systematic evaluation of a business&#39;s ethical operations and integrity. When a
                        business seeks accreditation, it undergoes a thorough assessment to determine its compliance with the
                        rigorous standards set by Bizresolve. If you can confidently answer the following questions with a
                        resounding yes, you possess the qualities that make you an excellent candidate for accreditation.
                    </p>
                </div>
            </div>
            <div className="accredited-questions">
                <div className="div">
                
                    <p className="text-wrapper"><FaCheckSquare style={{ color: '#A95B1F' }}/>&nbsp;Does the business operate ethically ?</p>
                </div>
                <div className="div">
                
                    <p className="text-wrapper"><FaCheckSquare style={{ color: '#A95B1F' }}/>&nbsp;Does it conduct business with integrity ?</p>
                </div>
                <div className="div">
                
                    <p className="text-wrapper"><FaCheckSquare style={{ color: '#A95B1F' }}/>&nbsp;Does the business advertise honestly ?</p>
                </div>
                <div className="div">
                
                    <p className="text-wrapper"><FaCheckSquare style={{ color: '#A95B1F' }}/>&nbsp;Is this a business consumers can trust ?</p>
                </div>
            </div>
        </div>
        </div>
    );
};
export default Accredititation;