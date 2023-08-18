import React from "react";
import "./accreditation.css";

export const Accreditation1 = ({ className }) => {
    return (
        <div className="container-fluid">
        <div className={`accreditation ${className}`}>
            <h1 className="p-wrapper">
                <p className="get-ready-to-be">Get Ready To Be Accredited</p>
            </h1>
            <h2 className="p-wrapper">
                <p className="are-you-a-new">Are You A New Business Owner ?</p>
            </h2>
            <div className="p-wrapper">
                <p className="at-bizresolve-kenya">
                    At Bizresolve Kenya, we are dedicated to assisting businesses in Kenya in effectively managing complaints and
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