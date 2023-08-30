import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ApplicationForm from '../../components/ApplicationForm/ApplicationForm';
import BizFooter from "../../components/Footer/BizFooter";
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import ApplicationBanner from '../../components/ApplicationBanner/ApplicationBanner';

export default function ApplicationsPage() {
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
