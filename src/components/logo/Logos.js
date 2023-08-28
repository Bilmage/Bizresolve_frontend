import React, { useEffect, useState } from "react";
import airbnbLogo from "../../assets/images/Airbnb.png";
import dropboxLogo from "../../assets/images/Dropbox logo.png";
import stripeLogo from "../../assets/images/Stripe.png";
import microsoftLogo from "../../assets/images/Microsoft logo.png";
import "./logo.css";

const logos = [
  { id: 1, src: airbnbLogo },
  { id: 2, src: dropboxLogo },
  { id: 3, src: stripeLogo },
  { id: 4, src: microsoftLogo },
];

export const Logos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000); // Adjust the interval duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="logos">
        {logos.map((logo, index) => (
          <div
            key={logo.id}
            className={`logo ${currentIndex === index ? "active" : ""}`}
          >
            <img className="img" alt={`Logo ${index}`} src={logo.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
