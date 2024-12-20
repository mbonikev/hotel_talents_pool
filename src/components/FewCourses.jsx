import React from "react";
import { Link } from "react-router-dom";
import { CoursesSection } from "../content/content";


function FewCourses() {
  return (
    <div className="w-full py-20 px-16 max-lg:px-5 max-lg:pt-0 flex flex-col text-dark-text max-w-[1700px] mx-auto">
      <div className="w-full h-fit flex flex-col gap-1">
        <h1 className="text-lg font-medium ">{CoursesSection.sectionTitle}</h1>
        <h1 className="text-5xl font-bold w-fit max-w-[300px]">{CoursesSection.HeaderTitle}</h1>
        
      </div>
      {/* courses grid */}
      <div className="w-full gap-5">
        
      </div>
    </div>
  );
}

export default FewCourses;
