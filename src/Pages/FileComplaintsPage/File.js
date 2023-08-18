import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import BusinessText from '../../components/BusinessTextSection/BusinessText';
import FileComplaintForm from '../../components/FileComplaintForm/FileComplaintForm';
import { BizFooter } from '../../components/Footer/BizFooter';

export default function FileComplaintsPage() {
  return (
    <>
    <Navigation />
    <BusinessText />
    <FileComplaintForm />
    <BizFooter />

    </>
  )
}
