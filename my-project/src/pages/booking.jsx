import React from "react";
import { Navbar } from "../components/navbar";

export const Booking = () => {
  return (
    <>
      <div className="font-sans">
        <div className="mb-10">
          <Navbar />
        </div>
        <h1 className="text-7xl  pb-20 font-medium text-black font-sans">
          Book Experience
        </h1>
        <div className="flex gap-10">
            <div className="w-1/2">
                <h1 className="text-4xl mb-10 font-bold text-black">DETAILS</h1>
                <p className="text-lg font-bold text-black pb-4">BOOKINGS@JASON.COM</p>
                <p className="text-lg font-bold text-black pb-4">+1 800 000 000</p>
                <p className="text-lg font-bold text-black w-1/2">AMSTERDAM 2237 LOOIERSGRACHT 1016VS</p>
            </div>
            
            <div>
                <h1 className=" text-4xl mb-10 font-bold text-black">FILL IN FORM</h1>
                <form action="" className="flex flex-col w-96">
                    <input type="text" placeholder="NAME" className="pb-4 border-b-2 focus:outline-none"/>
                    <input type="text" placeholder="NUMBER OF GUESTS" className="pb-4 border-b-2 focus:outline-none"/>
                    <input type='date' placeholder="DATE" className="pb-4 border-b-2 focus:outline-none"/>
                    <input type="datetime" name="" placeholder="TIME" id="" className="pb-4 border-b-2 focus:outline-none " />

                </form>
            </div>
        </div>
      </div>
    </>
  );
};
