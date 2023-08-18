import React from 'react';
import AccreditedNavBar from "../../components/AccreditedNavbar/AccreditedNavbar";
import SearchMenu from "../../components/SearchMenu/SearchMenu";
import { BizFooter } from '../../components/Footer/BizFooter';

export default function SearchAccreditedPage() {
  return (
    <>
    <AccreditedNavBar />
    <SearchMenu />    
    <BizFooter />
    </>
  )
}
