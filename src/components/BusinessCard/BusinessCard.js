import React from "react";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Safaricom from "../../assets/images/Safaricom.png";
import Certified from "../../assets/icons/Certified.png";
import Heart from "../../assets/icons/Heart.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./business.css";

export const BusinessCard = () => {
    return (
        <div className="business-card">
            <div className="liked">
                <div className="user-liked">
                    <div className="ratings">
                        <faStar />
                        <faStar />
                        <faStar />
                        <faStar />
                        <div className="text-wrapper">4 of 5</div>
                    </div>
                </div>
            </div>
            <div className="body">
                <img className="image" alt="Img" src={Safaricom} />
                <div className="frame">
                    <div className="div">
                        <div className="text-wrapper-2">Safaricom</div>
                        <div className="text-wrapper-3">Business</div>
                        <div className="new">
                            <img className="heart" alt="Heart" src={Heart} />
                            <div className="text-wrapper-4">New</div>
                        </div>
                    </div>
                    <div className="description">
                        <p className="p">
                            It is the largest telecommunications provider in Kenya, and one of the most profitable companies in the
                            East and Central Africa region.
                        </p>
                    </div>
                    <div className="div">
                        <div className="text-wrapper-5">Nairobi, Westlands</div>
                    </div>
                </div>
            </div>
            <div className="certified">
                <div className="certified-logo">
                    <img className="element" alt="Element" src={Certified} />
                    <div className="text-wrapper-6">Certified</div>
                </div>
            </div>
            <div className="call-to-action">
                <Link to="#">
                    <Button text="Leave a review" icon={faStar}></Button>
                </Link>
                <div className="state-pressed-with">
                    <Link to="#">
                        <Button text="Save for later" icon={faStar}></Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default BusinessCard;