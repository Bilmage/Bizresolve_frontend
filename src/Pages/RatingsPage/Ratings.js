import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import { BizFooter } from '../../components/Footer/BizFooter';
import RatingAndComment from '../../components/Ratings/RatingAndComment';


export default function RatingsPage() {
  return (
    <>
    
    <Navigation />
    <HeaderBanner />    
    <RatingAndComment />  
    <BackToTopButton />
    <BizFooter />
    
    </>
  )
}
