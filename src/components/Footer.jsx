import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-body-color flex flex-col items-start pt-[200px] justify-between max-md:flex-col max-md:gap-3 text-dark-text">
      <div className="bg-[#111111] w-full min-h-[300px] px-16 max-lg:px-5">
        <div className="bg-green-400 w-full min-h-full p-5"></div>
      </div>
    </div>
  );
}

export default Footer;
