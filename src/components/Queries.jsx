import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FAQSectionSection } from "../content/content";

function Queries() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const toggleAnswer2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };
  return (
    <div className="w-full py-10 px-16 max-lg:px-5 max-lg:pt-0 flex text-dark-text max-w-[1700px] mx-auto">
      <div className="w-1/2 h-fit flex flex-col gap-1 ">
        <h1 className="text-lg font-medium">{FAQSectionSection.sectionTitle}</h1>
        <h1 className="text-5xl leading-[55px] font-bold w-full uppercase max-w-[450px] ">
          {FAQSectionSection.HeaderTitle}
        </h1>

        <Link
          className="text-sm mt-[20px] w-fit bg-[#7b6fb8] transition active:scale-90 text-white py-2.5 px-6 rounded-full max-lg:hidden"
          to="/"
        >
          Ask a question
        </Link>
      </div>
      {/* Questions grid */}
      <div className="w-1/2 grid grid-cols-1 gap-10 max-lg:gap-5 rounded-xl">
        <div className="group w-full h-fit flex flex-col">
          <div className="w-full h-fit flex flex-col items-center justify-start text-dark-text ">
            <div className="w-full h-fit flex flex-col items-center justify-start gap-2 max-w-[900px]">
              {FAQSectionSection.Questions.map((item, index) => (
                <div
                  key={index}
                  className=" py-4 px-5 bg-white text-dark-body-color border-b w-full flex justify-between items-start gap-0"
                >
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="font-normal tracking-tight text-base leading-5 min-h-[30px] w-full flex items-center justify-start">
                      {item.question}
                    </h1>
                    <p
                      className={`text-sm text-black/50 leading-5 font-normal transition-all duration-500 ease-in-out overflow-hidden ${
                        activeIndex === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleAnswer(index)}
                    className=" h-[30px] aspect-square rounded-full transition duration-150 active:scale-90 text-dark-text/50 hover:bg-card-bg hover:text-main-color flex items-center justify-center   "
                  >
                    <FaCaretDown className="text-[20px] " />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Queries;
