import React from "react";
import { Link } from "react-router-dom";
import { CoursesSection } from "../content/content";
// Import Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

function FewCourses() {
  return (
    <div className="w-full mt-20 px-16 py-5 max-lg:px-5 max-lg:pt-0 flex gap-5 items-start justify-between text-dark-text max-w-[1700px] mx-auto">
      <div className="w-fit h-fit flex flex-col gap-1 ">
        <h1 className="text-lg font-bold text-main-color">{CoursesSection.sectionTitle}</h1>
        <h1 className="text-5xl font-bold w-fit max-w-[300px]">
          {CoursesSection.HeaderTitle}
        </h1>
        <p className="text-base font-medium leading-6 max-w-[490px] pt-5 opacity-65">
          {CoursesSection.HeaderDesc}
        </p>
        <Link
          className="text-sm mt-[20px] w-fit bg-[#7b6fb8] transition active:scale-90 text-white py-2.5 px-6 rounded-full max-lg:hidden"
          to="/courses"
        >
          View all
        </Link>
      </div>
      {/* courses swiper */}
      <div className="w-full max-w-[700px] 2xl:max-w-[900px] gap-5 min-h-[300px]">
        <div className="h-fit w-full relative">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            modules={[Navigation, Pagination]}
            centeredSlides={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            // pagination={{ clickable: true }}
          >
            {CoursesSection.courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="h-[300px] w-full relative overflow-hidden bg-white rounded-2xl flex items-center justify-center">
                  <img src={course.img} className="h-fit min-h-full w-full object-cover" />
                  <div className="absolute top-0 left-0 w-full h-full px-5 py-3 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start justify-end text-white">
                  <h1 className="text-2xl font-bold w-full max-w-[300px] leading-7 text-left">{course.name}</h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-end gap-2 pt-3">
            {/* Custom Navigation Buttons */}
            <button className="custom-prev rounded-full shadow-md p-3 bg-[#7b6bb8] active:bg-opacity-90 transition active:scale-95 ">
              <LuArrowLeft className="text-white text-sm stroke-[3px]" />
            </button>
            <button className="custom-next rounded-full shadow-md p-3 bg-[#7b6bb8] active:bg-opacity-90 transition active:scale-95 ">
              <LuArrowRight className="text-white text-sm stroke-[3px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FewCourses;
