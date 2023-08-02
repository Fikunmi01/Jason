import React from "react";
import { motion } from "framer-motion";

const imgArray = [
  {
    imgSrc: "/assets/image2.jpg",
  },
  {
    imgSrc: "/assets/image4.jpg",
  },
  {
    imgSrc: "/assets/image5.jpg",
  },
];

export const CardVariant = () => {
  const cardVariants = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 100,
      //   rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      {imgArray.map((item) => {
        return (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
            className="inline-flex h-48 relative bg-offWhite"
          >
            <div className="inline-flex w-full bg-black">
              <img className="" src={item.imgSrc} alt="" />
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
