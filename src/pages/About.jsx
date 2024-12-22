import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full">
      <div className="w-full h-fit max-w-[1700px] mx-auto pb-[80px]">
        <Navbar />
        <div className="w-full h-fit px-5 max-lg:mt-2 flex flex-col pb-5">
          <div className="w-full h-fit min-h-[383px] max-lg:min-h-[230px] rounded-3xl p-16 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
            <img
              src="/images/About_us/banner.jpg"
              className="w-full h-full absolute top-0 left-0 z-10 object-cover"
            />
            <div className="w-full h-full absolute top-0 left-0 z-20 flex flex-col items-start justify-end px-16 max-lg:px-8 pb-12 max-lg:pb-8 bg-gradient-to-tr from-black/80 to-transparent">
              <h1 className="text-5xl max-lg:text-4xl tracking-tight font-extrabold w-fit text-white rounded-2xl">
                About us
              </h1>
            </div>
          </div>
          {/* content */}
          <div className="min-h-[990px] ">
            <div className="w-full mt-20 max-lg:mt-8 px-16 py-5 max-lg:px-0 max-lg:pt-0 flex gap-10 items-center justify-between max-lg:flex-col text-dark-text max-w-[1700px] mx-auto">
              <div className="w-1/2 max-lg:w-full h-fit flex flex-col gap-1 ">
                <h1 className="text-lg font-bold text-main-color">
                  Get to know us
                </h1>
                <h1 className="text-5xl font-bold w-fit max-w-[300px]">
                  Who we are?
                </h1>
                <p className="text-base font-medium leading-6 max-w-[590px] text-justify pt-5 opacity-65">
                  We offer hands-on training for aspiring professionals and
                  PWDs, helping them gain the skills and confidence to build
                  successful, fulfilling careers in Rwanda’s growing hospitality
                  industry. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Natus tempore, corrupti, incidunt nobis magni ab magnam
                  recusandae perspiciatis facere ad asperiores voluptatum
                  accusantium earum unde voluptas iste! Aut, ab in! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Perspiciatis quod
                  porro animi nihil est? Vero voluptatem, veniam, quod dolores
                  dicta quisquam dolorem aperiam accusamus inventore,
                  voluptatibus eaque consequatur molestias laudantium! lorem
                </p>
              </div>
              {/* image */}
              <div className="w-1/2 max-lg:w-full">
                <div className="h-fit w-full relative">
                  <div className="h-[350px] w-full relative overflow-hidden bg-white rounded-2xl flex items-center justify-center">
                    <img
                      src="/images/About_us/who_we_are.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* values */}
            <div className="flex flex-col items-center justify-center gap-3 py-20 mt-[120px] mb-[70px]">
              <h1 className="text-6xl max-lg:text-4xl max-lg:max-w-[500px] max-lg:px-2 font-bold w-fit max-w-[800px] tracking-tight leading-[60px] text-center">
                The fundamental principles guiding our team
              </h1>
              {/* value grid */}
              <div className="w-fit grid grid-cols-2 max-lg:flex max-lg:flex-wrap max-lg:items-center max-lg:justify-center gap-4 mt-[50px]">
                {[
                  { color: "bg-main-color/30", value: "Everyone Belongs" },
                  { color: "bg-yellow-500/30", value: "We Get Things Done" },
                  {
                    color: "bg-orange-500/30",
                    value: "We Take Responsibility",
                  },
                  { color: "bg-violet-500/30", value: "We Make a Difference" },
                ].map((value, index) => (
                  <div
                    className={`${value.color} max-lg:min-w-[240px] flex items-center justify-center p-7 text-xl rounded-full`}
                  >
                    {value.value}
                  </div>
                ))}
              </div>
            </div>

            {/* leaders */}
            <div className="w-full h-fit flex flex-col gap-1 px-16 max-md:px-0 ">
              <h1 className="text-lg font-bold text-main-color">Leaders</h1>
              <h1 className="text-5xl max-lg:text-4xl font-bold w-fit">Meet The Leaders</h1>
              <div className="w-full flex items-start justify-center flex-wrap p-2 gap-9 max-lg:gap-8 mt-8">
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/1.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
                
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/2.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
                
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/2.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
                
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/2.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
                
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/2.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
                
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/2.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
                
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/2.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
                
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/2.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
                
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/2.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
                
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/2.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
                
                <div className="flex items-center justify-center w-fit max-sm:w-full break-inside-avoid flex-col">
                  <div className="h-[180px] max-sm:h-fit w-auto max-lg:w-full aspect-square relative overflow-hidden bg-white rounded-full mb-4 flex items-center justify-center">
                    <img
                      src="/images/Leaders/2.jpg"
                      className="h-fit min-h-full w-full object-cover brightness-90"
                    />
                  </div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <h1 className="text-lg">President</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
