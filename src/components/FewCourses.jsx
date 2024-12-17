import React from "react";
import { Link } from "react-router-dom";
import { CoursesSection } from "../content/content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { LuMoveRight } from "react-icons/lu";

function FewCourses() {
  return (
    <div className="w-full py-10 px-16 max-lg:px-5 max-lg:pt-0 flex flex-col text-dark-text">
      <div className="w-full h-fit grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-lg:gap-2">
        <h1 className="text-3xl font-medium ">Our Courses</h1>
        
      </div>
      {/* courses grid */}
      <div className="w-full gap-5">
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            440: {
              slidesPerView: 1,
              // spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              // spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              // spaceBetween: 50,
            },
          }}
        >
          {CoursesSection.courses.slice(0, 4).map((course, index) => (
            <SwiperSlide key={index}>
              <Link
                to={"/"}
                className="group flex flex-col p-3 max-lg:p-0 hover:bg-stone-100 rounded-3xl"
              >
                {/* showcase */}
                <div className="w-full h-auto aspect-video overflow-hidden rounded-2xl mb-4 flex items-center justify-center">
                  <img
                    src={course.img}
                    className="min-h-full object-cover object-center group-hover:scale-105 transition"
                  />
                </div>
                <h1 className="px-1 text-xl font-medium tracking-tight text-left">
                  {course.name}
                </h1>
                <p className="px-1 text-dark-text/70 text-sm mt-1 text-left">
                  {course.description}
                </p>
                <p className="px-1 pb-2 text-main-color text-base mt-4 flex items-center justify-between font-Poppins">
                  <span className="text-dark-text/70 text-sm">
                    {course.duration}
                  </span>
                  <span className="font-semibold">{course.price}</span>
                </p>
              </Link>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <Link
              to={"/courses"}
              className="group min-h-full flex flex-col p-3 max-lg:p-0"
            >
              {/* showcase */}
              <div className="w-full h-auto aspect-video overflow-hidden rounded-2xl mb-4 relative ">
                <img
                  src="https://g5-assets-cld-res.cloudinary.com/image/upload/x_63,y_100,h_636,w_1129,c_crop/q_auto,f_auto,fl_lossy,c_fill,g_center,h_406,w_720/v1672351865/g5/g5-c-5lzenrews-olympus-property-management/g5-cl-1m1ra03513-olympus-property-management-jacksonville-fl/services/iStock-1390809424_pyjgba.jpg"
                  className="min-h-full object-cover group-hover:scale-105 transition blur-sm brightness-50"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <h1 className="px-1 text-3xl text-white font-medium tracking-tight text-left flex items-center justify-center gap-4 ">
                    View all
                    <LuMoveRight />
                  </h1>
                </div>
              </div>
              <p className="px-1 text-dark-text/70 text-sm mt-1 text-left">
                We offer diverse courses, Choose yours and let's get to work in
                no time
              </p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default FewCourses;
