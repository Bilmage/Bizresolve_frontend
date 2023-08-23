import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import EligibilityHeader from '../../components/EligibilityHeader/EligibilityHeader';
import Accredited from '../../components/AccreditedQuestions/Accreditedrequirements';


export default function EligibilityPage() {
  return (
    <>
    <Navigation />
    <br /><br />
    <EligibilityHeader />
    <Accredited/>
    </>
  )
}
