import { Route, Routes } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import "./App.css";
import { Landingpage } from "./pages/landingpage";
import { motion, useScroll, useSpring } from "framer-motion";
import { About } from "./pages/about-page";
import { Gallery } from "./pages/gallery";
import { Booking } from "./pages/booking";

function App() {
  const { scrollYprogress } = useScroll();
  const scaleX = useSpring(scrollYprogress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={scaleX}
        className="relative bg-white flex w-full pr-10"
      >
        <div className="w-1/5 min-h-screen flex relative justify-center">
          <h1 className="text-[9rem] font-semibold fixed tracking-wider  flex top-52 items-center pb-16 transform -rotate-90 font-sans">
            JASON.
          </h1>
        </div>
        <div className="w-4/5">
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
      </motion.div>
    </>
  );
}

export default App;
