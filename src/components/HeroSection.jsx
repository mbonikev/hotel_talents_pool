import React from "react";
import { FaMedal, FaPlay, FaStar } from "react-icons/fa";
import { LuArrowUpRight, LuStar } from "react-icons/lu";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { TiFlash } from "react-icons/ti";
import { RiMedalFill } from "react-icons/ri";
import { HeroSectionContent } from "../content/content";

// Import images
const allImages = import.meta.glob("/public/images/Hero/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

// Convert imported images to an array of paths
const imagePaths = Object.values(allImages).map((image) => image.default);

// Assuming you want to map these images sequentially to the `images` array:
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

// Map imported images to the `img` field in the `images` array
const updatedImages = images.map((image, index) => ({
  ...image,
  img: imagePaths[index] || "/", // Use '/' as fallback if there are fewer images
}));

const imageStyle = `h-fit min-h-full w-full bg-stone-100 border-none outline-none shadow-xl object-cover brightness-90 saturate-[.8] `;

function HeroSection() {
  return (
    <div className="w-full h-fit max-lg:h-fit flex items-center justify-center flex-col gap-10 max-lg:gap-5 py-10 px-0  text-dark-text">
      {/* texts */}
      <div className="mt-[90px] mb-[40px] w-full max-lg:w-full h-fit flex flex-col items-center justify-start gap-6 px-16 max-lg:px-5">
        <h1 className=" text-6xl leading-[75px] font-bold tracking-tight text-center w-full">
          {HeroSectionContent.BigTitle}
        </h1>
        <h1 className=" text-lg max-lg:mt-0 leading-6 font-medium tracking-tight text-center w-full max-w-[500px] opacity-65">
          {HeroSectionContent.SmallDesc}
        </h1>
        <button className="min-w-[130px] h-[42px] bg-main-color text-white font-medium text-sm flex items-center justify-center gap-1 rounded-full">
          Enroll now
        </button>
        <h1 className=" text-sm font-medium tracking-tight text-center w-full max-w-[500px] opacity-45">
          Trained over {HeroSectionContent.count} Students
        </h1>
      </div>
      <div className="w-full min-h-[400px] overflow-x-clip flex items-start justify-center relative">
        <div className="w-fit h-fit flex items-start justify-center overflow-x-clip gap-4">
          {/* 1 */}
          <div className="flex flex-col gap-4 translate-y-[-80px]">
            {updatedImages.slice(0, 2).map((image, index) => (
              <div key={index} className="h-[320px] w-[240px] overflow-hidden rounded-2xl">
                <img src={image.img} className={`${imageStyle}`} />
                {/* <span>{image.position}</span> */}
              </div>
            ))}
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-4 translate-y-[-130px]">
            {updatedImages.slice(2, 4).map((image, index) => (
              <div key={index} className="h-[320px] w-[240px] overflow-hidden rounded-2xl">
                <img src={image.img} className={`${imageStyle}`} />
                {/* <span>{image.position}</span> */}
              </div>
            ))}
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-4">
            {updatedImages.slice(4, 6).map((image, index) => (
              <div key={index} className="h-[320px] w-[240px] overflow-hidden rounded-2xl">
                <img src={image.img} className={`${imageStyle}`} />
                {/* <span>{image.position}</span> */}
              </div>
            ))}
          </div>
          {/* 4 */}
          <div className="flex flex-col gap-4">
            {updatedImages.slice(6, 8).map((image, index) => (
              <div key={index} className="h-[320px] w-[240px] overflow-hidden rounded-2xl">
                <img src={image.img} className={`${imageStyle}`} />
                {/* <span>{image.position}</span> */}
              </div>
            ))}
          </div>
          {/* 5 */}
          <div className="flex flex-col gap-4 translate-y-[-130px]">
            {updatedImages.slice(8, 10).map((image, index) => (
              <div key={index} className="h-[320px] w-[240px] overflow-hidden rounded-2xl">
                <img src={image.img} className={`${imageStyle}`} />
                {/* <span>{image.position}</span> */}
              </div>
            ))}
          </div>
          {/* 6 */}
          <div className="flex flex-col gap-4 translate-y-[-80px]">
            {updatedImages.slice(10, 12).map((image, index) => (
              <div key={index} className="h-[320px] w-[240px] overflow-hidden rounded-2xl">
                <img src={image.img} className={`${imageStyle}`} />
                {/* <span>{image.position}</span> */}
              </div>
            ))}
          </div>
        </div>
        {/* white shadow */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
}

export default HeroSection;
