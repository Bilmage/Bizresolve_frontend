import React from "react";
import "./customer.css";

export const ImproveCustomer = ({ className }) => {
    return (
        <div className={`improve-customer ${className}`}>
            <div className="div">
                <div className="text-wrapper">Improve Customer Satisfaction</div>
            </div>
            <div className="div">
                <p className="achieve-independent">
                    Achieve Independent Accreditation and Stand Out as a business committed to customer satisfaction. Display your
                    badge or certificate to customers and earn their trust.
                </p>
            </div>
        </div>
    );
};
export default ImproveCustomer;