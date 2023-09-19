import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import SearchBar from '../../components/SearchMenu/SearchBar'
import TestimonialCards from '../../components/TestimonialCards/TestimonialCards'
import SearchText from '../../components/SearchText/SearchText';
import { BizFooter } from "../../components/Footer/BizFooter";

import Popular from '../../components/Popular/Popular'
import CustomBreadcrumbs from '../../components/Breadcrumbs/BreadCrumbs';
import Features from '../../components/Features/Features';




export default function SearchAccreditedPage() {
  return (
    <>
    <Navigation />
    <SearchBar />
     <CustomBreadcrumbs />
     <Features />    
    <TestimonialCards />   
    <SearchText searchText="All Businesses" />
    <Popular businessName="Safaricom" isNew={true} showDescription={true} />
    <Popular businessName="Zuku" isNew={true} showDescription={true} />
   
     
    <BizFooter />
    
    </>
  )
}
