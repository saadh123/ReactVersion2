import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="py-5 bg-gray-900 text-white">
      <ul className="flex justify-between px-10 ">
        {/* USE SPAN TAG FOR LEFT ALIGNED LINKS  */}
        <span className="flex">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5">
            <Link to="/gallery">Gallery</Link>
          </li>
        </span>
        {/* USE SPAN TAG FOR LEFT ALIGNED LINKS  */}
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
