import React from "react";
import './headline.css';

export const Masthead = ({ headline }) => {
    return (
        <div className="container">
        <h1 className="masthead" style={headline}>
            <div className="empowering">Empowering Individuals and Businesses</div>
            <div class="line" style={headline}></div>
        </h1>
        </div>
    );
};

export default Masthead;