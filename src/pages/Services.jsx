import React from "react";
import Navbar from "../components/Navbar";
import { FcGraduationCap, FcLineChart } from "react-icons/fc";
import { TiChartLine } from "react-icons/ti";
import { LuChefHat, LuGraduationCap, LuWorkflow } from "react-icons/lu";
import Footer from "../components/Footer";

function Services() {
  return (
    <div className="w-full h-fit text-dark-text">
      <Navbar />
      <div className="w-full h-fit p-16 flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold w-fit text-dark-text/90">Services</h1>
      </div>
      {/* content */}
      <div className="w-full px-16 max-lg:px-5 py-5">
        <h1 className="text-base text-dark-text/70 flex gap-4 text-center flex-col col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          saepe.
        </h1>
        <div className="w-full h-fit grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 mt-7">
          {/* grid */}
          <div className="h-full w-full shadow-md rounded-md ring-1 ring-stone-200 p-5 flex flex-col items-center justify-start">
            <LuGraduationCap className="text-5xl mb-1 text-main-color" />
            <h1 className="text-2xl font-medium text-dark-text/90 text-center ">
              Soft skills courses
            </h1>
            <h1 className="text-base text-dark-text/70 flex gap-4 flex-col col-span-2 text-center mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              saepe.
            </h1>
          </div>
          {/* grid */}
          <div className="h-full w-full shadow-md rounded-md ring-1 ring-stone-200 p-5 flex flex-col items-center justify-start">
            <LuChefHat className="text-5xl mb-1 text-main-color" />
            <h1 className="text-2xl font-medium text-dark-text/90 text-center ">
              Growth Mindset
            </h1>
            <h1 className="text-base text-dark-text/70 flex gap-4 flex-col col-span-2 text-center mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              saepe.
            </h1>
          </div>
          {/* grid */}
          <div className="h-full w-full shadow-md rounded-md ring-1 ring-stone-200 p-5 flex flex-col items-center justify-start">
            <LuWorkflow className="text-5xl mb-1 text-main-color" />
            <h1 className="text-2xl font-medium text-dark-text/90 text-center ">
              Soft skills courses
            </h1>
            <h1 className="text-base text-dark-text/70 flex gap-4 flex-col col-span-2 text-center mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              saepe.
            </h1>
          </div>
          {/* grid */}
          <div className="h-full w-full shadow-md rounded-md ring-1 ring-stone-200 p-5 flex flex-col items-center justify-start">
            <LuGraduationCap className="text-5xl mb-1 text-main-color" />
            <h1 className="text-2xl font-medium text-dark-text/90 text-center ">
              Soft skills courses
            </h1>
            <h1 className="text-base text-dark-text/70 flex gap-4 flex-col col-span-2 text-center mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              saepe.
            </h1>
          </div>
          {/* grid */}
          <div className="h-full w-full shadow-md rounded-md ring-1 ring-stone-200 p-5 flex flex-col items-center justify-start">
            <LuChefHat className="text-5xl mb-1 text-main-color" />
            <h1 className="text-2xl font-medium text-dark-text/90 text-center ">
              Growth Mindset
            </h1>
            <h1 className="text-base text-dark-text/70 flex gap-4 flex-col col-span-2 text-center mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              saepe.
            </h1>
          </div>
          {/* grid */}
          <div className="h-full w-full shadow-md rounded-md ring-1 ring-stone-200 p-5 flex flex-col items-center justify-start">
            <LuWorkflow className="text-5xl mb-1 text-main-color" />
            <h1 className="text-2xl font-medium text-dark-text/90 text-center ">
              Soft skills courses
            </h1>
            <h1 className="text-base text-dark-text/70 flex gap-4 flex-col col-span-2 text-center mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              saepe.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
