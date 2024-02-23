import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import ApplicationBanner from '../../components/ApplicationBanner/ApplicationBanner';
import BusinessRegistration from '../../components/BusinessRegistrationForm/BusinessRegistration';
import  BackToTopButton from '../../components/back-to-top-button/BackToTopButton';
import BizFooter from '../../components/footer/BizFooter';

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
