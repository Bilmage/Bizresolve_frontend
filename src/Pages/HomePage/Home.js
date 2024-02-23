import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { BannerTextAreaSection } from "../../components/landingsection/BannerTextAreaSection";
import { Logos } from "../../components/logos/Logos";
import { ContactSection } from "../../components/ContactSection/ContactSection";
import { Masthead } from "../../components/Headline/Masthead";
import { BusinessSection } from "../../components/businesssection/BusinessSection";
import { IndividualSection } from "../../components/individualsection/IndividualSection";
import { BackToTopButton } from "../../components/back-to-top-button/BackToTopButton";
import { BizFooter } from "../../components/footer/BizFooter";
import "../../style.css";

export default function Home() {
  return (
    <>
      <Navigation />
      <BannerTextAreaSection />
      <Logos />
      <ContactSection />
      <Masthead />
      <BusinessSection />
      <br />
      <IndividualSection />
      <BackToTopButton />
      <BizFooter />
    </>
  );
}
