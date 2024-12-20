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
      {/* texts */}
      <div className="w-full max-lg:w-full h-fit flex flex-col items-center justify-start gap-6 min-h-[500px]">
        <h1 className="mt-[130px] text-6xl leading-[45px] font-bold tracking-tight text-center w-full">
          {HeroSectionContent.BigTitle}
        </h1>
        <h1 className=" text-lg mt-[15px] leading-6 font-medium tracking-tight text-center w-full max-w-[500px] opacity-65">
          {HeroSectionContent.SmallDesc}
        </h1>
        <button className="min-w-[130px] h-[42px] bg-main-color text-white font-medium text-sm flex items-center justify-center gap-1 rounded-full">
          Enroll now
        </button>
        <h1 className=" text-sm font-medium tracking-tight text-center w-full max-w-[500px] opacity-45">
          Trained over {HeroSectionContent.count} Students
        </h1>
      </div>

    </div>
  );
}

export default HeroSection;
