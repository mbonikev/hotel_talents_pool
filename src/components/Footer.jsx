import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-card-bg py-5 px-16 max-lg:px-5 pt-10 max-lg:pt-0 flex flex-col items-start justify-between max-md:flex-col max-md:gap-3 text-dark-text">
      <div class="w-full">
        <div class="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:px-0 max-lg:gap-5 px-16">
          <div>
            <p class="text-sm text-dark-text/70">Company</p>

            <ul class="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Features{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Works{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Career{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-sm text-dark-text/70">Help</p>

            <ul class="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-sm text-dark-text/70">Resources</p>

            <ul class="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Free eBooks{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Development Tutorial{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  How to - Blog{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  YouTube Playlist{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-sm text-dark-text/70">Extra Links</p>

            <ul class="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-sm hover:text-main-color"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr class="my-8 border-stone-200" />

      </div>
      <div className="w-full h-fit flex items-start justify-between max-md:flex-col gap-5 pb-3">
        <div className="flex-1 flex flex-col max-w-[600px]">
          <h1 className="text-sm font-medium">
            &copy; 2024 Hotel Talents Pool, All rights reserved
          </h1>
          <p className="text-xs text-dark-text/70">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
            necessitatibus! Dolore
          </p>
        </div>
        <div className="flex items-center justify-start gap-1 text-white">
          <Link
            className="h-8 w-8 aspect-square rounded-full bg-main-color  flex items-center justify-center"
            to="/"
          >
            <LuMail />
          </Link>
          <Link
            className="h-8 w-8 aspect-square rounded-full bg-main-color  flex items-center justify-center"
            to="/"
          >
            <FaFacebook />
          </Link>
          <Link
            className="h-8 w-8 aspect-square rounded-full bg-main-color  flex items-center justify-center"
            to="/"
          >
            <FaInstagram />
          </Link>
          <Link
            className="h-8 w-8 aspect-square rounded-full bg-main-color  flex items-center justify-center"
            to="/"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
