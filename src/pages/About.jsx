import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full h-fit ">
      <Navbar />
      <div className="w-full h-fit p-16 flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold w-fit text-dark-text/90">About</h1>
      </div>
      {/* Content */}
      <div className="w-full h-fit grid grid-cols-3 max-lg:grid-cols-1 mt-10 gap-10 max-lg:gap-2 pb-16 px-16 max-lg:px-5">
        <h1 className="text-4xl max-lg:text-2xl font-bold text-dark-text/90 ">
          Who we are?
        </h1>
        <h1 className="text-base text-dark-text/70 flex gap-4 flex-col col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          saepe. Repellat similique sequi veritatis totam voluptates, aliquam
          perferendis ipsum illum ab deleniti laborum voluptatem facilis saepe
          nam corporis laboriosam? Adipisci? We offer diverse courses, Choose
          yours and let's get to work in no time
        </h1>
      </div>  
      <div className="w-full h-fit grid grid-cols-3 max-lg:grid-cols-1 gap-10 max-lg:gap-2 pb-16 px-16 max-lg:px-5">
        <h1 className="text-4xl max-lg:text-2xl font-bold text-dark-text/90 ">
          Who we are?
        </h1>
        <h1 className="text-base text-dark-text/70 flex gap-4 flex-col col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          saepe. Repellat similique sequi veritatis totam voluptates, aliquam
          perferendis ipsum illum ab deleniti laborum voluptatem facilis saepe
          nam corporis laboriosam? Adipisci? We offer diverse courses, Choose
          yours and let's get to work in no time
        </h1>
      </div>
      <div className="w-full h-fit grid grid-cols-3 max-lg:grid-cols-1 gap-10 max-lg:gap-2 pb-16 px-16 max-lg:px-5">
        <h1 className="text-4xl max-lg:text-2xl font-bold text-dark-text/90 ">
          Who we are?
        </h1>
        <h1 className="text-base text-dark-text/70 flex gap-4 flex-col col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          saepe. Repellat similique sequi veritatis totam voluptates, aliquam
          perferendis ipsum illum ab deleniti laborum voluptatem facilis saepe
          nam corporis laboriosam? Adipisci? We offer diverse courses, Choose
          yours and let's get to work in no time
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default About;
