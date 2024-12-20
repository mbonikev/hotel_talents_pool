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
              Graduate List
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireGraduate;
