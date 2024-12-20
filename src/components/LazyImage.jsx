import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function LazyImage({ image }) {
  return (
    <img
      src={image}
      className="h-fit min-h-full w-full bg-stone-100 border-none outline-none shadow-xl object-cover brightness-90 saturate-[.8]"
    />
  );
}

export default LazyImage;
