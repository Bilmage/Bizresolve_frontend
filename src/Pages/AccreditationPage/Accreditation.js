import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import  { Accreditation1 } from '../../components/AccreditationDocuments/Accreditation1';
import Accredititation2 from '../../components/AccreditationDocuments/Accreditation2';
import ApplicationContent from '../../components/AccreditationDocuments/Accreditation2';
import AccreditationDocuments from '../../components/AccreditationDocuments/AccreditationDocuments';
import AdditionalMessage from '../../components/AccreditationDocuments/AdditionalMessage';
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
