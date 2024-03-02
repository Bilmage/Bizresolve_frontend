import React from "react";
import Navigation from "../../components/Navigation/Navigation";
// import BusinessList from '../../components/BusinessCard/BusinessCard'
import SearchBar from "../../components/SearchMenu/SearchBar";
import TestimonialCards from "../../components/TestimonialCards/TestimonialCards";
import SearchText from "../../components/SearchText/SearchText";
// import ImgMediaCard from '../../components/TopSearch/TopSearch'
import { BizFooter } from "../../components/Footer/BizFooter";

import Popular from "../../components/Popular/Popular";
import { useGetAllBusinessesQuery } from "../../app/services";
import { useAuth } from "../../hooks";

export default function SearchAccreditedPage() {
  const { data: businesses }= useGetAllBusinessesQuery()
  const auth = useAuth()
  // console.log("Auth", auth)
  console.log("Businesses", businesses)
  return (
    <>
      <Navigation />
      <SearchBar />
      <SearchText searchText="Trending Searches" />
      <TestimonialCards />
      {/* <ImgMediaCard /> */}
      <SearchText searchText="Featured posts" />
      {businesses.map((business, index)=>(
        <Popular key={index} businessName={business.businessName} isNew={true} showDescription={true} />
      ))}
      <BizFooter />
    </>
  );
}
