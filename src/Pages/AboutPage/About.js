import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { AboutHeadlineText } from "../../components/AboutHeadline/AboutHeadlineText";
import { AboutBanner } from "../../components/AboutHeadline/AboutBanner";
import { MissionSection } from "../../components/MissionSection/MissionSection";
import { VisionSection } from "../../components/VisionSection/VisionSection";
import { Header } from '../../components/Header/Header';
import { Services } from "../../components/Services/Services";
import { ContactSection } from "../../components/ContactSection/ContactSection";
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import { BizFooter } from '../../components/Footer/BizFooter';
import Frequents from "../../components/Faqs/Faqs";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AboutHeadlineText />
      <AboutBanner />
      <hr className="mx-n3" />
      <MissionSection />
      <hr className="mx-n3" />
      <VisionSection />
      <hr className="mx-n3" />
      <div>
        <Header mainText="Our" secondaryText="Core Values" />

      </div>
      <Services />
      <ContactSection />
      <div>
        <Header mainText="Frequently" secondaryText="Asked Questions" />

      </div>
      <Frequents />
      <BackToTopButton />
      <BizFooter />
    </>
  );
}
