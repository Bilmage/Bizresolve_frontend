import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import ApplicationBanner from '../../components/ApplicationBanner/ApplicationBanner';
import BusinessRegistration from '../../components/BusinessRegistrationForm/BusinessRegistration';
import  BackToTopButton from '../../components/BackToTop/BackToTopButton';
import BizFooter from '../../components/Footer/BizFooter';

export default function BusinessRegistrationPage() {
  return (
    <>
    
    <Navigation/>
    <ApplicationBanner />
    <BusinessRegistration />
    <BackToTopButton />
    <BizFooter/>

    </>
  )
}
