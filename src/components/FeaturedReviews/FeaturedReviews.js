import React from "react";
// import { NavigationMoreVert } from "./NavigationMoreVert";
import { TestimonialImages } from "../../components/TestimonialImages/TestimonialImages";
import Profile1 from "../../assets/images/Profilepic1.png";
import Profile2 from "../../assets/images/Profilepic2.png";
import "./featured.css";




export const FeaturedReviews = ({ className }) => {
    return (
        <div className="container">
        <div className={`featured-reviews ${className}`}>
            <div className="head">
                <div className="user-stat">Featured reviews</div>
               
                <TestimonialImages />
            </div>
            <div className="content">
                <div className="testimonial-cards">
                    <div className="testimonial">
                        <div className="profile">
                            <img className="image-5" alt="Img" src={Profile1 }/>
                            <div className="title">
                                <div className="name">
                                    <div className="text-wrapper">John doe</div>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <p className="div">
                                “Bizresolve gave my business the credibility it needed to attract new customers and retain existing
                                ones.”
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-2">
                        <div className="profile">
                            <img className="image-5" alt="Img" src={Profile2} />
                            <div className="title">
                                <div className="name">
                                    <div className="text-wrapper">John doe</div>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <p className="div">
                                “Bizresolve gave my business the credibility it needed to attract new customers and retain existing
                                ones.”
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-3">
                        <div className="profile">
                            <img className="image-5" alt="Img" src={Profile2} />
                            <div className="title">
                                <div className="name">
                                    <div className="text-wrapper">John doe</div>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <p className="div">
                                “Bizresolve gave my business the credibility it needed to attract new customers and retain existing
                                ones.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
export default FeaturedReviews;