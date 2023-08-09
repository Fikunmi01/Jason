import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
export default function Card() {
  return (
    <ScrollingCarousel swiping={true}>
      <img className="w-3/5 mr-10" src="./assets/image2.jpg" alt="" />
      <img src="./assets/image4.jpg" className="w-1/2 mr-10" alt="" />
      <img className="w-1/4" src="./assets/image5.jpg" alt="" />
    </ScrollingCarousel>
  );
}
