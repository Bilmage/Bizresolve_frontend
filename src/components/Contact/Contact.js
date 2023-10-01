import React from "react";
import "./contact.css";
import Email from "../../assets/images/Email.svg";
import Phone from "../../assets/images/Phone.png";
import MapMarker from "../../assets/images/Map Marker.png";
import Banner from "../../assets/images/contact.png";

export const ContactSection = ({ className }) => {
    return (
        <div className="container">
            <div className={`contact-section ${className}`}>
                <div className="individuals">
                    <div className="headline">
                        <div className="contact-us">Contact Us</div>
                    </div>
                    <div className="paragraph">
                        <img className="img" alt="Email" src={Email} />
                        <p className="div">
                            <span className="text-wrapper">Email </span>
                            <span className="span">
                                :<br />
                                <br />
                                Johndoe@gmail.com
                            </span>
                        </p>
                    </div>
                    <div className="paragraph">
                        <img className="img" alt="Phone" src={Phone} />
                        <p className="div">
                            <span className="text-wrapper">Phone </span>
                            <span className="span">
                                :<br />
                                <br />
                                +1 (123) 456-7890
                            </span>
                        </p>
                    </div>
                    <div className="paragraph">
                        <img className="img" alt="Map marker" src={MapMarker} />
                        <p className="div">
                            <span className="text-wrapper">Address </span>
                            <span className="span">
                                :<br />
                                <br />
                                Nairobi, Westlands
                            </span>
                        </p>
                    </div>
                </div>
                <div className="businesses">
                    <img className="contact-us-2" alt="Contact us" src={Banner} />
                </div>
            </div>
        </div>

    );
};
export default ContactSection;