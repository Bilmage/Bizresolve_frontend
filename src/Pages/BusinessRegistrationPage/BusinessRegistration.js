import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import ApplicationBanner from '../../components/ApplicationBanner/ApplicationBanner';
import ApplicationForm from '../../components/ApplicationForm/AccreditationForm';
import  BackToTopButton from '../../components/BackToTop/BackToTopButton';
import BizFooter from '../../components/Footer/BizFooter';

export default function BusinessRegistrationPage() {
  return (
    <>
    
    <Navigation/>
    <ApplicationBanner />
    <ApplicationForm />
    <BackToTopButton />
    <BizFooter/>

    </>
  )
}
