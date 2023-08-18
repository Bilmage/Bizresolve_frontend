import React from "react";
import "./documents.css";
import Approval from "../../assets/icons/Approval.png";

export const Services = ({ className }) => {
  const servicesData = [
    {
      image: Approval,
      alt: "Approval",      
      description: "Your business license (Required)",
    },
    {
      image: Approval,
      alt: "Approval",      
      description: "Your business plan",
    },
    {
      image: Approval,
      alt: "Approval",      
      description: "Any required professional licenses for your industry",
    },
    {
        image: Approval,
        alt: "Approval",      
        description: "Any tax identification numbers specific to your business's service area",
      },
  ];

  return (
    <div className={`container services ${className}`} style={{alignItems: "center"}}>
      <div className="row">
        {servicesData.map((service, index) => (
          <div key={index} className="col-lg-6 col-md-6">
            <div className="div">
              <img className="shield-check" alt={service.alt} src={Approval} />              
              <p className="p">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Services;
