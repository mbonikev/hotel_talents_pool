import React from "react";
import Navbar from "../components/Navbar";
import { bannerVideo } from "../assets";
import HeroSection from "../components/HeroSection";
import Numbers from "../components/Numbers";
import FewCourses from "../components/FewCourses";
import Queries from "../components/Queries";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Trainers from "../components/Trainers";

function Home() {
  return (
    <div className="w-full h-fit bg-body-color">
      <Navbar />
      <HeroSection />
      <FewCourses />
      <Trainers />
      <Queries />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
