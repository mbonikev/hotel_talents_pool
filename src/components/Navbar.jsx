import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState();
  return (
    <div className="w-full flex items-center justify-between px-5 py-2.5 text-dark-text bg-white max-lg:sticky top-0 max-lg:z-30">
      {/* logo */}
      <div className="">
        <img src="./logo2.jpeg" className="h-16 min-w-fit" />
      </div>
      {/* links */}
      <div
        className={`flex items-center justify-center gap-1.5 
        ${showMenu ? "flex max-lg:flex-col max-lg:bg-white max-lg:p-5 max-lg:gap-4 max-lg:items-start max-lg:justify-start max-lg:fixed top-0 left-0 max-lg:w-full max-lg:h-svh max-lg:z-30 max-lg:overflow-y-auto"
          : "max-lg:hidden"}
        `}
      >
        <div className="w-full flex items-center justify-end pt-1">
          <button
            onClick={() => setShowMenu(false)}
            className="text-lg bg-main-color text-white h-[35px] w-auto aspect-square items-center justify-center rounded-full hidden max-lg:flex"
          >
            <LuX />
          </button>
        </div>
        <Link className="text-sm hover:text-main-color whitespace-nowrap px-1.5" to="/">
          Home
        </Link>
        <Link className="text-sm hover:text-main-color whitespace-nowrap px-1.5" to="/">
          About
        </Link>
        <Link className="text-sm hover:text-main-color whitespace-nowrap px-1.5" to="/courses">
          Courses
        </Link>
        <Link className="text-sm hover:text-main-color whitespace-nowrap px-1.5" to="/">
          Centers
        </Link>
        <Link className="text-sm hover:text-main-color whitespace-nowrap px-1.5" to="/">
          Services
        </Link>
        <Link className="text-sm hover:text-main-color whitespace-nowrap px-1.5" to="/">
          Partners
        </Link>
        <Link className="text-sm hover:text-main-color whitespace-nowrap px-1.5" to="/">
          Contacts
        </Link>
        <Link className="text-sm hover:text-main-color whitespace-nowrap px-1.5" to="/">
          Hire Graduate
        </Link>
        <Link className="text-sm text-main-color px-1.5 hidden max-lg:flex" to="/">
          Register
        </Link>
      </div>
      <div className="flex items-center justify-end gap-1.5">
        <Link
          className="text-sm bg-main-color text-white py-2.5 px-5 rounded-full max-lg:hidden"
          to="/"
        >
          Register
        </Link>
        <button
          onClick={() => setShowMenu(true)}
          className="text-lg bg-main-color text-white h-[35px] w-auto aspect-square items-center justify-center rounded-full hidden max-lg:flex"
        >
          <LuMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
