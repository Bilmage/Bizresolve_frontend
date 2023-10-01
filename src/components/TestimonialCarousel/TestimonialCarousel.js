import React from "react";
import "./testimonial.css";
import { Link } from "react-router-dom";


export const TestimonialCarousel = ({ className, testimonials }) => {
  return (
    <>
      <h2>Top Reviews this week!</h2>
      <ul className="timeline">
        {testimonials.map((testimonial, index) => (
          <li key={index} className={index % 2 === 0 ? "" : "timeline-inverted"}>
            <div className="timeline-badge">
              <Link to="#">
                <i className={`fa fa-circle ${index % 2 === 0 ? "" : "invert"}`} id="" />
              </Link>
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
