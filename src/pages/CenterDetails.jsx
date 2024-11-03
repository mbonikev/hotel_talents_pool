import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import {
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Image, Space } from "antd";
const imageList = [
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
  "./images/img6.jpg",
  "./images/img7.jpg",
  "./images/img8.jpg",
  "./images/img9.jpg",
];

function CenterDetails() {
  const { center_name } = useParams();
  const [current, setCurrent] = useState(0);
  return (
    <div className="w-full h-fit text-dark-text">
      <Navbar />
      <div className="w-full h-fit p-16 flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold w-fit text-dark-text/90">
          {center_name}
        </h1>
      </div>
      {/* Content */}
      <div className="w-full h-full px-16 max-lg:px-5 py-5">
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
                {/* <DownloadOutlined onClick={onDownload} /> */}
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
          <div className="w-full columns-4 max-lg:columns-3 max-md:columns-2 max-sm:columns-1 gap-3 auto-rows-auto">
            {imageList.map((item) => (
              <div className="w-full mb-2">
                <Image key={item} src={item} className="w-full" />
              </div>
            ))}
          </div>
        </Image.PreviewGroup>
      </div>
      <Footer />
    </div>
  );
}

export default CenterDetails;
