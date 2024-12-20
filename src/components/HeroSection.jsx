import React from "react";
import { FaMedal, FaPlay, FaStar } from "react-icons/fa";
import { LuArrowUpRight, LuStar } from "react-icons/lu";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { TiFlash } from "react-icons/ti";
import { RiMedalFill } from "react-icons/ri";
import { HeroSectionContent } from "../content/content";

const images = [
  { position: "1", img: "/" },
  { position: "2", img: "/" },
  { position: "3", img: "/" },
  { position: "4", img: "/" },
  { position: "5", img: "/" },
  { position: "6", img: "/" },
  { position: "7", img: "/" },
  { position: "8", img: "/" },
  { position: "9", img: "/" },
  { position: "10", img: "/" },
  { position: "11", img: "/" },
  { position: "12", img: "/" },
];

function HeroSection() {
  return (
    <div className="w-full h-fit max-lg:h-fit flex items-center justify-center flex-col gap-10 max-lg:gap-5 py-10 px-0 max-lg:px-5 text-dark-text">
      {/* texts */}
      <div className="w-full max-lg:w-full h-fit flex flex-col items-center justify-start gap-6 px-16">
        <h1 className="mt-[130px] text-6xl leading-[75px] font-bold tracking-tight text-center w-full">
          {HeroSectionContent.BigTitle}
        </h1>
        <h1 className=" text-lg mt-[15px] max-lg:mt-0 leading-6 font-medium tracking-tight text-center w-full max-w-[500px] opacity-65">
          {HeroSectionContent.SmallDesc}
        </h1>
        <button className="min-w-[130px] h-[42px] bg-main-color text-white font-medium text-sm flex items-center justify-center gap-1 rounded-full">
          Enroll now
        </button>
        <h1 className=" text-sm font-medium tracking-tight text-center w-full max-w-[500px] opacity-45">
          Trained over {HeroSectionContent.count} Students
        </h1>
      </div>
      <div className="w-full min-h-[400px] bg-blue-500 overflow-clip ">
        <div className="w-fit flex items-start justify-center overflow-clip gap-4">
          {/* 1 */}
          <div className="flex flex-col gap-4">
            {images.slice(0, 2).map((image, index) => (
              <div key={index} className="w-full h-fit">
                <img src={image.img} className="h-[200px] min-w-[200px] bg-yellow-400" />
                <span>{image.position}</span>
              </div>
            ))}
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-4">
            {images.slice(2, 4).map((image, index) => (
              <div key={index} className="w-full h-fit">
                <img src={image.img} className="h-[200px] min-w-[200px] bg-yellow-400" />
                <span>{image.position}</span>
              </div>
            ))}
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-4">
            {images.slice(4, 6).map((image, index) => (
              <div key={index} className="w-full h-fit">
                <img src={image.img} className="h-[200px] min-w-[200px] bg-yellow-400" />
                <span>{image.position}</span>
              </div>
            ))}
          </div>
          {/* 4 */}
          <div className="flex flex-col gap-4">
            {images.slice(6, 8).map((image, index) => (
              <div key={index} className="w-full h-fit">
                <img src={image.img} className="h-[200px] min-w-[200px] bg-yellow-400" />
                <span>{image.position}</span>
              </div>
            ))}
          </div>
          {/* 5 */}
          <div className="flex flex-col gap-4">
            {images.slice(8, 10).map((image, index) => (
              <div key={index} className="w-full h-fit">
                <img src={image.img} className="h-[200px] min-w-[200px] bg-yellow-400" />
                <span>{image.position}</span>
              </div>
            ))}
          </div>
          {/* 6 */}
          <div className="flex flex-col gap-4">
            {images.slice(10, 12).map((image, index) => (
              <div key={index} className="w-full h-fit">
                <img src={image.img} className="h-[200px] min-w-[200px] bg-yellow-400" />
                <span>{image.position}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
