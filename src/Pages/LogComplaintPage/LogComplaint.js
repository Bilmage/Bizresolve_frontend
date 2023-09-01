import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import FileComplaint from '../../components/FileComplaintsSection/FileComplaint';
import ComplaintProcess from '../../components/ComplaintProcess/ComplaintProcess';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";

export default function ComplaintsProcessPage() {
  return (
    <>
    <Navigation />
    <FileComplaint />
    <ComplaintProcess />
    <BackToTopButton />
    </>
  )
}
