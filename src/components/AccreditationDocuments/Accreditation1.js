import React from "react";
import "./accreditation.css";
import Header from "../Header/Header";

export const Accreditation1 = ({ className }) => {
    return (
        <div className="container">
        <div className={`accreditation ${className}`}>
        <div>
        <Header mainText="Get ready to be" secondaryText="Accredited" />

      </div>
            <h2 className="p-wrapper">
                <p className="are-you-a-new">Are You A New Business Owner ?</p>
            </h2>
            <div className="p-wrapper">
                <p className="at-bizresolve-kenya">
                    At Biz-resolve Kenya, we are dedicated to assisting businesses in Kenya in effectively managing complaints and
                    delivering solutions that cater to their customers&#39; needs. Our primary objective is to become a reliable
                    partner for businesses, offering expert advice and support to facilitate the resolution of complaints in a
                    prompt and professional manner. <br />
                    <br />
                    We firmly believe that by enhancing businesses&#39; complaint management processes, we can foster a more
                    favorable and customer-centric business environment across Kenya. Our mission is to empower businesses to
                    excel in customer satisfaction and drive overall success through efficient complaint resolution.
                </p>
            </div>
        </div>
        </div>
    );
};
export default Accreditation1;