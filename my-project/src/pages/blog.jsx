import React from "react";
import { Navbar } from "../components/navbar";
import {Footer} from '../components/footer'

export const Blog = () => {


  const blogPost = [
    {
      imgSrc: "./assets/blog2.jpg",
      postTitle: "SEA TO PLATE: COASTAL CUISINE FOR SEAFOOD LOVERS",
      postDescription:
        "Discover coastal cuisine and indulge in the freshest seafood delights.",
    },
    {
      imgSrc: "./assets/image6.jpg",
      postTitle: "CRAFTING COCKTAILS: CREATIVE LIBATIONS AND MIXOLOGY MAGIC",
      postDescription:
        "Unveiling the art of mixology with innovative and imaginative cocktails.",
    },
    {
      imgSrc: "./assets/image5.jpg",
      postTitle: "SWEET TEMPTATIONS: IRRESISTIBLE DESSERT DELIGHTS",
      postDescription:
        "Indulge in mouthwatering desserts that will melt your heart.",
    },
    {
      imgSrc: "./assets/image4.jpg",
      postTitle: "FARM-TO-TABLE BLISS: LOCAL PRODUCE, SUSTAINABLE DINING",
      postDescription:
        "Celebrate local produce and sustainable dining with farm-to-table cuisine.",
    },
    {
      imgSrc: "./assets/image3.jpg",
      postTitle: "GLOBAL FLAVORS: EXPLORING EXOTIC SPICES IN THE CITY",
      postDescription:
        "Embark on a culinary adventure through diverse global cuisines.",
    },
    {
      imgSrc: "./assets/image2.jpg",
      postTitle: "AMSTERDAM'S STREET FOOD DELIGHTS!",
      postDescription:
        "Explore the sizzling flavors of Amsterdam's street food scene",
    },
  ];
  return (
    <>
      <div className="font-sans">
        <Navbar />
        <h1 className="text-7xl mb-10 font-medium text-black font-sans">
          Our blog
        </h1>

        <div>
          {blogPost.map((item) => {
            return (
              <>
                <div className="flex gap-16">
                  <div className="flex Gap relative">
                    <img src={item.imgSrc} className="w-full" alt="" />
                  </div>

                  <div className="Gap flex relative">
                    <img src={item.imgSrc} className="w-full" alt="" />
                  </div>
                </div>

                <div className="flex gap-16">
                  <div className="Gaps mb-16">
                    <h2 className="text-lg font-bold text-black">
                      {item.postTitle}
                    </h2>
                    <p className="text-lg font-medium text-black">
                      {item.postDescription}
                    </p>
                  </div>
                  <div className="Gaps mb-16">
                    <h2 className="text-lg font-bold text-black">
                      {item.postTitle}
                    </h2>
                    <p className="text-lg font-medium text-black">
                      {item.postDescription}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
          <Footer/>
      </div>
    </>
  );
};
