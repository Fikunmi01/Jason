import React, { useState } from "react";

export const Footer = () => {
  const [hover, setHover] = useState(false);
  const [mouseHover, setMouseHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleHoverOut = () => {
    setHover(false);
  };

  const handleMouseHover = () => {
    setMouseHover(true);
  };

  const handleMouseOverOut = () => {
    setMouseHover(false);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 text-black font-sans gap-16 lg:gap-20">
        <div>
          <h1 className="text-5xl font-medium ">JASON.</h1>
        </div>
        <div className="lg:w-1/4">
          <h3 className="text-xl font-semibold pb-4">LOCATION</h3>
          <p className="w-full leading-tight text-lg font-medium">
            Amsterdam <br />
            22337 Looiersgracht <br /> 1016VS
          </p>
          <div onMouseLeave={handleHoverOut} onMouseEnter={handleHover}>
            <p className="pt-8 text-lg lg:text-xl font-medium leading-tight pb-2 cursor-pointer">
              Google Maps
            </p>
            {hover ? (
              <div className="relative w-2/6 lg:w-1/2 h-[3px] rounded-xl bg-black ease-in duration-300"></div>
            ) : (
              <div className="relative w-2/6 lg:w-1/2 h-[3px] rounded-xl bg-offWhite opacity-50 ease-out duration-300"></div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold pb-4">HOURS</h3>
          <span className="text-lg font-medium leading-tight">
            <p>Mon: Closed</p>
            <p>Tues-Fri: 12:00 - 22:00</p>
            <p>Sat-Sun: 8:00 - 24:00</p>
            <div
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseOverOut}
            >
              <p className="pt-8 text-lg lg:text-xl pb-2 cursor-pointer">Book a table</p>
              {mouseHover ? (
                <div className="relative w-2/6 lg:w-2/3 h-[3px] rounded-xl bg-black ease-in duration-300"></div>
              ) : (
                <div className="relative w-2/6 lg:w-2/3 h-[3px] rounded-xl bg-offWhite opacity-50 ease-out duration-300"></div>
              )}
            </div>
          </span>
        </div>

        <div>
          <h3 className="font-semibold text-xl pb-4">CONTACT</h3>
          <div className="text-lg font-medium leading-tight">
            <p className="pb-5">
              General <br />
              info@jason.com
            </p>
            <p className="pb-5">
              Media <br />
              media@jason.com
            </p>
            <p className="pb-5">
              Phone <br />
              +1 800 000 000
            </p>
            <p className="pb-5">
              Social{" "}
              <span className="flex gap-3 pt-3">
                <img src="/assets/instagram.svg" alt="" />
                <img src="/assets/sendArrow.svg" alt="" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
