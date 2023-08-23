import React from "react";
import "./additional.css";
import { Link } from "react-router-dom";

export const AddtionalMessage = ({ className }) => {
    return (
        <div className="container">
            <div className={`addtional-message ${className}`}>
                <p className="additionally-you-ll">
                    <span className="text-wrapper">
                        Additionally, You'll want to ensure your business is registered, verified and listed on Bizresolve's
                        website. To be approved for Accreditation, businesses must maintain a 3 star rating or better. Read more about{" "}
                        <Link to="#">  <strong style={{ textDecoration: "underline", color: '#F78431' }}>
                            Bizresolve's rating system.
                        </strong></Link>
                    </span>

                </p>
            </div>
        </div>
    );
};
export default AddtionalMessage;