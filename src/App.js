import React from "react";
import "./App.css";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import { RatingsRedirectPage, SignInPage } from "./components";
import SearchAccreditedPage from "./Pages/SearchAccreditedPage/SearchAccredited";
import PrivateOutlet from "./utils/privateOutlet";
import {
  HomePage,
  RegistrationPage,
  AboutPage,
  ContactPage,
  FileComplaintsPage,
  RatingsPage,
  EligibilityPage,
  ApplicationsPage,
  BusinessRegistrationPage,
  AccreditationPage,
  FeaturedReviewsPage,
  LogComplaintsPage,
  LandingPage,
} from "./Pages";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Registration" element={<RegistrationPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/landing" element={<LandingPage />} />
        {/* Protected routes */}
        {/* <Route element={<PrivateOutlet />}> */}
          <Route path="/filecomplaints" element={<FileComplaintsPage />} />
          <Route path="/ratings" element={<RatingsPage />} />
          <Route path="/ratingsredirect" element={<RatingsRedirectPage />} />
          <Route path="/logcomplaint" element={<LogComplaintsPage />} />
          <Route path="/eligibilityprocess" element={<EligibilityPage />} />
          <Route path="/applicationprocess" element={<ApplicationsPage />} />
          <Route path="/businessregistration" element={<BusinessRegistrationPage />} />
          <Route path="/accreditationprocess" element={<AccreditationPage />} />
          <Route path="/featuredreviews" element={<FeaturedReviewsPage />} />
          <Route path="/search" element={<SearchAccreditedPage />} />
          
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
