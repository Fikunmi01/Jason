import React from "react";

export const CTA = () => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-24 pb-20 font-sans items-center px-4 lg:px-0">
          <h2 className="lg:w-1/3 text-3xl lg:text-4xl font-bold text-black">
            THE SPACE, THE PEOPLE THE FOOD.
          </h2>
          <p className="text-sans text-lg lg:w-2/4 text-black leading-5 font-medium">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos. Duis lobortis massa imperdiet quam. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus dolor. Ut varius tincidunt libero.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row px-4 lg:px-0 gap-10 pb-16 lg:pb-28">
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

        <div className="flex flex-col px-4 lg:flex-row gap-6 lg:gap-24 pb-16 font-sans items-center">
          <h2 className="lg:w-1/3 text-3xl lg:text-4xl font-bold text-black">
            SUSTAINABILITY AND VISION.
          </h2>
          <p className="text-sans text-lg lg:w-2/4 text-black leading-5 font-medium">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos. Duis lobortis massa imperdiet quam. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus dolor. Ut varius tincidunt libero.
          </p>
        </div>

        <div className="flex flex-col px-4 lg:px-0 lg:flex-row gap-6 lg:gap-10 pb-16 lg:pb-20">
          <img src="/assets/image3.jpg" className="lg:w-96" alt="" />
          <img src="/assets/image2.jpg" className="lg:w-3/5" alt="" />
        </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 pb-16 lg:pb-20 font-sans items-center lg:px-0 px-4">
            <h2 className="lg:w-1/3 text-3xl lg:text-4xl font-bold text-black">
              QUALITY FOOD, UNLIMITED FUN.
            </h2>
            <p className="text-sans text-lg lg:w-2/4  text-black leading-5 font-medium">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos hymenaeos. Duis lobortis massa imperdiet quam. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Phasellus dolor. Ut varius tincidunt libero.
            </p>
          </div>
      </div>
    </>
  );
};
