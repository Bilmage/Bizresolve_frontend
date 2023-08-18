import React from "react";
import "./services.css";
import Shield from '../../assets/images/ShieldCheck.svg';

export const Services = ({ className }) => {
  const servicesData = [
    {
      image: "shield-check.svg",
      alt: "Shield check",
      title: "Customer-Centricity",
      description: "We prioritize the needs and satisfaction of our customers in all aspects of our work.",
    },
    {
      image: "image.svg",
      alt: "Shield check",
      title: "Integrity",
      description: "We are committed to honesty, transparency, and ethical business practices.",
    },
    {
      image: "shield-check-2.svg",
      alt: "Shield check",
      title: "Collaboration",
      description: "We work collaboratively with our clients, partners, and stakeholders to achieve common goals.",
    },
    {
        image: "shield-check.svg",
        alt: "Shield check",
        title: "Sustainability",
        description: "Ensure regulatory compliance and effective complaint management with Bizresolve's expert assistance.",
      },
      {
        image: "shield-check.svg",
        alt: "Shield check",
        title: "Professionalism",
        description: "We conduct ourselves with professionalism and strive for excellence in all that we do.",
      },
      {
        image: "shield-check.svg",
        alt: "Shield check",
        title: "Innovation",
        description: "We embrace creativity and innovation to continuously improve our services and stay ahead of the curve.",
      },
      {
        image: "shield-check.svg",
        alt: "Shield check",
        title: "Accountability",
        description: "We take responsibility for our actions and are accountable to our clients, partners, and stakeholders.",
        
      },
  ];

  return (
    <div className={`container services ${className}`} style={{alignItems: "center"}}>
      <div className="row">
        {servicesData.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="div">
              <img className="shield-check" alt={service.alt} src={Shield} />
              <div className="text-wrapper">{service.title}</div>
              <p className="p">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Services;
