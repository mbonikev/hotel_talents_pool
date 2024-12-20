import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { TestimonialsSection } from "../content/content";

function Testimonials() {
  return (
    <div className="w-full py-10 px-16 max-lg:px-5 gap-10 flex flex-col text-dark-text">
      <div className="w-1/2 h-fit flex flex-col gap-1 ">
        <h1 className="text-lg font-bold text-main-color">
          {TestimonialsSection.sectionTitle}
        </h1>
        <h1 className="text-5xl pb-3 font-bold w-fit max-w-[380px]">
          {TestimonialsSection.sectionDescription}
        </h1>
      </div>
      <div className="w-full columns-3">
        {/* testimonial */}
        {TestimonialsSection.testimonials.map((person, index) => (
          <div className=" text-center break-inside-avoid bg-white relative p-5 rounded-2xl">
            {/* lights */}
            {/* <div className="w-[40%] rounded-full -z-0 blur-[100px] aspect-square absolute top-[-150px] right-[-160px] bg-[#7FA2CA]/60"></div>
            <div className="w-[40%] rounded-full -z-0 blur-[100px] aspect-square absolute bottom-[-150px] left-[-160px] bg-[#4D61BA]/35"></div> */}
            <div className="w-full h-full absolute top-0 z-10 flex flex-col items-center justify-center gap-1 relative">
              <div className="flex items-center justify-start gap-7">
                <div className="h-16 w-auto aspect-square relative">
                  <img
                    src={person.img}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h1 className="font-medium tracking-tight">{person.name}</h1>
                  <h1 className="text-sm text-dark-text/70">{person.role}</h1>
                </div>
              </div>
              <h1 className="text-sm text-dark-text p-1">{person.comment}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
