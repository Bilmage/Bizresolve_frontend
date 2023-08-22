import React from 'react';
import AccreditedNavBar from "../../components/AccreditedNavbar/AccreditedNavbar";
import SearchBar from "../../components/SearchMenu/SearchBar";
import SearchText from "../../components/SearchText/SearchText";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import { BizFooter } from '../../components/Footer/BizFooter';
import "../../components/SearchMenu/search.css";

export default function SearchAccreditedPage() {
  return (
    <>
    <AccreditedNavBar />          
    <SearchBar />
    <SearchText />
    <BusinessCard />    
    <BizFooter />
    </>
  )
}
