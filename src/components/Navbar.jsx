import React, { useEffect, useState } from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";
import { Link, useLocation, useParams } from "react-router-dom";
import { Centers } from "../content/content";
import { formUrl } from "../content/enrollForm";

function Navbar({setLoading}) {
  const [showMenu, setShowMenu] = useState();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLinkClick = () => {
    setLoading(true)
    setDropdownVisible(false); // Close the dropdown when a link is clicked
  };

  return (
    <div className="w-full flex items-center justify-between px-5 py-2.5 text-dark-text bg-body-color sticky top-0 z-30 max-w-[1700px] mx-auto">
      {/* logo */}
      <Link to="/" className="w-[120px] max-w-[120px] flex justify-center overflow-hidden">
        <img src="./logo.png" className="h-9 w-[120px] block object-contain" />
      </Link>
      {/* links */}
      <div
        className={`flex items-center justify-center gap-1.5 
        ${
          showMenu
            ? "flex max-lg:flex-col max-lg:bg-white max-lg:p-5 max-lg:gap-4 max-lg:items-start max-lg:justify-start max-lg:fixed top-0 left-0 max-lg:w-full max-lg:h-svh max-lg:z-30 max-lg:overflow-y-auto"
            : "max-lg:hidden"
        }
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
        <Link
          className="text-sm hover:text-main-color whitespace-nowrap px-1.5"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-sm hover:text-main-color whitespace-nowrap px-1.5"
          to="/courses"
        >
          Courses
        </Link>
        <div
          className="text-sm hover:text-main-color whitespace-nowrap px-1.5 cursor-default group flex max-lg:flex-col max-lg:items-start items-center gap-1 py-4 max-lg:py-0 relative"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          Centers
          <LuChevronDown
            className="text-sm mt-[2px] max-lg:hidden"
            onClick={handleDropdownToggle}
          />
          <div
            className={`bg-white lg:shadow-xl rounded-xl lg:ring-1 ring-stone-200/70 max-lg:mt-2 lg:absolute top-[90%] left-0 p-1.5 w-fit lg:min-w-[180px] max-lg:w-full h-fit flex flex-col transition-all ${
              isDropdownVisible
                ? "lg:opacity-100 lg:translate-y-0"
                : "lg:opacity-0 lg:translate-y-[-5px] lg:pointer-events-none"
            }`}
          >
            {Centers.map((center, index) => (
              <Link
                to={`/center-details/${center.name}`}
                key={index}
                className="text-black text-sm py-1 px-2 hover:bg-stone-200/50 hover:text-main-color rounded-lg flex items-center gap-1 max-lg:w-full"
                onClick={handleLinkClick}
              >
                <span className="text-main-color mr-1 hidden max-lg:flex">&bull; </span>
                {center.name}
              </Link>
            ))}
          </div>
        </div>
        <Link
          className="text-sm hover:text-main-color whitespace-nowrap px-1.5"
          to="/about"
        >
          About us
        </Link>
        <Link
          className="text-sm hover:text-main-color whitespace-nowrap px-1.5"
          to="/contacts"
        >
          Contact
        </Link>
        <Link
          className="text-sm hover:text-main-color whitespace-nowrap px-1.5"
          to="/"
        >
          Hire Graduate
        </Link>
        <Link
          className="text-sm text-main-color px-1.5 hidden max-lg:flex"
          to="/"
        >
          Register
        </Link>
      </div>
      <div className="flex items-center justify-end gap-1.5">
        <Link
          className="text-sm bg-main-color transition active:scale-90 text-white py-2.5 px-5 rounded-full max-lg:hidden"
          target="_blank"
          to={formUrl}
        >
          Enroll now
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
