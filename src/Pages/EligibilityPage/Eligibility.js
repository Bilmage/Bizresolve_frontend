import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import EligibilityHeader from '../../components/EligibilityHeader/EligibilityHeader';
import Accredited from '../../components/AccreditedQuestions/Accreditedrequirements';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import BottomNav from '../../components/BottomNav/BottomNav';


export default function EligibilityPage() {
  return (
    <>
    <Navigation />
    <br /><br />
    <EligibilityHeader />
    <Accredited/>
    <div >
        <BottomNav backPath="/" nextPath="/accreditationprocess" />
      </div>
    <BackToTopButton />
    </>
  )
}
