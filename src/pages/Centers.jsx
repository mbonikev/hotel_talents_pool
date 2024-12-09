import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";

function Centers() {
  return (
    <div className="w-full h-fit text-dark-text">
      <Navbar />
      <div className="w-full h-fit p-16 flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold w-fit text-dark-text/90">Centers</h1>
      </div>
      {/* Content */}
      <div className="h-fit min-h-[300px] w-full">
        <div className="w-full grid grid-cols-2 max-md:grid-cols-1 px-16 py-2 max-lg:px-5">
          <Link
            to="/center-details/Rubavu Center"
            className="w-full h-fit py-2.5 hover:bg-slate-100 px-2 flex items-center justify-start gap-1 text-sm font-medium"
          >
            <LuChevronRight className="text-xl text-main-color" />
            KIMIRONKO CENTER
          </Link>
          <Link
            to="/center-details/Rubavu Center"
            className="w-full h-fit py-2.5 hover:bg-slate-100 px-2 flex items-center justify-start gap-1 text-sm font-medium"
          >
            <LuChevronRight className="text-xl text-main-color" />
            KIMISAGARA CENTER
          </Link>
          <Link
            to="/center-details/Rubavu Center"
            className="w-full h-fit py-2.5 hover:bg-slate-100 px-2 flex items-center justify-start gap-1 text-sm font-medium"
          >
            <LuChevronRight className="text-xl text-main-color" />
            NYAMATA CENTER
          </Link>
          <Link
            to="/center-details/Rubavu Center"
            className="w-full h-fit py-2.5 hover:bg-slate-100 px-2 flex items-center justify-start gap-1 text-sm font-medium"
          >
            <LuChevronRight className="text-xl text-main-color" />
            NYAGATARE CENTER
          </Link>
          <Link
            to="/center-details/Rubavu Center"
            className="w-full h-fit py-2.5 hover:bg-slate-100 px-2 flex items-center justify-start gap-1 text-sm font-medium"
          >
            <LuChevronRight className="text-xl text-main-color" />
            NYAMASHEKE CENTER
          </Link>
          <Link
            to="/center-details/Rubavu Center"
            className="w-full h-fit py-2.5 hover:bg-slate-100 px-2 flex items-center justify-start gap-1 text-sm font-medium"
          >
            <LuChevronRight className="text-xl text-main-color" />
            RUBAVU CENTER
          </Link><Link
            to="/center-details/Rubavu Center"
            className="w-full h-fit py-2.5 hover:bg-slate-100 px-2 flex items-center justify-start gap-1 text-sm font-medium"
          >
            <LuChevronRight className="text-xl text-main-color" />
            HUYE CENTER
          </Link><Link
            to="/center-details/Rubavu Center"
            className="w-full h-fit py-2.5 hover:bg-slate-100 px-2 flex items-center justify-start gap-1 text-sm font-medium"
          >
            <LuChevronRight className="text-xl text-main-color" />
            KARONGI CENTER
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Centers;
