import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full">
      <div className="w-full bg-body-color flex flex-col items-start justify-between max-md:flex-col mt-[160px] max-md:gap-3 text-dark-text relative max-w-[1000px] mx-auto">
        <div className="w-full h-[300px] px-16 max-lg:px-5 absolute top-[-150px] ">
          <div className="w-full h-full bg-[#b2c3ec8e] "></div>
        </div>
      </div>
      <div className="bg-[#111111] w-full min-h-[300px] flex items-center justify-center flex-col pt-[150px] px-16 max-lg:px-5">
          <div className="bg-green-400 w-full h-full flex-1 p-5"></div>
        </div>
    </div>
  );
}

export default Footer;
