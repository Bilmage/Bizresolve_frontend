import React from "react";
import "./testimonial.css";
import ProfilePic from "../../assets/images/Profilepic1.png";

const testimonialData = [
  {
    name: "John Doe",
    role: "UX/UI Designer",
    quote: "Bizresolve gave my business the credibility it needed to attract new customers and retain existing ones.",
  },
  {
    name: "John Doe",
    role: "UX/UI Designer",
    quote: "Bizresolve gave my business the credibility it needed to attract new customers and retain existing ones.",
  },
  {
    name: "John Doe",
    role: "UX/UI Designer",
    quote: "Bizresolve gave my business the credibility it needed to attract new customers and retain existing ones.",
  },
];

export const TestimonialCards = ({ className }) => {
  return (
    <div className="container">
    <div className={`testimonial-cards ${className}`}>
      {testimonialData.map((testimonial, index) => (
        <div className={`testimonial`} key={index}>
          <div className="profile">
            <img className="image" alt="Img" src={ProfilePic} />
            <div className="title">
              <div className="div-wrapper">
                <div className="text-wrapper">{testimonial.name}</div>
              </div>
              <div className="div-wrapper">
                <div className="div">{testimonial.role}</div>
              </div>
            </div>
          </div>
          <div className="description">
            <p className="p">{testimonial.quote}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TestimonialCards;
