import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slide1 from "../../assets/images/ImproveCustomerSatisfactionPage.png";
import Slide2 from "../../assets/images/ResolveComplaintsEfficientlyPage.png";
import Slide3 from "../../assets/images/GainOperationalExcellencePage.png";
import './landing.css';

const imageData = [
    {
        label: "Image 1",
        alt: "image1",
        imgSrc: Slide1
    },
    {
        label: "Image 2",
        alt: "image2",
        imgSrc: Slide2
    },
    {
        label: "Image 3",
        alt: "image3",
        imgSrc: Slide3
    },
];

const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.imgSrc} alt={image.alt} />
        {/* <p className="legend">{image.label}</p> */}
    </div>
));

export const Slides = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 

    function handleChange(index) {
        setCurrentIndex(index);
    }

    return (
        <div className='container-fluid'>
        <div className="App">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true} 
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
            >
                {renderSlides}
            </Carousel>
        </div>
        </div>
    );
}

export default Slides;
