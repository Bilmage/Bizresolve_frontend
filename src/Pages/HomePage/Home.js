import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
// import { Banner } from '../../components/Banner';
// import { TextArea } from '../../components/TextArea';
import { BannerTextAreaSection } from "../../components/BannerandTextArea/BannerTextAreaSection";
import { Logos } from "../../components/logo/Logos";
import { ContactSection } from "../../components/ContactSection/ContactSection";
import { BusinessSection } from "../../components/BusinessSection/BusinessSection";
import { IndividualSection } from "../../components/IndividualSection/IndividualSection";
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import { BizFooter } from "../../components/Footer/BizFooter";
import { Header } from '../../components/Header/Header';
import "../../style.css";
import Testimony from "../../components/Testimony/Testimony";

export default function Home() {
  return (
    <>
      <Navigation />
      <BannerTextAreaSection />
      <Logos />
      <ContactSection />
      <div>
        <Header mainText="Empowering Individuals and " secondaryText="Businesses" />

      </div> 
      <BusinessSection />
      <br />
      <IndividualSection />
      <div>
        <Header mainText="Featured" secondaryText="Reviews" />

      </div> 
      <Testimony />
      <BackToTopButton />
      <BizFooter />
    </>
  );
}
