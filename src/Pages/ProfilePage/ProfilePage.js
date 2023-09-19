import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import SearchBar from '../../components/SearchMenu/SearchBar'
import CustomBreadcrumbs from '../../components/Breadcrumbs/BreadCrumbs'
import { BizFooter } from "../../components/Footer/BizFooter";
import ProfileBanner from '../../components/ProfileBanner/ProfileBanner';
import TabPanel from "../../components/Tabs/Tabs";


export default function ProfilePage() {
  return (
    <>
    <Navigation />
    <SearchBar />
     <CustomBreadcrumbs />
     <ProfileBanner /> 
     <TabPanel />
     <BizFooter />
    </>
  )
}
