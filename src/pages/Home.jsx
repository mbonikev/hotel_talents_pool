import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Numbers from "../components/Numbers";
import FewCourses from "../components/FewCourses";
import Queries from "../components/Queries";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Trainers from "../components/Trainers";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div className="w-full h-fit bg-body-color">
      <Helmet>
        <title>Hotel Talents Pool</title>
        <meta
          name="description"
          content="Hotel Talents Pool helps you find the best talent for your hospitality business."
        />
        <meta
          name="keywords"
          content="hospitality, recruitment, hotel talent, staffing"
        />
        <meta property="og:title" content="Hotel Talent Pool" />
        <meta
          property="og:description"
          content="Find skilled professionals for your hotel business."
        />
      </Helmet>
      <Navbar />
      <HeroSection />
      <FewCourses />
      {/* <Trainers /> */}
      <Queries />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
