import React from "react";
import "../App";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between container p-5 absolute top-0 w-full">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <ul className="hidden md:flex space-x-10 text-white font-semibold">
          <li className="text-[#0052FF] cursor-pointer font-Mulish">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="#about-us">About us</a>
          </li>
          <li className="cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="cursor-pointer">
            <a href="#pages">Pages</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact-us">Contact us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
