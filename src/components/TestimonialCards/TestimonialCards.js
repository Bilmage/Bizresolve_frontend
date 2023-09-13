import React from "react";
import "./testimonial.css";
import ProfilePic from "../../assets/images/Profilepic1.png";



export const TestimonialCards = ({ className }) => {
  return (
    
    <div className="container">
  <div className="row">
    <div className="col-xs-12">
      <div className="card">
        <div className="card-image">
          <a href="#" type="button" className="btn">
            <img
              src="https://farm3.staticflickr.com/2764/4350166105_be2c85cdb5_z_d.jpg"
              alt="user-image"
            />
          </a>
        </div>
        <div className="card-modal">Take a look at my Profile!</div>
        <div className="card-info">
          <div className="name">
            <p>Nunc Lorem Interdum</p>
          </div>
          <div className="social-network">
            <a href="#" className="icon youtube">
              <i className="fa fa-youtube" />
            </a>
            <a href="#" className="icon twitter">
              <i className="fa fa-twitter" />
            </a>
            <a href="#" className="icon facebook">
              <i className="fa fa-facebook" />
            </a>
          </div>
          <hr />
          <div className="content">
            <p>
              <b>Info:</b>
              Praesent faucibus sem tortor, sed imperdiet enim interdum in.
              Etiam feugiat rutrum ex, quis maximus quam commodo eu.
              Pellentesque eget tortor convallis, vestibulum tortor in, lacinia
              diam.
            </p>
            <p>
              <b>Skills:</b> Feugiat, Ipsum, Pellentesque, Maximus
            </p>
            <p>
              <b>Website:</b>{" "}
              <a href="https://codepen.io/jaguilera">www.codepen.io</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
  );
};

export default TestimonialCards;
