import React from "react";
import "./corevalue.module.css";
import ShieldCheck from '../../assets/images/ShieldCheck.svg';

export const Regulatory = ({ className }) => {
    return (
        <div className={`regulatory ${className}`}>
            <img className="shield-check" alt="Shield check" src={ShieldCheck} />
            <div className="accountability">Accountability</div>
            <p className="we-take">
                We take responsibility for our actions and are accountable to our clients, partners, and stakeholders.
            </p>
        </div>
    );
};

export default Regulatory;