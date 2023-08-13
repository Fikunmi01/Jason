import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const Gallery = () => {
  const imgItems = [
    {
      imgSrc: "./assets/image1.jpg",
    },
    {
      imgSrc: "./assets/image2.jpg",
    },
    {
      imgSrc: "./assets/image3.jpg",
    },
    {
      imgSrc: "./assets/image4.jpg",
    },
    {
      imgSrc: "./assets/image5.jpg",
    },
    {
      imgSrc: "./assets/image6.jpg",
    },
    {
      imgSrc: "./assets/image1new.jpg",
    },
  ];
  return (
    <>
      <div>
        <Navbar />
        <div className="pb-5 px-4 lg:px-0 lg:pb-20">
          <img src={imgItems[1].imgSrc} alt="" />
        </div>

        <div className="flex gap-y-5 lg:gap-y-0 flex-col lg:flex-row px-4 lg:px-0 lg:gap-16 lg:mb-20">
          <img src="/assets/image4.jpg" className="lg:w-3/5" alt="" />
          <img src="/assets/image5.jpg" alt="" className="lg:w-1/3 pb-5" />
        </div>

        <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row px-4 lg:px-0 pb-5 lg:gap-10 lg:pb-28">
          <img
            src="/assets/image6.jpg"
            className="lg:w-1/2 lg:h-[90vh] relative"
            alt=""
          />
          <img
            src="/assets/image1.jpg"
            className="lg:w-1/2 lg:h-[90vh] relative"
            alt=""
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 px-4 lg:px-0 lg:gap-10 pb-20">
          <img src="/assets/image3.jpg" className="lg:w-96" alt="" />
          <img src="/assets/image2.jpg" className="lg:w-3/5" alt="" />
        </div>

        <Footer/>
      </div>
    </>
  );
};
