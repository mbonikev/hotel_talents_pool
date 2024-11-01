import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full py-5 px-16 max-lg:px-5 border-t flex items-start justify-between max-md:flex-col max-md:gap-3">
      <div className="flex-1 flex flex-col max-w-[600px]">
        <h1 className="text-sm font-medium">&copy; 2024 Hotel Talents Pool, All rights reserved</h1>
        <p className="text-xs text-dark-text/70">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
          necessitatibus! Dolore
        </p>
      </div>
      <div className="flex items-center justify-start gap-1">
      <Link className="h-8 w-8 aspect-square rounded-full bg-main-color text-white flex items-center justify-center" to="/">
          <LuMail />
        </Link>
        <Link className="h-8 w-8 aspect-square rounded-full bg-main-color text-white flex items-center justify-center" to="/">
          <FaFacebook />
        </Link>
        <Link className="h-8 w-8 aspect-square rounded-full bg-main-color text-white flex items-center justify-center" to="/">
          <FaInstagram />
        </Link>
        <Link className="h-8 w-8 aspect-square rounded-full bg-main-color text-white flex items-center justify-center" to="/">
          <FaTwitter />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
