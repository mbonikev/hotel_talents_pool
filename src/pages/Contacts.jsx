import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { LuChevronRight, LuMail, LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

function Contacts() {
  return (
    <div className="w-full">
      <div className="w-full h-fit max-w-[1700px] mx-auto pb-[80px]">
        <Navbar />
        <div className="w-full flex justify-between">
          <div className="w-fit h-fit p-20 flex flex-col items-start justify-center gap-2">
            <h1 className="text-5xl font-bold w-fit text-dark-text/90">
              Contacts
            </h1>
            <p className="text-base font-normal text-[#626262] max-w-[434px]">
              We offer hands-on training for aspiring professionals and PWDs,
              helping them gain the skills and confidence to build successful,
              fulfilling careers in Rwanda’s growing hospitality industry.
            </p>
          </div>
          <div className="w-fit min-w-fit flex items-start justify-end">
            <div className="">
              <div className="h-12 aspect-square rounded-full">
                <IoLocationOutline/>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="h-fit w-full pb-10">
          <div className="w-full grid grid-cols-1 max-md:grid-cols-1 px-16 py-2 max-lg:px-5">
            <div className="w-full h-fit py-2.5 px-2 flex gap-3 items-center justify-start text-sm ">
              <LuMail className="text-xl text-main-color ml-2" />
              <div className="flex flex-col">
                <span className="font-medium">Email</span>
                <Link
                  to="/"
                  className="font-normal text-base hover:text-main-color hover:underline"
                >
                  hoteltalentspool@gmail.com
                </Link>
              </div>
            </div>
            <div className="w-full h-fit py-2.5 px-2 flex gap-3 items-center justify-start text-sm ">
              <LuPhone className="text-xl text-main-color ml-2" />
              <div className="flex flex-col">
                <span className="font-medium">Phone</span>
                <span className="font-normal text-base">+250783634802</span>
              </div>
            </div>
          </div>
          {/* map */}
          <div className="w-full px-16 py-5 max-lg:px-5">
            Address:
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51444.54513432262!2d30.059960375004472!3d-1.9577614217355783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6e42ffdf0af%3A0xca7b37500ae06cc5!2sGorillas%20Golf%20Hotel!5e0!3m2!1sen!2srw!4v1730564666931!5m2!1sen!2srw"
              className="w-full h-[450px] border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
