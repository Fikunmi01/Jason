import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
      name: "Other",
      route: "dd",
    },
    {
      id: 6,
      name: "Cart",
      route: "dd",
    },
  ];
  return (
    <>
      <div className="py-6 font-sans text-lg font-medium relative">
        {navLink.map((item) => (
          <div key={item.id} className="inline-flex left-96 relative bg-white">
            <ul className="relative">
              <li className="mr-10 text-black font-sans opacity-95">
                <Link to={item.route}>{item.name}</Link>
                {/* {item.name} */}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
