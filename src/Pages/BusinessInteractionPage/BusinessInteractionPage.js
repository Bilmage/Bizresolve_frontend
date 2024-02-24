import React from 'react';
import { Navigation } from "../../components/Navigation/Navigation";
import { BizFooter } from '../../components/Footer/BizFooter';
import { BusinessInteraction } from  '../../components/BusinessInteraction/BusinessInteraction';

export default function BusinessInteractionPage() {
  return (
    <>
     <Navigation />
     <BusinessInteraction />
     <BizFooter />
    </>
  )
}
