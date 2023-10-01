import React from "react";
import "./additional.css";
import { Link } from "react-router-dom";

export const AdditionalMessage = ({ className }) => {
    return (
        <div className="container">
            <div className={`addtional-message ${className}`}>
                <p className="additionally-you-ll">
                    <span className="text-wrapper">
                        Additionally, You'll want to ensure your business is registered, verified and listed on Bizresolve's
                        website. To be approved for Accreditation, businesses must maintain a 3 star rating or better. Read more about{" "}
                        <Link to="#">  <strong >
                            Biz-resolve's rating system.
                        </strong></Link>
                    </span>
                    
                    <span className="text-wrapper">
                    Also please note that you cannot get accredited without registering your business.
                    Click here to {" "}
                        <Link to="/businessregistration">  <strong >
                        Get registered
                        </strong></Link>
                    </span>

                </p>
                
            </div>
        </div>
    );
};
export default AdditionalMessage;