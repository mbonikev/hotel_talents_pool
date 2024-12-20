import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { CoursesSection } from "../content/content";
import CourseDetails from "../components/CourseDetails";

function Courses() {
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const [courseId, setCourseId] = useState("");

  const courseDetails = (id) => {
    setCourseId(id);
    setShowCourseDetails(true);
  };

  const HideCourseDetails = () => {
    setCourseId("");
    setShowCourseDetails(false);
  };

  return (
    <div>
      <div className="w-full h-fit relative">
        {/* course details */}
        {showCourseDetails && (
          <CourseDetails Id={courseId} Hide={HideCourseDetails} />
        )}
        <Navbar />
        <div className="w-full h-fit pt-16 px-16 max-md:px-5 flex flex-col items-start justify-start gap-2">
          <h1 className="text-5xl font-bold w-fit text-main-color">
            {CoursesSection.sectionTitle}
          </h1>
          <h1 className=" max-w-[1200px] text-justify mt-3 text-[#626262]">
            {CoursesSection.intro[0]}
          </h1>
        </div>
        {/* courses grid */}
        {/* <h1 className="max-w-[920px] text-center mt-3 mx-auto">
        {CoursesSection.intro[1]}
      </h1> */}
        <h1 className="text-base text-[#626262] my-10 mb-4 max-w-[1150px] w-fit px-16 max-lg:px-5">
          {CoursesSection.intro[2]}
        </h1>
        <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 px-16 pb-5 pt-3 max-lg:px-5 gap-7 rounded-xl">
          {CoursesSection.courses.map((course, index) => (
            <div
              key={index}
              onClick={() => courseDetails(course.id)}
              className="group cursor-pointer flex flex-col max-lg:p-0 hover:bg-card-bg rounded-2xl"
            >
              {/* showcase */}
              <div className="w-full h-auto aspect-video overflow-hidden rounded-2xl mb-4 flex items-center justify-center bg-white">
                <img
                  src={course.img}
                  className="w-full min-h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <h1 className="px-1 text-dark-text max-md:px-3 text-xl font-bold tracking-tight">
                {course.name}
              </h1>
              <p className="px-1 max-md:px-3 text-dark-text/70 text-sm mt-1">
                {course.description}
              </p>
            </div>
          ))}
        </div>
        <h1 className="max-w-[870px] text-left px-16 max-md:px-5 w-full mt-[40px] font-normal">
          {CoursesSection.outro[0]}
        </h1>
        <h1 className="max-w-[870px] text-left px-16 max-md:px-5 w-full mb-[220px] font-normal">
          {CoursesSection.outro[1]}
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
