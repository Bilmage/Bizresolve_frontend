import React from "react";
import "./testimonial.css";

export const TestimonialImages = ({ className }) => {
    return (
        <div className={`testimonial-images ${className}`}>
            <div className="frame">
                <img className="image" alt="Img" src="image.png" />
            </div>
            <div className="frame">
                <img className="image" alt="Img" src="image-2.png" />
            </div>
            <div className="frame">
                <img className="image" alt="Img" src="image-3.png" />
            </div>
            <div className="frame">
                <img className="image" alt="Img" src="image-4.png" />
            </div>
            <div className="frame">
                <img className="image" alt="Img" src="image-5.png" />
            </div>
        </div>
    );
};
export default TestimonialImages;