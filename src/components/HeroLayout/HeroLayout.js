import React from "react";
import Button from '../Button/Button';
import Action from "../../assets/images/Action.png";
import './hero.css';

export const HeroLayout = ({ hero }) => {
  return (
    <div className="container">
    <div className="hero-layout" style={hero}>
      <div className="left">
        <div className="headline">
          <h1 className="get-ready-to-be">Get Ready To Be Accredited</h1>
        </div>
        <div className="paragraph">
          <p className="here-s-the-low-down">
            Here’s the low-down on what you need to get accredited. Click on the button to learn more.
          </p>
        </div>
        <div >
          <Button />
        </div>
       
      </div>
      <div className="right">
        <img className="image" alt="img" src={Action} />
      </div>
    </div>
    </div>
  );
};
export default HeroLayout;