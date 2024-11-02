import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";

function Partners() {
  return (
    <div className="w-full h-fit text-dark-text">
      <Navbar />
      <div className="w-full h-fit p-16 flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold w-fit text-dark-text/90">Partners</h1>
      </div>
      {/* Content */}
      <div className="w-full px-16 max-lg:px-5 py-5">
        <h1 className="text-base text-dark-text/70 flex gap-4 text-center flex-col col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          saepe.
        </h1>
        <div className="w-full h-fit grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-1 gap-5 mt-7">
            <img src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" alt="" />
            <img src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Partners