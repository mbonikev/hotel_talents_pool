import React from "react";
import { Link } from "react-router-dom";

function FewCourses() {
  return (
    <div className="w-full py-10 px-16 flex flex-col text-dark-text">
      <div className="w-full h-fit grid grid-cols-2 gap-10">
        <h1 className="text-3xl font-medium ">Our Courses</h1>
        <h1 className="text-sm text-dark-text/70 flex gap-4 flex-col">
        <span>We offer diverse courses, Choose yours and let's get to work in no time</span>
          <span>
            <Link
              className="text-sm min-w-fit bg-card-bg text-dark-text/80 py-2 px-5 rounded-full mt-3 font-medium"
              to="/"
            >
              View all
            </Link>
          </span>
        </h1>
      </div>
      {/* courses grid */}
      <div className="w-full grid grid-cols-3 gap-5 rounded-xl">
        <div className="flex flex-col p-4 bg-card-bg rounded-2xl">
            {/* showcase */}
            
        </div>
      </div>
    </div>
  );
}

export default FewCourses;
