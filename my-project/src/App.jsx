import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import "./App.css";
import { Landingpage } from "./pages/landingpage";
import { motion, useScroll, useSpring } from "framer-motion";
import { About } from "./pages/about-page";
import { Gallery } from "./pages/gallery";
import { Booking } from "./pages/booking";
import { Blog } from "./pages/blog";

function App() {
  const { scrollYprogress } = useScroll();
  
  const scaleX = useSpring(scrollYprogress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [open, setOpen] = useState(false);
  
  function handleClick() {
    setOpen(!open);
  }

  const navLink = [
    {
      id: 1,
      name: "Home",
      route: "/",
    },
    {
      id: 2,
      name: "About",
      route: "/about",
    },
    {
      id: 3,
      name: "Gallery",
      route: "/gallery",
    },
    {
      id: 4,
      name: "Booking",
      route: "/booking",
    },
    {
      id: 5,
      name: "Blog",
      route: "/blog",
    },

  ];
  
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={scaleX}
        className="relative lg:bg-white lg:flex lg:w-full lg:pr-10"
      >
        <div className="lg:w-1/5 lg:min-h-screen lg:flex relative lg:justify-center">
          <h1 className="sm:text-2xl hidden lg:text-[9rem] font-semibold lg:fixed lg:tracking-wider  lg:flex lg:top-72 lg:items-center lg:pb-16 lg:transform lg:-rotate-90 lg:font-sans">
            JASON.
          </h1>

          <div className="flex justify-between px-4 py-5 relative items-center">
            <h1 className="font-semibold tracking-wider font-sans text-3xl lg:hidden">JASON</h1>
            {open ? (
              <div>
                <i
                  className="cursor-pointer uil uil-times-square uils"
                  onClick={handleClick}
                ></i>
              </div>
            ) : (
              <div>
                <i
                  className="cursor-pointer uil uil-grip-horizontal-line uils"
                  onClick={handleClick}
                ></i>
              </div>
            )}
          </div>

          {open && (
            <div className="py-6 lg:hidden font-sans text-lg flex flex-col w-full bg-white font-medium absolute z-10">
              {navLink.map((item) => (
                <div key={item.id} className="m-auto">
                  <ul className="relative mb-5 pb-2">
                    <li className="text-2xl text-black font-sans opacity-95">
                      <Link to={item.route}>{item.name}</Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:w-4/5 ">
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </motion.div>
    </>
  );
}

export default App;
