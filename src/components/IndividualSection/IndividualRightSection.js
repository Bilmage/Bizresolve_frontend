import React from "react";
import { FaCheckSquare } from 'react-icons/fa';
import './individual.css';

export const IndividualRight = ({ individual }) => {
    return (
        <div className="container-fluid">
        <div className="individual-right" style={individual}>
            <div className="headline">
                <h1 className="for-consumers">For Consumers</h1>
            </div>
            <div className="paragraph">
                <p className="Line1">
                    <FaCheckSquare style={{ color: '#A95B1F' }} />&nbsp;Get connected to an Accredited business.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line2">
                    <FaCheckSquare style={{ color: '#A95B1F' }} />&nbsp;Complain against Bizresolve-accredited businesses for mistreatment.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line3">
                    <FaCheckSquare style={{ color: '#A95B1F' }} />&nbsp;Discover top businesses to engage with through our Bizresolves’ accredited directory.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line4">
                    <FaCheckSquare style={{ color: '#A95B1F' }} />&nbsp;Rate Bizresolve-accredited businesses on our reviews page and contribute to the community.
                </p>
            </div>
        </div>
        </div>
    );
};

export default IndividualRight;
