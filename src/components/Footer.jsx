import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full">
      <div className="w-full bg-red-300 flex flex-col items-start justify-between max-md:flex-col mt-[160px] max-md:gap-3 text-dark-text relative max-w-[1700px] mx-auto">
        <div className="w-full h-[300px] px-16 max-lg:px-5 absolute top-[-150px] ">
          <div className="w-full h-full bg-[#b2c3ec8e] ">
            s
          </div>
        </div>
      </div>
      <div className="bg-[#111111] w-full pt-[150px] ">
        <div className="w-full min-h-[300px] flex items-center justify-center flex-col px-16 max-lg:px-5 max-w-[1700px] mx-auto">
          <div className="bg-green-400 w-full h-full flex-1 p-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
