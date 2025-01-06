import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useParams } from "react-router-dom";
import {
  LeftOutlined,
  RightOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Image, Space, Spin } from "antd";
import { Centers } from "../content/content";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { SangiraLogo } from "../assets";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function CenterDetails() {
  const { center_name } = useParams();
  const choosenCenter = Centers.find((center) => center.name === center_name);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state
  const [imageList, setImageList] = useState([]); // State for the images to render
  const location = useLocation();
  // Import images
  const allImages = import.meta.glob("/public/images/*/*.{png,jpg,jpeg,svg}", {
    eager: true,
  });

  const filteredImages = Object.entries(allImages).filter(([path]) =>
    path.includes(`/public/images/${choosenCenter.name}/`)
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const mappedImages = filteredImages.map(([_, image], index) => (
        <Image
          key={index}
          src={image.default}
          alt={`Image ${index + 1}`}
          className="galleryImg w-full rounded-2xl"
        />
      ));
      setImageList(mappedImages);
      setLoading(false); // Set loading to false after delay
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [filteredImages]);

  return (
    <div className="w-full h-fit text-dark-text max-w-[1700px] mx-auto">
      <Navbar setLoading={setLoading} />
      <div className="px-16 max-md:px-5">
        <div
          className={`w-full h-fit pb-10 pt-14 flex flex-col items-start justify-start gap-2 `}
        >
          <h1 className="text-5xl font-bold w-fit text-main-color ">
            {center_name}
          </h1>
          <h1 className="text-dark-text mt-3 text-justify  ">
            {choosenCenter.introduction}
          </h1>
          {center_name === "Nyamasheke Center" && (
            <div className="mt-5">
            <h1 className="mb-2">Sponsored by</h1>
              <div className="w-fit min-w-fit h-[70px]">
                <img
                  src={SangiraLogo}
                  alt="Sangira Logo"
                  className="w-fit h-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-full px-16 max-lg:px-5 py-5 pb-10 ">
        {loading ? ( // Show loading spinner/message
          <div className="flex justify-center items-start min-h-[200px]">
            <Spin size="large" tip="Loading images..." />
          </div>
        ) : (
          <Image.PreviewGroup
            preview={{
              toolbarRender: (
                _,
                {
                  transform: { scale },
                  actions: {
                    onActive,
                    onFlipY,
                    onFlipX,
                    onRotateLeft,
                    onRotateRight,
                    onZoomOut,
                    onZoomIn,
                    onReset,
                  },
                }
              ) => (
                <Space size={20} className="toolbar-wrapper text-xl">
                  <LeftOutlined onClick={() => onActive?.(-1)} />
                  <RightOutlined onClick={() => onActive?.(1)} />
                  <SwapOutlined rotate={90} onClick={onFlipY} />
                  <SwapOutlined onClick={onFlipX} />
                  <RotateLeftOutlined onClick={onRotateLeft} />
                  <RotateRightOutlined onClick={onRotateRight} />
                  <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                  <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                  <UndoOutlined onClick={onReset} />
                </Space>
              ),
              onChange: (index) => {
                setCurrent(index);
              },
            }}
          >
            <div className="w-full 2xl:columns-5 max-2xl:columns-4 max-lg:columns-3 max-md:columns-2 max-sm:columns-2 gap-3 space-y-2 auto-rows-auto">
              <Reveal
                triggerOnce
                // damping={0.06}
                // cascade={.3}
                duration={800}
                keyframes={customAnimation}
              >
                {imageList}
              </Reveal>
            </div>
          </Image.PreviewGroup>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CenterDetails;
