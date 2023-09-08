import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import TestimonialCards from '../../components/TestimonialCards/TestimonialCards';
import { Header } from '../../components/Header/Header';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import { BizFooter } from '../../components/Footer/BizFooter';

export default function FeaturedReviewsPage() {
  return (
    <>
    <Navigation /> 
    <div>
        <Header mainText="Featured" secondaryText="Reviews" />

      </div>   
    <TestimonialCards />
    <BackToTopButton />
    <BizFooter />
    </>
  )
}
