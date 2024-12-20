import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-start justify-between max-md:flex-col mt-[160px] max-md:gap-3 text-dark-text relative max-w-[1700px] mx-auto">
        <div className="w-full h-[300px] px-16 max-lg:px-5 absolute top-[-150px] ">
          <div className="w-full h-full bg-[#b2c3ec] rounded-[35px] p-10 flex items-start justify-between">
            <div className="w-full flex-1">
              <h1 className="text-4xl leading-[45px] tracking-tight pb-3 font-extrabold w-fit text-[#111111]">
                Apply today and <br /> kick start your hospitality <br /> Career
              </h1>
            </div>
            <div className="w-[200px] min-w-fit flex flex-col justify-between items-end">
              <h1 className="text-sm font-medium text-[#111111]">
                Hotel Talents Pool
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] w-full pt-[150px] ">
        <div className="w-full min-h-[200px] flex items-center justify-center flex-col px-16 max-lg:px-5 max-w-[1700px] mx-auto">
          <div className=" w-full h-full flex-1 p-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
