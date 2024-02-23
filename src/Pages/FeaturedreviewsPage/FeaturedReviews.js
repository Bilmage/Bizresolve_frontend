import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel';
import TestimonialCards from '../../components/TestimonialCards/TestimonialCards';
import { BackToTopButton } from "../../components/back-to-top-button/BackToTopButton";
import { BizFooter } from '../../components/footer/BizFooter';

export default function FeaturedReviewsPage() {
  return (
    <>
    <Navigation />
    <TestimonialCarousel />
    <TestimonialCards />
    <BackToTopButton />
    <BizFooter />
    </>
  )
}
