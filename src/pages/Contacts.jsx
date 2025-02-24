import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { LuChevronRight, LuMail, LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import Queries from "../components/Queries";

function Contacts() {
  return (
    <div className="w-full">
      <div className="w-full h-fit max-w-[1700px] mx-auto pb-[80px]">
        <Navbar />
        <div className="w-full flex px-16 max-lg:px-5 py-24 max-lg:py-14 gap-8 justify-between max-lg:flex-col">
          <div className="w-fit h-fit flex flex-col items-start justify-center gap-2">
            <h1 className="text-5xl max-lg:text-4xl font-bold w-fit text-dark-text/90">
              Contact us
            </h1>
            <p className="text-base font-normal text-[#626262] max-w-[434px]">
              We’re here to connect with you! Whether you have questions about
              our programs, want to collaborate, or are looking to hire skilled
              hospitality graduates, don’t hesitate to reach out. Our team is
              ready to assist and guide you every step of the way. Let’s build
              the future of hospitality together!
            </p>
          </div>
          <div className="w-fit min-w-fit flex items-start justify-end max-md:flex-wrap gap-20 max-md:gap-5 max-md:justify-between max-md:w-full">
            <div className="flex flex-col gap-1">
              <div className="h-12 w-12 aspect-square rounded-full bg-main-color text-white text-2xl flex items-center justify-center">
                <IoLocationOutline />
              </div>
              <p className="text-xl font-medium max-w-[434px]">Our Address</p>
              <p className="text-base font-normal text-[#626262] max-w-[434px]">
                Kimironko, Kigali
              </p>
              <p className="text-base font-normal text-[#626262] max-w-[434px]">
                2 KG 137 St
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-12 w-12 aspect-square rounded-full bg-main-color text-white text-2xl flex items-center justify-center">
                <HiOutlinePhone />
              </div>
              <p className="text-xl font-medium max-w-[434px]">
                Our contact info
              </p>
              <p className="text-base font-normal text-[#626262] max-w-[434px]">
                +250795295448
              </p>
              <p className="text-base font-normal text-[#626262] max-w-[434px]">
                hoteltalentpool@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="w-full px-16 py-5 max-lg:mb-10 max-lg:px-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.7536924555664!2d30.13371436177252!3d-1.950185577489791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70d0cf8a1f7%3A0xe1a56a5b12920284!2s2%20KG%20137%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1740410863685!5m2!1sen!2srw"
            className="w-full h-[450px] border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Queries />
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
