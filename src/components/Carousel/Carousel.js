import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slide1 from "../../assets/images/TMT.png";

export const Slides = () => {
    return (
        <Carousel>
            <div>
                <img src={Slide1} alt="Slide 1" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={Slide1} alt="Slide 2" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={Slide1} alt="Slide 3" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Slides;
