import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="w-full h-fit ">
      <Navbar />
      <div className="w-full h-fit p-16 flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold w-fit text-dark-text/90">Courses</h1>
      </div>
      {/* courses grid */}
      <h1 className="text-sm font-normal w-fit text-dark-text/90 px-20 max-lg:px-5">23 Available Courses</h1>

      <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 px-16 pb-5 pt-3 max-lg:px-5 gap-5 rounded-xl">
      <Link to={'/'} className="group flex flex-col p-5 max-lg:p-0 hover:bg-card-bg rounded-2xl">
            {/* showcase */}
            <div className="w-full h-auto aspect-video overflow-hidden rounded-2xl mb-3">
              <img 
                src="https://g5-assets-cld-res.cloudinary.com/image/upload/x_63,y_100,h_636,w_1129,c_crop/q_auto,f_auto,fl_lossy,c_fill,g_center,h_406,w_720/v1672351865/g5/g5-c-5lzenrews-olympus-property-management/g5-cl-1m1ra03513-olympus-property-management-jacksonville-fl/services/iStock-1390809424_pyjgba.jpg" 
                className="min-h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <h1 className="px-3 text-xl font-medium tracking-tight">Bakery Training</h1>
            <p className="px-3 text-dark-text/70 text-sm mt-1">Lorem, odio, error ullam, autem itaque harum laboriosam totam nam soluta qui </p>
            <p className="px-3 pb-2 text-main-color text-base mt-4 flex items-center justify-between font-Poppins">
              <span className="text-dark-text/70 text-sm">Duration: 4 Months</span>
              <span className="font-semibold">RWF 150,000</span>
            </p>
        </Link>
        <Link to={'/'} className="group flex flex-col p-5 max-lg:p-0 hover:bg-card-bg rounded-2xl">
            {/* showcase */}
            <div className="w-full h-auto aspect-video overflow-hidden rounded-2xl mb-3">
              <img 
                src="https://www.hotelschool.co.za/wp-content/uploads/2020/09/ihs-online-human-resource-management-specialisation-package.jpg" 
                className="min-h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <h1 className="px-3 text-xl font-medium tracking-tight">Hotel Human Resources training</h1>
            <p className="px-3 text-dark-text/70 text-sm mt-1">Lorem, odio, error ullam, autem itaque harum laboriosam totam nam soluta qui </p>
            <p className="px-3 pb-2 text-main-color text-base mt-4 flex items-center justify-between font-Poppins">
              <span className="text-dark-text/70 text-sm">Duration: 5 Days</span>
              <span className="font-semibold">RWF 50,000</span>
            </p>
        </Link>
        <Link to={'/'} className="group flex flex-col p-5 max-lg:p-0 hover:bg-card-bg rounded-2xl">
            {/* showcase */}
            <div className="w-full h-auto aspect-video overflow-hidden rounded-2xl mb-3">
              <img 
                src="https://accent-technologies.com/wp-content/uploads/2014/05/485561855-e1438540365266.jpg" 
                className="min-h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <h1 className="px-3 text-xl font-medium tracking-tight">Sales and Marketing Training</h1>
            <p className="px-3 text-dark-text/70 text-sm mt-1">Lorem, odio, error ullam, autem itaque harum laboriosam totam nam soluta qui </p>
            <p className="px-3 pb-2 text-main-color text-base mt-4 flex items-center justify-between font-Poppins">
              <span className="text-dark-text/70 text-sm">Duration: 1 Month</span>
              <span className="font-semibold">RWF 100,000</span>
            </p>
        </Link>
        <Link to={'/'} className="group flex flex-col p-5 max-lg:p-0 hover:bg-card-bg rounded-2xl">
            {/* showcase */}
            <div className="w-full h-auto aspect-video overflow-hidden rounded-2xl mb-3">
              <img 
                src="https://g5-assets-cld-res.cloudinary.com/image/upload/x_63,y_100,h_636,w_1129,c_crop/q_auto,f_auto,fl_lossy,c_fill,g_center,h_406,w_720/v1672351865/g5/g5-c-5lzenrews-olympus-property-management/g5-cl-1m1ra03513-olympus-property-management-jacksonville-fl/services/iStock-1390809424_pyjgba.jpg" 
                className="min-h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <h1 className="px-3 text-xl font-medium tracking-tight">Bakery Training</h1>
            <p className="px-3 text-dark-text/70 text-sm mt-1">Lorem, odio, error ullam, autem itaque harum laboriosam totam nam soluta qui </p>
            <p className="px-3 pb-2 text-main-color text-base mt-4 flex items-center justify-between font-Poppins">
              <span className="text-dark-text/70 text-sm">Duration: 4 Months</span>
              <span className="font-semibold">RWF 150,000</span>
            </p>
        </Link>
        <Link to={'/'} className="group flex flex-col p-5 max-lg:p-0 hover:bg-card-bg rounded-2xl">
            {/* showcase */}
            <div className="w-full h-auto aspect-video overflow-hidden rounded-2xl mb-3">
              <img 
                src="https://www.hotelschool.co.za/wp-content/uploads/2020/09/ihs-online-human-resource-management-specialisation-package.jpg" 
                className="min-h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <h1 className="px-3 text-xl font-medium tracking-tight">Hotel Human Resources training</h1>
            <p className="px-3 text-dark-text/70 text-sm mt-1">Lorem, odio, error ullam, autem itaque harum laboriosam totam nam soluta qui </p>
            <p className="px-3 pb-2 text-main-color text-base mt-4 flex items-center justify-between font-Poppins">
              <span className="text-dark-text/70 text-sm">Duration: 5 Days</span>
              <span className="font-semibold">RWF 50,000</span>
            </p>
        </Link>
        <Link to={'/'} className="group flex flex-col p-5 max-lg:p-0 hover:bg-card-bg rounded-2xl">
            {/* showcase */}
            <div className="w-full h-auto aspect-video overflow-hidden rounded-2xl mb-3">
              <img 
                src="https://accent-technologies.com/wp-content/uploads/2014/05/485561855-e1438540365266.jpg" 
                className="min-h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <h1 className="px-3 text-xl font-medium tracking-tight">Sales and Marketing Training</h1>
            <p className="px-3 text-dark-text/70 text-sm mt-1">Lorem, odio, error ullam, autem itaque harum laboriosam totam nam soluta qui </p>
            <p className="px-3 pb-2 text-main-color text-base mt-4 flex items-center justify-between font-Poppins">
              <span className="text-dark-text/70 text-sm">Duration: 1 Month</span>
              <span className="font-semibold">RWF 100,000</span>
            </p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
