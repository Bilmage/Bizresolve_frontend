import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import FileComplaint from '../../components/FileComplaintsSection/FileComplaint';
import ComplaintProcess from '../../components/ComplaintProcess/ComplaintProcess';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import BottomNav from '../../components/BottomNav/BottomNav';

export default function ComplaintsProcessPage() {
  return (
    <>
    <Navigation />
    <FileComplaint />
    <ComplaintProcess />
    <div class="navigation">
        <span class="next-icon">{<BottomNav />}</span>
      </div>
    <BackToTopButton />
    </>
  )
}
