import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const Blog = () => {
  const blogPost = [
    {
      id: 1,
      imgSrc: "./assets/blog2.jpg",
      postTitle: "SEA TO PLATE: COASTAL CUISINE FOR SEAFOOD LOVERS",
      postDescription:
        "Discover coastal cuisine and indulge in the freshest seafood delights.",
    },
    {
      id: 2,
      imgSrc: "./assets/image6.jpg",
      postTitle: "CRAFTING COCKTAILS: CREATIVE LIBATIONS AND MIXOLOGY MAGIC",
      postDescription:
        "Unveiling the art of mixology with innovative and imaginative cocktails.",
    },
    {
      id: 3,
      imgSrc: "./assets/image5.jpg",
      postTitle: "SWEET TEMPTATIONS: IRRESISTIBLE DESSERT DELIGHTS",
      postDescription:
        "Indulge in mouthwatering desserts that will melt your heart.",
    },
    {
      id: 4,
      imgSrc: "./assets/image4.jpg",
      postTitle: "FARM-TO-TABLE BLISS: LOCAL PRODUCE, SUSTAINABLE DINING",
      postDescription:
        "Celebrate local produce and sustainable dining with farm-to-table cuisine.",
    },
    {
      id: 5,
      imgSrc: "./assets/image3.jpg",
      postTitle: "GLOBAL FLAVORS: EXPLORING EXOTIC SPICES IN THE CITY",
      postDescription:
        "Embark on a culinary adventure through diverse global cuisines.",
    },
    {
      id: 6,
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
        <h1 className="lg:text-7xl text-4xl px-4 lg:px-0 mb-10 font-medium text-black font-sans">
          Our blog
        </h1>

        <div>
          {blogPost.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex flex-col lg:flex-row lg:gap-16 gap-y-5 px-4">
                  <div className="flex flex-col lg:Gap relative">
                    <img src={item.imgSrc} className="lg:w-full" alt="" />

                    <div className="lg:Gaps mb-6 lg:mb-16">
                      <h2 className="text-lg font-bold text-black">
                        {item.postTitle}
                      </h2>
                      <p className="text-lg font-medium text-black">
                        {item.postDescription}
                      </p>
                    </div>
                  </div>

                  <div className="lg:Gap flex flex-col relative">
                    <img src={item.imgSrc} className="w-full" alt="" />

                    <div className="lg:Gaps lg:mb-16 mb-6">
                      <h2 className="text-lg font-bold text-black">
                        {item.postTitle}
                      </h2>
                      <p className="text-lg font-medium text-black">
                        {item.postDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};
