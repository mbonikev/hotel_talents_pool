import React from "react";

function Trainers() {
  return (
    <div className="w-full py-20 px-16 max-lg:px-5 max-lg:pt-0 flex gap-5 items-start justify-between text-dark-text max-w-[1700px] mx-auto">
      <div className="w-full h-[400px] bg-[#EBEBEB] rounded-3xl relative overflow-clip">
        {/* lights */}
        <div className="w-[40%] rounded-full blur-[100px] aspect-square absolute top-[-150px] right-[-160px] bg-[#7FA2CA]/60"></div>
        <div className="w-[40%] rounded-full blur-[100px] aspect-square absolute bottom-[-150px] left-[-160px] bg-[#4D61BA]/35"></div>
           <div className="w-full h-full bg-red-400 z-20"></div>       
      </div>
    </div>
  );
}

export default Trainers;
