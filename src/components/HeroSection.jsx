import React from "react";
import { FaMedal, FaPlay, FaStar } from "react-icons/fa";
import { LuArrowUpRight, LuStar } from "react-icons/lu";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { TiFlash } from "react-icons/ti";
import { RiMedalFill } from "react-icons/ri";
import { HeroSectionContent } from "../content/content";
import { formUrl } from "../content/enrollForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "./LazyImage";
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
  { position: "13", img: "/" },
  { position: "14", img: "/" },
  // { position: "15", img: "/" },
  // { position: "16", img: "/" },
];

// Map imported images to the `img` field in the `images` array
const updatedImages = images.map((image, index) => ({
  ...image,
  img: imagePaths[index] || "/", // Use '/' as fallback if there are fewer images
}));

const imageStyle = `h-fit min-h-full w-full bg-stone-100 border-none outline-none shadow-xl object-cover brightness-90 saturate-[.8] `;

function HeroSection() {
  return (
    <div className="w-full h-fit max-lg:h-fit flex items-center justify-center flex-col py-10 px-0  text-dark-text">
      {/* texts */}
      <div className="mt-[80px] max-lg:mt-10 mb-[60px] max-lg:mb-10 w-full max-lg:w-full h-fit flex flex-col items-center justify-start gap-6 max-md:gap-4 max-md:items-start px-16 max-lg:px-5">
        <h1 className=" text-6xl leading-[75px] font-bold max-sm:text-4xl max-md:text-left max-md:pr-10 tracking-tight text-center w-full">
          {HeroSectionContent.BigTitle}
        </h1>
        <h1 className=" text-lg max-lg:mt-0 leading-6 font-medium max-md:text-left max-md:pr-10 tracking-tight text-center w-full max-w-[500px]">
          {HeroSectionContent.SmallDesc}
        </h1>
        <Link
          to={formUrl}
          target="_blank"
          className="min-w-[130px] h-[42px] bg-main-color transition active:scale-90 text-white font-medium text-sm flex items-center justify-center gap-1 rounded-full"
        >
          Enroll now
        </Link>
        <h1 className=" text-sm font-normal tracking-tight text-center  max-md:text-left w-full max-w-[500px] opacity-70">
          Trained over {HeroSectionContent.count} Students
        </h1>
      </div>
      <div className="w-full min-h-[400px] max-h-[820px] overflow-y-clip flex items-start justify-start flex-col relative">
        <div className="w-full h-fit columns-6 max-xl:columns-5 max-lg:columns-3 max-md:columns-2 space-y-2 px-5 gap-2">
          {updatedImages.map((image, index) => (
            <div
              key={index}
              className="h-auto w-full overflow-hidden rounded-2xl"
            >
              <LazyImage image={image.img} />
              {/* <img src={image.img} className={`${imageStyle}`} /> */}
              {/* <span>{image.position}</span> */}
            </div>
          ))}
        </div>
      </div>
      {/* white shadow */}
      <div className=" w-full h-[170px] border-t bg-body-color flex items-center justify-center gap-20 max-md:gap-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e4/National_Bank_of_Rwanda_logo.png"
          className="h-[60px] max-md:h-[35px] saturate-0 opacity-70"
        />
        <img
          src="https://seeklogo.com/images/E/Equity_Bank-logo-88F49E17E2-seeklogo.com.png"
          className="h-[60px] max-md:h-[35px] saturate-0 opacity-70 py-[5px]"
        />
        <img
          src="https://www.mineduc.gov.rw/index.php?eID=dumpFile&t=f&f=435&token=795108a09af0455f218944c43b044c38ca9da5ac"
          className="h-[60px] max-md:h-[35px] saturate-0 opacity-70 py-[5px]"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4kbc2fdM1LZgPP7T1i7SAp-MpJg2AFcU7A&s"
          className="h-[60px] max-md:h-[35px] saturate-0 opacity-70 py-[5px]"
        />
      </div>
    </div>
  );
}

export default HeroSection;
