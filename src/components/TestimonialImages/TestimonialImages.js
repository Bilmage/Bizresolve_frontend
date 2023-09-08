import React from "react";
import "./testimonial.css";
import Profile1 from "../../assets/images/Profilepic1.png";
import Profile2 from "../../assets/images/Profilepic2.png";

const profileImages = [Profile1, Profile2, Profile1, Profile2, Profile1];

export const TestimonialImages = ({ className }) => {
    return (
        <div className={`testimonial-images ${className}`}>
            {profileImages.map((profileImage, index) => (
                <div key={index} className="frame">
                    <img className="image" alt="Img" src={profileImage} />
                </div>
            ))}
        </div>
    );
};

export default TestimonialImages;
