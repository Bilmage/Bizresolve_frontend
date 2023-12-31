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
                <FaCheckSquare className="check"/>&nbsp;  Gain a competitive edge for your business by showcasing your commitment to customer-centric practices.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line2">
                <FaCheckSquare className="check"/>&nbsp; Elevate customer satisfaction, fostering loyalty and generating positive word-of-mouth recommendations.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line3">
                <FaCheckSquare className="check"/>&nbsp; Leverage our complaint management expertise for efficient handling of customer grievances.
                </p>
            </div>
            <div className="paragraph">
                <p className="Line4"><FaCheckSquare className="check"/>&nbsp;Build a trustworthy reputation through effective complaint resolution.</p>
            </div>
            <div className="paragraph">
                <p className="Line5"><FaCheckSquare className="check"/>&nbsp;Get monthly reports on customer service ratings.</p>
            </div>
        </div>
        </div>
    );
};
export default BusinessLeft;