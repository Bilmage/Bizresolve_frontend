import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./business.css";

import BusinessLogo from "../../assets/images/Safaricom.png";
import CertifiedIcon from "../../assets/icons/Certified.png";
import HeartIcon from "../../assets/icons/Heart.svg";

const businessData = [
  {
    name: "Safaricom",
    type: "Business",
    imageSrc: BusinessLogo,
    description:
      "It is the largest telecommunications provider in Kenya, and one of the most profitable companies in the East and Central Africa region.",
    location: "Nairobi, Westlands",
    isNew: true,
    isCertified: true,
    rating: 4,
  },
  // Add more business entries if needed
];

const BusinessCard = ({ business }) => {
  return (
    <div className="container">
      <div className="business-card">
        <div className="liked">
          <div className="user-liked">
            <div className="ratings">
              {Array.from({ length: business.rating }).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="star-icon" style={{ color: '#F78431' }}/>
              ))}
              <div className="text-wrapper">{business.rating} of 5</div>
            </div>
          </div>
        </div>
        <div className="body">
          <img className="image" alt="Img" src={business.imageSrc} />
          <div className="frame">
            <div className="div">
              <div className="text-wrapper-2">{business.name}</div>
              <div className="text-wrapper-3">{business.type}</div>
              {business.isNew && (
                <div className="new">
                  <img className="heart" alt="Heart" src={HeartIcon} />
                  <div className="text-wrapper-4">New</div>
                </div>
              )}
            </div>
            <div className="description">
              <p className="p">{business.description}</p>
            </div>
            <div className="div">
              <div className="text-wrapper-5">{business.location}</div>
            </div>
          </div>
        </div>
        {business.isCertified && (
          <div className="certified">
            <div className="certified-logo">
              <img className="element" alt="Element" src={CertifiedIcon} />
              <div className="text-wrapper-6">Certified</div>
            </div>
          </div>
        )}
        <div className="call-to-action">
          <Link to="/ratings">
            <Button text="Leave a review" icon={faStar} size="small" ></Button>
          </Link>
          <Link to="#">
            <Button text="View profile" icon={faBookmark} size="small" disabled={true} ></Button>
          </Link>
        </div>
      </div>
      </div>
    
  );
};

const BusinessList = () => {
  return (
    <div className="business-list-container"> {/* Add the "container" class to wrap the list */}
      {businessData.map((business, index) => (
        <BusinessCard key={index} business={business} />
      ))}
    </div>
    
  );
};

export default BusinessList;
