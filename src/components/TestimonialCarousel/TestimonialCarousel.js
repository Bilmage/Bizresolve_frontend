import React from "react";
import "./testimonial.css";
import ProfilePic from "../../assets/images/Profilepic1.png";

export const TestimonialCarousel = ({ className }) => {
  const testimonials = [
    {
      image: ProfilePic,
      text: "“Bizresolve gave my business the credibility it needed to attract new customers and retain existing ones.”",
    },
  ];

  return (
    <div>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={`testimonial-carousel ${className}`}>
          <img className="image" alt="Img" src={testimonial.image} />
          <div className="description">
            <p className="text-wrapper">
              <hr />
              {testimonial.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;
