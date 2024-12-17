import React from "react";
import { FaMedal, FaPlay, FaStar } from "react-icons/fa";
import { LuArrowUpRight, LuStar } from "react-icons/lu";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { TiFlash } from "react-icons/ti";
import { RiMedalFill } from "react-icons/ri";
import { HeroSectionContent } from "../content/content";

function HeroSection() {
  return (
    <div className="w-full h-fit max-lg:h-fit flex items-center justify-center flex-col gap-10 max-lg:gap-5 py-10 px-16 max-lg:px-5 text-dark-text">
      {/* left */}
      <div className="w-1/2 max-lg:w-full h-fit flex flex-col items-center justify-center gap-5 min-h-[600px]">
        <h1 className="font-Poppins text-4xl leading-[45px] font-semibold tracking-tight text-center max-w-[600px] mx-auto">
          {HeroSectionContent.BigTitle}
        </h1>
        {/* <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-3 w-full h-fit">
          <div className="flex flex-col gap-3 w-full">
            <h1>{HeroSectionContent.miniSectionTitle}</h1>
            <div className="bg-card-bg w-full h-full flex flex-col gap-2.5 p-4 rounded-2xl">
              {HeroSectionContent.popularCourses.map((course, index) => (
                <Link
                  to={course.link}
                  key={index}
                  className="flex items-center gap-4 w-fit hover:bg-main-color/10 py-1 px-2 rounded-lg "
                >
                  <span className="text-main-color">0{index+1}</span>
                  <span>{course.name}</span>
                  <span>
                    <LuArrowUpRight className="text-xl text-main-color" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full h-full">
            <div className="bg-main-color text-white w-full h-full flex flex-col gap-2.5 p-6 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHdb4-6C8nWbyXb4v5ZRRING0GRxIpdoJ8LAWeciuxejHSDCo3Gi4bnQfvlAYry4A-gA&usqp=CAU"
                  className="w-[40px] aspect-square rounded-full ring-2 ring-white"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHdb4-6C8nWbyXb4v5ZRRING0GRxIpdoJ8LAWeciuxejHSDCo3Gi4bnQfvlAYry4A-gA&usqp=CAU"
                  className="w-[40px] ml-[-8px] aspect-square rounded-full ring-2 ring-white"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHdb4-6C8nWbyXb4v5ZRRING0GRxIpdoJ8LAWeciuxejHSDCo3Gi4bnQfvlAYry4A-gA&usqp=CAU"
                  className="w-[40px] ml-[-8px] aspect-square rounded-full ring-2 ring-white"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHdb4-6C8nWbyXb4v5ZRRING0GRxIpdoJ8LAWeciuxejHSDCo3Gi4bnQfvlAYry4A-gA&usqp=CAU"
                  className="w-[40px] ml-[-8px] aspect-square rounded-full ring-2 ring-white"
                />
              </div>
              <div className="flex flex-col w-full mt-2">
                <h1>We have Trained over</h1>
                <h1 className="flex items-center gap-2 text-3xl font-semibold">
                  1,242+
                  <span className="bg-white text-main-color h-[35px] aspect-square rounded-full flex items-center justify-center text-lg">
                    <FaStar />
                  </span>
                </h1>
                <h1>People</h1>
                <Link
                  className="text-sm w-fit bg-white text-main-color py-2 px-5 rounded-full mt-3 font-medium"
                  to="/"
                >
                  Enroll now
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>

    </div>
  );
}

export default HeroSection;
