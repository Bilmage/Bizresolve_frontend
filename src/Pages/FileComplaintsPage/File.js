import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { BusinessText } from '../../components/BusinessTextSection/BusinessText';
import { Header } from '../../components/Header/Header';
import { FileComplaintForm } from '../../components/FileComplaintForm/FileComplaintForm';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import { BizFooter } from '../../components/Footer/BizFooter';

export default function FileComplaintsPage() {
  return (
    <>
      <Navigation />
      <div>
        <Header mainText="File a" secondaryText="complaint" />

      </div>
      <BusinessText />

      <FileComplaintForm />
      <BackToTopButton />
      <BizFooter />

    </>
  )
}
