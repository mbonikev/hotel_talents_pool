import React, { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";
import { Carousel } from "antd";
import { GiSevenPointedStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import { CoursesSection } from "../content/content";
import { TbHexagonFilled, TbMichelinStar } from "react-icons/tb";
import { formUrl } from "../content/enrollForm";
import LazyImage from "./LazyImage";
import { PiUser, PiUserBold } from "react-icons/pi";

function UserProfile({ Hide, data }) {
  const [animate, setAnimate] = useState(true);
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 50);
    setTimeout(() => {
      setFetching(false);
    }, 1200);
  }, []);
  return (
    <>
      <div
        onClick={Hide}
        className={`fixed top-0 left-0 w-full h-full bg-black/45 z-40 flex items-center justify-center transition duration-200 ease-in-out
          ${animate ? "opacity-0" : "opacity-100"}`}
      ></div>
      <div
        className={`fixed z-40 top-0 bottom-0 left-0 right-0 m-auto w-[90%] h-[90%] max-w-[650px] max-h-[500px] bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden transition duration-200 ease-in-out 
        ${animate ? "opacity-0 translate-y-5" : "opacity-100"}`}
      >
        {fetching ? (
          <LoadingScreen />
        ) : (
          <div className="w-full h-full flex-1 flex flex-col">
            <div className="w-full max-md:w-full h-full flex flex-col gap-1 pt-7 px-7 text-dark-text relative">
              <button
                onClick={Hide}
                className="absolute top-4 right-4 z-10 transition active:scale-95 bg-body-color text-dark-text h-10 rounded-full outline-none flex items-center justify-center aspect-square text-xl"
              >
                <LuX />
              </button>
              <div className="w-28 h-28 aspect-square overflow-hidden rounded-full cursor-pointer ">
                <LazyImage
                  image={`/Graduates/profiles/${data["Profile Image"]}`}
                />
              </div>
              <h1 className="text-[35px] mt-2 leading-[39px] tracking-tight font-extrabold ">
                {data["Full Names"]}
              </h1>
              <div className="flex items-center justify-start gap-2 mt-2 text-dark-text/20 ">
                <PiUserBold />
                <h1 className="text-sm">Spots available</h1>
              </div>
              <h1 className=" mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam possimus{" "}
              </h1>
              <div className="flex-1 flex flex-col w-full h-full gap-3 py-3 overscroll-contain overflow-y-auto custom_scrollbar">
                <div className="flex items-start justify-start w-full gap-2">
                  <TbHexagonFilled className="text-purple-600 text-sm mt-[3px] min-w-fit" />
                  <h1 className="text-sm text-dark-text/70">Lorem</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-fit py-4 px-4">
              <Link
                className="w-full h-full flex items-center justify-center bg-main-color transition hover:opacity-90 text-sm text-white py-2.5 px-2 rounded-full"
                target="_blank"
                to={formUrl}
              >
                Enroll now
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserProfile;
