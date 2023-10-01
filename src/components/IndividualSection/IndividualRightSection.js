import React from "react";
import { FaCheckSquare } from 'react-icons/fa';
import './individual.css';

export const IndividualRight = ({ individual }) => {
    return (
        <div className="container
        ">
        <div className="individual-right" style={individual}>
            <div className="headline">
                <h1 className="for-consumers">For Consumers</h1>
            </div>
            <div className="paragraph">
                <p className="Line1">
                    <FaCheckSquare className="check"/>&nbsp;Get connected to an Accredited business.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line2">
                    <FaCheckSquare className="check"/>&nbsp;Complain against Biz-resolve-accredited businesses for mistreatment.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line3">
                    <FaCheckSquare className="check"/>&nbsp;Discover top businesses to engage with through our Biz-resolves’ accredited directory.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line4">
                    <FaCheckSquare className="check"/>&nbsp;Rate Biz-resolve-accredited businesses on our reviews page and contribute to the community.
                </p>
            </div>
        </div>
        </div>
    );
};

export default IndividualRight;
