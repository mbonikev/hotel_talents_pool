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
    <div className="w-full py-10 px-16 max-lg:px-5 gap-10 flex flex-col text-dark-text max-w-[1700px] mx-auto">
      <div className="w-1/2 max-lg:w-full h-fit flex flex-col gap-1 ">
        <h1 className="text-lg font-bold text-main-color max-lg:mb-1">
          {TestimonialsSection.sectionTitle}
        </h1>
        <h1 className="text-5xl max-lg:text-3xl text-left pb-3 font-bold w-fit max-w-[380px]">
          {TestimonialsSection.sectionDescription}
        </h1>
      </div>
      <div className="w-full columns-3 max-lg:columns-2 max-md:columns-1 space-y-4">
        {/* testimonial */}
        {TestimonialsSection.testimonials.map((person, index) => (
          <div className="flex flex-col gap-4 items-center justify-center text-center break-inside-avoid bg-[#ebebeb] relative p-5 rounded-2xl overflow-hidden ring-1 ring-stone-200">
            {/* lights */}
            <div className="w-[120px] rounded-full -z-0 blur-[80px] aspect-square absolute top-[-20px] right-[-20px] bg-[#7FA2CA]"></div>
            <div className="w-[120px] rounded-full -z-0 blur-[80px] aspect-square absolute bottom-[-20px] left-[-20px] bg-[#4D61BA]"></div>
            <div className="w-full h-full z-10 flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-start gap-4">
                <div className="h-12 w-12 min-w-12 aspect-square rounded-full flex items-center justify-center relative overflow-hidden">
                  <img
                    src={person.img}
                    className="min-h-full h-fit w-full  min-w-full object-cover "
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h1 className="font-medium tracking-tight text-left">{person.name}</h1>
                  <h1 className="text-sm text-dark-text/70 text-left">{person.role}</h1>
                </div>
              </div>
              <h1 className="text-sm text-dark-text p-1 text-justify font-medium">{person.comment}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
