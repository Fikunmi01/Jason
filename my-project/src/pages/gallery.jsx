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
        <div className="pb-20">
          <img src={imgItems[1].imgSrc} alt="" />
        </div>

        <div className="flex gap-16 mb-20">
          <img src="/assets/image4.jpg" className="w-3/5" alt="" />
          <img src="/assets/image5.jpg" alt="" className="w-1/3" />
        </div>

        <div className="flex gap-10 pb-28">
          <img
            src="/assets/image6.jpg"
            className="w-1/2 h-[90vh] relative"
            alt=""
          />
          <img
            src="/assets/image1.jpg"
            className="w-1/2 h-[90vh] relative"
            alt=""
          />
        </div>

        <div className="flex gap-10 pb-20">
          <img src="/assets/image3.jpg" className="w-96" alt="" />
          <img src="/assets/image2.jpg" className="w-3/5" alt="" />
        </div>

        <Footer/>
      </div>
    </>
  );
};
