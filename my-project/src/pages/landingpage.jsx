import React from "react";
import { CTA } from "../components/cta";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Menu } from "../components/menu";
import { Navbar } from "../components/navbar";

export const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <CTA />
      <Footer />
    </div>
  );
};
