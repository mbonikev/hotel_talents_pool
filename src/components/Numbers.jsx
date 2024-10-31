import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
  return (
    <div className="w-full h-full flex items-start justify-center gap-0 py-10 px-16 text-dark-text">
      <div className="w-1/2 h-full bg-card-bg rounded-2xl flex gap-3 p-3 mr-10">
        <div className="bg-white rounded-2xl flex flex-col p-5 h-full w-1/3">
          <h1 className="text-lg font-semibold">
            OVER <span className="text-main-color">234+</span>
          </h1>
          <h1 className="text-sm text-dark-text/70">Recipes to Explore</h1>
        </div>
        <div className="bg-white rounded-2xl flex flex-col p-5 h-full w-1/3">
          <h1 className="text-lg font-semibold">
            GUIDED BY <span className="text-main-color">14+</span>
          </h1>
          <h1 className="text-sm text-dark-text/70">Calinary Experts</h1>
        </div>
        <div className="bg-white rounded-2xl flex flex-col p-5 h-full w-1/3">
          <h1 className="text-lg font-semibold">
            UNLOCK <span className="text-main-color">24+</span>
          </h1>
          <h1 className="text-sm text-dark-text/70">Cooking Courses</h1>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl max-w-[300px] font-medium">Ready to Experience and learn? Register Today</h1>
          <h1 className="text-sm text-dark-text/70">Fill out the form by providing information about yourself and what course you want to take, we will be in touch</h1>
        </div>
        <Link
          className="text-sm min-w-fit bg-main-color text-white py-2 px-5 rounded-full mt-3 font-medium"
          to="/"
        >
          Register Form
        </Link>
      </div>
    </div>
  );
}

export default Numbers;
