import React from "react";
import { FaCheckSquare } from 'react-icons/fa';
import './business.css';

export const BusinessLeft = ({ business }) => {
    return (
        <div className="container">
        <div className="business-left" style={business}>
            <div className="headline">
                <div className="for-business">For Business</div>
            </div>
            <div className="paragraph">
                <p className="Line1">
                <FaCheckSquare style={{ color: '#a95b1f' }}/>&nbsp;  Gain a competitive edge for your business by showcasing your commitment to customer-centric practices.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line2">
                <FaCheckSquare style={{ color: '#a95b1f' }}/>&nbsp; Elevate customer satisfaction, fostering loyalty and generating positive word-of-mouth recommendations.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line3">
                <FaCheckSquare style={{ color: '#a95b1f' }}/>&nbsp; Leverage our complaint management expertise for efficient handling of customer grievances.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line4"><FaCheckSquare style={{ color: '#a95b1f' }}/>&nbsp;Build a trustworthy reputation through effective complaint resolution.</p>
            </div>
            <div className="paragraph">
                <p className="Line5"><FaCheckSquare style={{ color: '#a95b1f' }}/>&nbsp;Get monthly reports on customer service ratings.</p>
            </div>
        </div>
        </div>
    );
};
export default BusinessLeft;