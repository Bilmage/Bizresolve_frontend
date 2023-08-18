import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
// import { Banner } from '../../components/Banner';
// import { TextArea } from '../../components/TextArea';
import { BannerTextAreaSection } from '../../components/BannerandTextArea/BannerTextAreaSection';
import { Logos } from '../../components/logo/Logos';
import { ContactSection } from '../../components/ContactSection/ContactSection';
import { Masthead } from '../../components/Headline/Masthead';
import { BusinessSection } from '../../components/BusinessSection/BusinessSection';
import { IndividualSection } from '../../components/IndividualSection/IndividualSection';
import { BizFooter } from '../../components/Footer/BizFooter';
import '../../style.css';


export default function Home() {
  return (
<>
<Navigation />
<BannerTextAreaSection />
<Logos />
<ContactSection />
<Masthead />
<BusinessSection />
<IndividualSection />
<BizFooter />

</>
    
  )
}
