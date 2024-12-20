import React from "react";
import { Link } from "react-router-dom";
import { CoursesSection } from "../content/content";


function FewCourses() {
  return (
    <div className="w-full py-10 px-16 max-lg:px-5 max-lg:pt-0 flex flex-col text-dark-text">
      <div className="w-full h-fit flex flex-col">
        <h1 className="text-lg font-medium ">{CoursesSection.sectionTitle}</h1>
        <h1 className="text3xl font-bold ">{CoursesSection.HeaderTitle}</h1>
        
      </div>
      {/* courses grid */}
      <div className="w-full gap-5">
        
      </div>
    </div>
  );
}

export default FewCourses;
