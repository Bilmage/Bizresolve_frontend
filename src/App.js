import React from "react";
import "./App.css";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import { RatingsRedirectPage, SignInPage } from "./components";
// import PrivateOutlet from "./utils/privateOutlet";
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
  MyBusinessPage,
  FeaturedReviewsPage,
  LogComplaintsPage,
  Forgot,
  LandingPage,
  DashboardPage,
  BusinessProfilePage,
  SearchAccreditedPage,
} from "./Pages";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Registration" element={<RegistrationPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/forgotpassword" element={<Forgot />} />
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
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/my-business" element={<MyBusinessPage />} />
          <Route path="/business-profile" element={<BusinessProfilePage />} />
          
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
