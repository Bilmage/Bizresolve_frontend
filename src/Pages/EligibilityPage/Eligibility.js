import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import EligibilityHeader from '../../components/EligibilityHeader/EligibilityHeader';
import Accredited from '../../components/AccreditedQuestions/Accreditedrequirements';
import { BackToTopButton } from "../../components/back-to-top-button/BackToTopButton";


export default function EligibilityPage() {
  return (
    <>
    <Navigation />
    <br /><br />
    <EligibilityHeader />
    <Accredited/>
    <BackToTopButton />
    </>
  )
}
