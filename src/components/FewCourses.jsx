import React from "react";
import { Link } from "react-router-dom";
import { CoursesSection } from "../content/content";

function FewCourses() {
  return (
    <div className="w-full py-20 px-16 max-lg:px-5 max-lg:pt-0 flex text-dark-text max-w-[1700px] mx-auto">
      <div className="w-fit min-w-fit h-fit flex flex-col gap-1 bg-red-400">
        <h1 className="text-lg font-medium ">{CoursesSection.sectionTitle}</h1>
        <h1 className="text-5xl font-bold w-fit max-w-[300px]">
          {CoursesSection.HeaderTitle}
        </h1>
        <p className="text-base font-medium leading-6 max-w-[400px] pt-5 opacity-65">
          {CoursesSection.HeaderDesc}
        </p>
        <Link
          className="text-sm mt-[20px] w-fit bg-[#7b6fb8] transition active:scale-90 text-white py-2.5 px-6 rounded-full max-lg:hidden"
          to="/courses"
        >
          View all
        </Link>
      </div>
      {/* courses grid */}
      <div className="w-full gap-5 bg-emerald-300 h-[300px]"></div>
    </div>
  );
}

export default FewCourses;
