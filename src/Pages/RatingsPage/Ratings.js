import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import RateMessage from '../../components/RateMessage/RateMessage'
import TextAreaField from '../../components/TextAreaField/TextArea';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import { BizFooter } from '../../components/Footer/BizFooter';


export default function RatingsPage() {
  return (
    <>
    
    <Navigation />
    <div className='container'>
    <RateMessage />
    <TextAreaField />
    </div>
    <BackToTopButton />
    <BizFooter />
    
    </>
  )
}
