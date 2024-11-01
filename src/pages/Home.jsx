import React from "react";
import Navbar from "../components/Navbar";
import { bannerVideo } from "../assets";
import HeroSection from "../components/HeroSection";
import Numbers from "../components/Numbers";
import FewCourses from "../components/FewCourses";
import Queries from "../components/Queries";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  const courses = [
  {
    
  }
  ]
  return (
    <div className="w-full h-fit">
      <Navbar />
      <HeroSection />
      <Numbers />
      <FewCourses />
      <Queries />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
