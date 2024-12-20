import React from "react";
import Navbar from "../components/Navbar";

function HireGraduate() {
  return (
    <div className="w-full">
      <div className="w-full h-fit max-w-[1700px] mx-auto pb-[80px]">
        <Navbar />
        <div className="w-full flex px-16 py-24 justify-between">
          <div className="w-fit h-fit flex flex-col items-start justify-center gap-2">
            <h1 className="text-5xl font-bold w-fit text-dark-text/90">
              Hire Graduate
            </h1>
            <p className="text-base font-normal text-[#626262] max-w-[434px]">
              We offer hands-on training for aspiring professionals and PWDs,
              helping them gain the skills and confidence to build successful,
              fulfilling careers in Rwanda’s growing hospitality industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireGraduate;
