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
    <div className="w-full py-10 px-16 max-lg:px-5 max-lg:pt-0 flex flex-col text-dark-text">
      <div className="w-1/2 h-fit flex flex-col gap-1 ">
        <h1 className="text-lg font-bold text-main-color">
          {TestimonialsSection.sectionTitle}
        </h1>
        <h1 className="text-5xl leading-normal font-bold w-fit max-w-[380px]">
          {TestimonialsSection.sectionDescription}
        </h1>
      </div>
      <div className="w-full">
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
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
          {/* testimonial */}
          {TestimonialsSection.testimonials.map((person, index) => (
            <SwiperSlide>
              <div className="flex flex-col gap-4 items-center justify-center text-center bg-card-bg p-5 rounded-xl">
                <div className="flex items-center justify-start gap-7">
                  <div className="h-16 w-auto aspect-square relative">
                    <img
                      src={person.img}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="font-medium tracking-tight">
                      {person.name}
                    </h1>
                    <h1 className="text-sm text-dark-text/70">{person.role}</h1>
                  </div>
                </div>
                <h1 className="text-sm text-dark-text p-1">{person.comment}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
