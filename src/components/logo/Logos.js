import React from "react";
import airbnbLogo from "../../assets/images/Airbnb.png";
import dropboxLogo from "../../assets/images/Dropbox logo.png";
import stripeLogo from "../../assets/images/Stripe.png";
import microsoftLogo from "../../assets/images/Microsoft logo.png";
import "./logo.css";

export const Logos = () => {
  return (
    <div className="container-fluid">
      <div className="logos">
        <div className="airbnb">
          <div className="airbnb-wrapper">
            <img className="img" alt="Airbnb" src={airbnbLogo} />
          </div>
        </div>
        <div className="dropbox">
          <div className="element-dropbox-logo-wrapper">
            <img
              className="element-dropbox-logo"
              alt="Element dropbox logo"
              src={dropboxLogo}
            />
          </div>
        </div>
        <div className="stripe">
          <div className="stripe-wrapper">
            <img className="stripe-2" alt="Stripe" src={stripeLogo} />
          </div>
        </div>
        <div className="microsoft">
          <div className="microsoft-logo-wrapper">
            <img
              className="microsoft-logo"
              alt="Microsoft logo"
              src={microsoftLogo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
