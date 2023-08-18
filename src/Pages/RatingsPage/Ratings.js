import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import RateMessage from '../../components/RateMessage/RateMessage'
import TextAreaField from '../../components/TextAreaField/TextArea';
import { BizFooter } from '../../components/Footer/BizFooter';


export default function RatingsPage() {
  return (
    <>
    <Navigation />
    <RateMessage />
    <TextAreaField />
    <BizFooter />
    </>
  )
}
