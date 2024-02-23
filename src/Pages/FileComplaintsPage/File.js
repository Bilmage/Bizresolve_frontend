import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { BusinessText } from '../../components/BusinessTextSection/BusinessText';
import { Header } from '../../components/Header/Header';
import { FileComplaintForm } from '../../components/FileComplaintForm/FileComplaintForm';
import { BackToTopButton } from "../../components/back-to-top-button/BackToTopButton";
import { BizFooter } from '../../components/footer/BizFooter';

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
