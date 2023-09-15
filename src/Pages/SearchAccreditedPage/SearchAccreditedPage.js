import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
// import BusinessList from '../../components/BusinessCard/BusinessCard'
import SearchBar from '../../components/SearchMenu/SearchBar'
import TestimonialCards from '../../components/TestimonialCards/TestimonialCards'
import SearchText from '../../components/SearchText/SearchText';
// import ImgMediaCard from '../../components/TopSearch/TopSearch'
import { BizFooter } from "../../components/Footer/BizFooter";

import Popular from '../../components/Popular/Popular'

export default function SearchAccreditedPage() {
  return (
    <>
    <Navigation />
    <SearchBar />
    <SearchText searchText="Trending Searches" />
    <TestimonialCards />
    
    {/* <ImgMediaCard /> */}
    <SearchText searchText="Featured posts" />
    <Popular businessName="Safaricom" isNew={true} showDescription={true} />
    <Popular businessName="Zuku" isNew={true} showDescription={true} />
    
    {/* <BusinessList /> */}
    <BizFooter />
    
    </>
  )
}
