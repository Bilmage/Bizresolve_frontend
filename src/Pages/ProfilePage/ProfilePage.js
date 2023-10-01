import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Contact from "../../components/Contact/Contact";
import { BizFooter } from "../../components/Footer/BizFooter";
import ProfileBanner from '../../components/ProfileBanner/ProfileBanner';
import Features from '../../components/Features/Features';
import Maps from '../../components/Maps/Maps';



export default function ProfilePage() {
  return (
    <>
    <Navigation />   
    <Features />      
     <ProfileBanner />
     <Contact />
     <Maps />     
     <BizFooter />
    </>
  )
}
