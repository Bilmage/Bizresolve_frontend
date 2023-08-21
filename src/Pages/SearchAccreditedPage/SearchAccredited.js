import React from 'react';
import AccreditedNavBar from "../../components/AccreditedNavbar/AccreditedNavbar";
import SearchBar from "../../components/SearchMenu/SearchBar";
import SearchCounty from "../../components/SearchMenu/SearchCounty"
import { BizFooter } from '../../components/Footer/BizFooter';
import "../../components/SearchMenu/search.css";

export default function SearchAccreditedPage() {
  return (
    <>
    <AccreditedNavBar />          
    <SearchBar />
    <SearchCounty />     
    <BizFooter />
    </>
  )
}
