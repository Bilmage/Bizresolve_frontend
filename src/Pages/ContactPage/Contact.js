import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactSection } from "../../components/ContactSection/ContactSection";
import { BackToTopButton } from "../../components/BackToTop/BackToTopButton";
import { BizFooter } from '../../components/Footer/BizFooter';

export default function ContactPage() {
  return (
    <>
    <Navigation />
    <ContactSection />
    <ContactForm />
    <BackToTopButton />
    <BizFooter />
    </>
  )
}
