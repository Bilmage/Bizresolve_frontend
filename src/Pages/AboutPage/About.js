import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { AboutHeadlineText } from "../../components/AboutHeadline/AboutHeadlineText";
import { AboutBanner } from "../../components/AboutBanner/AboutBanner";
import { MissionSection } from "../../components/MissionSection/MissionSection";
import { VisionSection } from "../../components/VisionSection/VisionSection";
import { Masthead } from "../../components/Headline/Masthead";
import { Services } from "../../components/Services/Services";
import { ContactSection } from "../../components/ContactSection/ContactSection";
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import { BizFooter } from '../../components/Footer/BizFooter';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AboutHeadlineText />
      <AboutBanner />
      {/* <hr className="mx-n3" /> */}
      <MissionSection />
      <hr className="mx-n3" />
      <VisionSection />
      <hr className="mx-n3" />
      <Masthead />
      <Services />
      <ContactSection />
      <BackToTopButton />
      <BizFooter />
    </>
  );
}
