import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import BusinessList from '../../components/BusinessCard/BusinessCard'
import SearchBar from '../../components/SearchMenu/SearchBar'
import TestimonialCards from '../../components/TestimonialCards/TestimonialCards'
import ImgMediaCard from '../../components/TopSearch/TopSearch'
// import Popular from '../../components/Popular/Popular'

export default function SearchAccreditedPage() {
  return (
    <>
    <Navigation />
    <SearchBar />
    
    <ImgMediaCard />
    {/* <Popular /> */}
    <TestimonialCards />
    <BusinessList />
    </>
  )
}
