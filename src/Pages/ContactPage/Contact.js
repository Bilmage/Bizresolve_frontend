import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactSection } from "../../components/ContactSection/ContactSection";
import { BackToTopButton } from "../../components/back-to-top-button/BackToTopButton";
import { BizFooter } from '../../components/footer/BizFooter';

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
