import React from 'react';
import AccreditedNavBar from "../../components/AccreditedNavbar/AccreditedNavbar";
import SearchBar from "../../components/SearchMenu/SearchBar";
import SearchText from "../../components/SearchText/SearchText";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import { BizFooter } from '../../components/Footer/BizFooter';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import "../../components/SearchMenu/search.css";

export default function SearchAccreditedPage() {
  return (
    <>
    <AccreditedNavBar />
    <Breadcrumbs />          
    <SearchBar />
    <SearchText />    
    <BusinessCard />
    <BackToTopButton />    
    <BizFooter />
    </>
  )
}
