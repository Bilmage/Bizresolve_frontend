import React from 'react';
import AccreditedNavBar from "../../components/AccreditedNavbar/AccreditedNavbar";
import SearchBar from "../../components/SearchMenu/SearchBar";
import SearchText from "../../components/SearchText/SearchText";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import { BizFooter } from '../../components/Footer/BizFooter';
import CustomBreadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import "../../components/SearchMenu/search.css";
import MyBusiness from '../../components/MyBusinesses/MyBusiness';
export default function DashboardPage() {
  return (
    <>
    <AccreditedNavBar />
    <CustomBreadcrumbs />          
    <SearchBar />
    <SearchText />
    
    <MyBusiness />    
    <BusinessCard />
    <BackToTopButton />    
    <BizFooter />
    </>
  )
}
