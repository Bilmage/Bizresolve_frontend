import React from "react";
import { FaUsers, FaComments, FaStar } from 'react-icons/fa';
import "./features.css";

const featuresData = [
  {
    title: "Users",
    count: "11 345",
    icon: <FaUsers size={24} color="white" />,
    bgColor: "#63ccca",
  },
  {
    title: "Comments",
    count: "12 456",
    icon: <FaComments size={24} color="white" />,
    bgColor: "#42858c",
  },
  {
    title: "Ratings",
    count: "10 456",
    icon: <FaStar size={24} color="white" />,
    bgColor: "#f78431",
  },
];

const Features = ({ className }) => {
  return (
    <div className="container">
      <div className={`features ${className}`}>
        {featuresData.map((feature, index) => (
          <div className="widget" key={index} style={{ backgroundColor: feature.bgColor }}>
            <div className="head">
              <div className="pages">{feature.title}</div>
            </div>
            <div className="text-wrapper">{feature.count}</div>
            <div className="footer">{feature.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
