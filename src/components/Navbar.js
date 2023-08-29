import React from "react";
import "../App";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  return (
    <div className="navbar flex justify-around m-6 relative ">
      <p>
        <img src={logo} alt="logo" />
      </p>
      <div className="flex justify-around gap-16">
        <p className="text-[#0052FF] font-Mulish">
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#about-us">About us</a>
        </p>
        <p>
          <a href="#services">Services</a>
        </p>
        <p>
          <a href="#pages">Pages</a>
        </p>
        <p>
          <a href="#blog">Blog</a>
        </p>
        <p>
          <a href="#contact-us">Contact us</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
