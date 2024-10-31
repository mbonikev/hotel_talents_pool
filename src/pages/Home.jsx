import React from "react";
import Navbar from "../components/Navbar";
import { bannerVideo } from "../assets";
import HeroSection from "../components/HeroSection";
import Numbers from "../components/Numbers";
import FewCourses from "../components/FewCourses";

function Home() {
  const courses = [
  {
    
  }
  ]
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <Numbers />
      <FewCourses />
    </div>
  );
}

export default Home;
