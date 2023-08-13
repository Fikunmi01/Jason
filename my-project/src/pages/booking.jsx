import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const Booking = () => {
  return (
    <>
      <div className="font-sans">
        <div className="mb-10">
          <Navbar />
        </div>

        <h1 className="lg:text-7xl text-4xl lg:pb-20 pb-10 px-4 lg:px-0 font-medium text-black font-sans">
          Book Experience
        </h1>

        <div className="lg:flex flex-col lg:flex-row lg:gap-10 px-4 lg:px-0">
          <div className="lg:w-1/2 pb-6 lg:pb-0">
            <h1 className="text-3xl lg:text-4xl mb-6 lg:mb-10 font-bold text-black">DETAILS</h1>
            <p className="text-lg font-bold text-black pb-2 lg:pb-4">
              BOOKINGS@JASON.COM
            </p>
            <p className="text-lg font-bold text-black pb-2 lg:pb-4">+1 800 000 000</p>
            <p className="text-lg font-bold text-black w-2/3 lg:w-1/2">
              AMSTERDAM 2237 LOOIERSGRACHT 1016VS
            </p>
          </div>

          <div>
            <h1 className="text-3xl lg:text-4xl mb-10 font-bold text-black">
              FILL IN FORM
            </h1>
            <div></div>

            <form action="" className="flex flex-col lg:w-96">
              <input
                type="text"
                placeholder="NAME"
                className="pb-1 outlineNone "
              />
              <input
                type="text"
                placeholder="NUMBER OF GUESTS"
                className="pb-1 outlineNone "
              />
              <input
                type="date"
                placeholder="DATE"
                className="pb-1 outlineNone"
              />
              <input
                type="datetime"
                name=""
                placeholder="TIME"
                id=""
                className="pb-1 outlineNone "
              />
              <div className="flex justify-between mb-16">
                <button className="text-white"></button>
                <button className="text-lg relative submitBtn font-sans">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-4 lg:px-0 gap-10 pb-20">
          <img src="/assets/image3.jpg" className="lg:w-96" alt="" />
          <img src="/assets/image2.jpg" className="lg:w-3/5" alt="" />
        </div>

        <div className="flex px-4 flex-col lg:flex-row gap-6 lg:gap-24 pb-20 font-sans items-center">
          <h2 className="lg:w-1/3 text-3xl lg:text-4xl font-bold text-black">
            QUALITY FOOD, UNLIMITED FUN.
          </h2>
          <p className="text-sans text-lg lg:w-2/4 text-black leading-5 font-medium">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos. Duis lobortis massa imperdiet quam. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus dolor. Ut varius tincidunt libero.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row px-4 gap-10 pb-28">
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

        <Footer />
      </div>
    </>
  );
};
