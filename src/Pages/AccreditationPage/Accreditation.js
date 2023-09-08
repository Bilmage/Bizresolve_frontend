import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import  { Accreditation1 } from '../../components/AccreditationSection1/Accreditation1';
import Accredititation2 from '../../components/AccreditationSection2/Accreditation2';
import ApplicationContent from '../../components/ApplicationContent/ApplicationContent';
import AccreditationDocuments from '../../components/AccreditationDocuments/AccreditationDocuments';
import AdditionalMessage from '../../components/AdditionalMessage/AdditionalMessage';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import BottomNav from '../../components/BottomNav/BottomNav';


export default function AccreditationPage() {
  return (
    <>
    <Navigation />
    <Accreditation1 />
    <Accredititation2 />
    <ApplicationContent />
    <AccreditationDocuments />
    <AdditionalMessage />
    <BackToTopButton />    
    <div >
        <BottomNav backPath="/" nextPath="/applicationprocess" />
      </div>
    </>
  )
}
