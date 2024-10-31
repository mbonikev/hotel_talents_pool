import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex px-5 py-2.5 text-dark-text">
      {/* logo */}
      <div className="">
        <img src="./logo2.jpeg" className="h-16 min-w-fit" />
      </div>
      {/* links */}
      <div className="flex flex-1 items-center justify-center gap-1.5">
        <Link className="text-sm hover:text-main-color px-1.5" to="/">
          Home
        </Link>
        <Link className="text-sm hover:text-main-color px-1.5" to="/">
          About
        </Link>
        <Link className="text-sm hover:text-main-color px-1.5" to="/">
          Courses
        </Link>
        <Link className="text-sm hover:text-main-color px-1.5" to="/">
          Centers
        </Link>
        <Link className="text-sm hover:text-main-color px-1.5" to="/">
          Services
        </Link>
        <Link className="text-sm hover:text-main-color px-1.5" to="/">
          Partners
        </Link>
        <Link className="text-sm hover:text-main-color px-1.5" to="/">
          Contacts
        </Link>
        <Link className="text-sm hover:text-main-color px-1.5" to="/">
          Hire Graduate
        </Link>
      </div>
      <div className="flex items-center justify-end gap-1.5">
        <Link
          className="text-sm bg-main-color text-white py-2.5 px-5 rounded-full"
          to="/"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
