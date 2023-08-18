import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel';
import TestimonialCards from '../../components/TestimonialCards/TestimonialCards';
import { BizFooter } from '../../components/Footer/BizFooter';

export default function FeaturedReviewsPage() {
  return (
    <>
    <Navigation />
    <TestimonialCarousel />
    <TestimonialCards />
    <BizFooter />
    </>
  )
}
