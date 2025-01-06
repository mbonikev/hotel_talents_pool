import { useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import ScrollToTop from "./components/ScrollTop";
import About from "./pages/About";
import Centers from "./pages/Centers";
import CenterDetails from "./pages/CenterDetails";
import Contacts from "./pages/Contacts";
import HireGraduate from "./pages/HireGraduate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Graduates from "./pages/Graduates";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/centers" element={<Centers />} />
          <Route
            path="/center-details/:center_name"
            element={<CenterDetails />}
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/hireGraduate" element={<HireGraduate />} />
          <Route path="/graduates" element={<Graduates />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
