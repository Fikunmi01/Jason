import React from "react";

export const CTA = () => {
  return (
    <>
      <div>
        <div className="flex gap-24 pb-20 font-sans items-center">
          <h2 className="w-1/3 text-4xl font-bold text-black">
            THE SPACE, THE PEOPLE THE FOOD.
          </h2>
          <p className="text-sans text-lg w-2/4  text-black leading-5 font-medium">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos. Duis lobortis massa imperdiet quam. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus dolor. Ut varius tincidunt libero.
          </p>
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

        <div className="flex gap-24 pb-20 font-sans items-center">
          <h2 className="w-1/3 text-4xl font-bold text-black">
            SUSTAINABILITY AND VISION.
          </h2>
          <p className="text-sans text-lg w-2/4  text-black leading-5 font-medium">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos. Duis lobortis massa imperdiet quam. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus dolor. Ut varius tincidunt libero.
          </p>
        </div>

        <div className="flex gap-10 pb-20">
          <img src="/assets/image3.jpg" className="w-96" alt="" />
          <img src="/assets/image2.jpg" className="w-3/5" alt="" />
        </div>

          <div className="flex gap-24 pb-20 font-sans items-center">
            <h2 className="w-1/3 text-4xl font-bold text-black">
              QUALITY FOOD, UNLIMITED FUN.
            </h2>
            <p className="text-sans text-lg w-2/4  text-black leading-5 font-medium">
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
