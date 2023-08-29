import React from 'react';
import { Slides } from '../../components/Carousel/Carousel';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
// import BottomNav from '../../components/BottomNav/BottomNav';
// import Navigation from '../../components/Navigation/Navigation';

export default function LandingPage () {
    return (
      <>
        
          {/* <Navigation/> */}          
          <Slides />
          <BackToTopButton />   
               
          {/* <BottomNav/> */}
          
        </>
      );
    };

