import React from "react";
import "./testimonial.css";
// import ProfilePic from "../../assets/images/Profilepic1.png";

export const TestimonialCarousel = ({ className, testimonials }) => {
  return (
    <>
      <h2>Top Reviews this week!</h2>
      <ul className="timeline">
        {testimonials.map((testimonial, index) => (
          <li key={index} className={index % 2 === 0 ? "" : "timeline-inverted"}>
            <div className="timeline-badge">
              <a>
                <i className={`fa fa-circle ${index % 2 === 0 ? "" : "invert"}`} id="" />
              </a>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Timeline Event</h4>
              </div>
              <div className="timeline-body">
                <p>{testimonial.text}</p>
              </div>
              <div className="timeline-footer">
                <p className="text-right">{testimonial.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TestimonialCarousel;
