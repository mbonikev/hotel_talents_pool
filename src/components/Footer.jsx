import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-body-color py-5 px-16 max-lg:px-5 pt-10 max-lg:pt-0 flex flex-col items-start justify-between max-md:flex-col max-md:gap-3 text-dark-text">
      <div className="bg-[#111111] w-full min-h-[200px]"></div>
    </div>
  );
}

export default Footer;
