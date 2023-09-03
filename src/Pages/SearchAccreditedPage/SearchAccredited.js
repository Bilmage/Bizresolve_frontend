import React from 'react';
// import AccreditedNavBar from "../../components/AccreditedNavbar/AccreditedNavbar";
import SearchBar from "../../components/SearchMenu/SearchBar";
import SearchText from "../../components/SearchText/SearchText";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import { BizFooter } from '../../components/Footer/BizFooter';
import CustomBreadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import "../../components/SearchMenu/search.css";
import Businesses from '../../components/AllBusinesses/business';
import { Navigation } from '../../';

export default function SearchAccreditedPage() {
  return (
    <>
    <Navigation/>
    <CustomBreadcrumbs />          
    <SearchBar />
    <SearchText />
    <Businesses/>    
    <BusinessCard />
    <BackToTopButton />    
    <BizFooter />
    </>
  )
}
