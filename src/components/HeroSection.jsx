import React from "react";
import { FaMedal, FaPlay, FaStar } from "react-icons/fa";
import { LuArrowUpRight, LuStar } from "react-icons/lu";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { TiFlash } from "react-icons/ti";
import { RiMedalFill } from "react-icons/ri";

function HeroSection() {
  return (
    <div className="w-full h-[600px] flex items-center justify-center gap-10 py-10 px-16 text-dark-text">
      {/* left */}
      <div className="w-1/2 h-fit flex flex-col gap-5">
        <h1 className="font-Poppins text-5xl leading-[60px] font-semibold tracking-tight">
          Your Ultimate Food And Cooking Training
        </h1>
        <div className="grid grid-cols-2 gap-3 w-full h-fit">
          <div className="flex flex-col gap-3 w-full">
            <h1>Popular Courses</h1>
            <div className="bg-card-bg w-full h-full flex flex-col gap-2.5 p-4 rounded-2xl">
              <Link
                to="/"
                className="flex items-center gap-4 w-fit hover:bg-main-color/10 py-1 px-2 rounded-lg "
              >
                <span className="text-main-color">01</span>
                <span>Barista training</span>
                <span>
                  <LuArrowUpRight className="text-xl text-main-color" />
                </span>
              </Link>
              <div className="w-full h-[1px] bg-blue-200/50"></div>
              <Link
                to="/"
                className="flex items-center gap-4 w-fit hover:bg-main-color/10 py-1 px-2 rounded-lg "
              >
                <span className="text-main-color">02</span>
                <span>Business Leadership training</span>
                <span>
                  <LuArrowUpRight className="text-xl text-main-color" />
                </span>
              </Link>
              <div className="w-full h-[1px] bg-blue-200/50"></div>
              <Link
                to="/"
                className="flex items-center gap-4 w-fit hover:bg-main-color/10 py-1 px-2 rounded-lg "
              >
                <span className="text-main-color">03</span>
                <span>Bakery Training</span>
                <span>
                  <LuArrowUpRight className="text-xl text-main-color" />
                </span>
              </Link>
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
                  className="w-[40px] ml-[-13px] aspect-square rounded-full ring-2 ring-white"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHdb4-6C8nWbyXb4v5ZRRING0GRxIpdoJ8LAWeciuxejHSDCo3Gi4bnQfvlAYry4A-gA&usqp=CAU"
                  className="w-[40px] ml-[-13px] aspect-square rounded-full ring-2 ring-white"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHdb4-6C8nWbyXb4v5ZRRING0GRxIpdoJ8LAWeciuxejHSDCo3Gi4bnQfvlAYry4A-gA&usqp=CAU"
                  className="w-[40px] ml-[-13px] aspect-square rounded-full ring-2 ring-white"
                />
              </div>
              <div className="flex flex-col w-full mt-2">
                <h1>Trained over</h1>
                <h1 className="flex items-center gap-2 text-3xl font-semibold">
                  3,434+
                  <span className="bg-white text-main-color h-[35px] aspect-square rounded-full flex items-center justify-center text-lg">
                    <FaStar />
                  </span>
                </h1>
                <h1>Students</h1>
                <Link
                  className="text-sm w-fit bg-white text-main-color py-2 px-5 rounded-full mt-3 font-medium"
                  to="/"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-1/2 h-full flex outline-none select-none">
        <div className="w-full h-full bg-card-bg rounded-2xl flex p-4 gap-4">
          <div className="w-1/2 h-full rounded-xl overflow-hidden relative">
            <Link
              to="/"
              className="flex items-center gap-1 text-xs absolute bottom-3 left-3 z-20 bg-white hover:scale-105 transition py-2 px-4 font-medium rounded-full"
            >
              View Staff
              <LuArrowUpRight className="text-sm" />
            </Link>
            <Carousel
              autoplay="true"
              dotPosition="top"
              draggable="true"
              pauseOnHover="false"
            >
              <div className="w-full h-[500px] max-h-[100%]">
                <div className="w-full h-full flex items-center justify-center select-none">
                  <img
                    src="https://img.freepik.com/premium-photo/female-chef-photography-portrait-kitchen_1028292-463.jpg"
                    className="w-full min-h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full h-[500px] max-h-[100%]">
                <div className="w-full h-full flex items-center justify-center select-none">
                  <img
                    src="https://img.freepik.com/premium-photo/photo-portrait-female-chef_787705-531.jpg"
                    className="w-full min-h-full object-cover"
                  />
                </div>
              </div>
            </Carousel>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-4">
            <div className="w-full h-1/2 flex flex-col gap-4">
              <div className="w-full h-1/2 flex flex-col gap-2 bg-white p-3 rounded-2xl">
                <div className="w-full flex items-center justify-start gap-2">
                  <div className="bg-main-color text-white text-2xl flex items-center justify-center h-9 w-auto aspect-square rounded-full ">
                    <TiFlash />
                  </div>
                  <h1 className="font-medium">Get Skills Faster</h1>
                </div>
                <h1 className="text-sm line-clamp-2">
                  it's fast and effective, get your trainings in style
                </h1>
              </div>
              <div className="w-full h-1/2 flex flex-col gap-2 bg-white p-3 rounded-2xl">
                <div className="w-full flex items-center justify-start gap-2">
                  <div className="bg-main-color text-white text-2xl flex items-center justify-center h-9 w-auto aspect-square rounded-full ">
                    <RiMedalFill />
                  </div>
                  <h1 className="font-medium">Culinary Experts</h1>
                </div>
                <h1 className="text-sm line-clamp-2">
                  You'll get to meet Experts who have experiences and skills you need
                </h1>
              </div>
            </div>
            <div className="w-full h-1/2 select-none relative">
              <img
                src="https://img.freepik.com/premium-photo/female-chef-cutting-tomatos-when-cooking-salad-hotel-kitchen_274689-45301.jpg"
                className="h-full w-full object-cover rounded-2xl select-none"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl flex items-center justify-center z-10 bg-black/10">
                <button className="h-12 text-lg transition hover:scale-105 active:scale-95 aspect-square bg-white rounded-full flex items-center justify-center text-main-color">
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
