import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import "swiper/css/autoplay";
import "swiper/css";

export default function Card() {
  return (
    <>
      <ScrollingCarousel swiping={true}>
      <img className="w-3/5 mr-5 lg:mr-10 h-40 lg:h-80" src="./assets/image2.jpg" alt="" />
      <img src="./assets/image4.jpg" className="w-1/2 h-40 lg:h-80 lg:mr-10 mr-5" alt="" />
      <img className="w-1/4" src="./assets/image5.jpg" alt="" />
    </ScrollingCarousel>

    </>
  );
}
