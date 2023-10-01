import React from "react";
import "./aboutheadline.css";
import Line from '../../assets/images/Line 1.svg';

export const AboutHeadline = ({ className }) => {
    return (
        <div className="container">
            <h1 className={`about-headline-text ${className}`}>
                <div className="headline">
                    <img className="line" alt="Line" src={Line} />
                    <p className="we-build-bridges">
                        <span className="text-wrapper">We build bridges between</span>
                        <span className="span">&nbsp;</span>
                        <span className="text-wrapper-2">companies and customers</span>
                    </p>
                </div>
            </h1>
        </div>
    );
};

export default AboutHeadline;