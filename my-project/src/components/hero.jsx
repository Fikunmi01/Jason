import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
  

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export const Hero = () => {
  const imgArray = [
    {
      id: 0,
      imgSrc: "/assets/image1new.jpg",
    },
    {
      id: 1,
      imgSrc: "/assets/image2.jpg",
    },
    {
      id: 2,
      imgSrc: "/assets/image4.jpg",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {imgArray.map((item) => {
          return (
            <div key={item.id} className="w-full">
              <SwiperSlide key={item.id}>
                <img
                  src={item.imgSrc}
                  className="px-4 lg:h-[85vh] mb-16 w-full"
                  alt=""
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};
