import React from "react";
import map from "../assets/Rectangle 69.png";
import marker from "../assets/icons8_marker_240px_1 1.jpg";
import phone from "../assets/icons8_phone_128px_1 1.jpg";
import time from "../assets/icons8_Clock_Checked_240px 1.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="mb-5">
        <img src={map} alt="map" />
      </div>
      <div className="text-center">

        <h1 className="text-3xl  font-medium">Contact Us</h1>
        <p className="text-xl text-[#3A3A3A] ">Do not Hesitate to contact us</p>
      </div>


      <div className="md:flex justify-between space-y-5 md:space-y-0 text-center container mt-3 mx-auto">
       <div className="flex flex-col items-center space-y-2">
       <img src={marker} alt="marker" />
          <h1 className="text-lg text-[#3A3A3A]">Our Address</h1>
          <p className="text-[#3A3A3A80]">
            27 Fulton Street Brooklyn, New York
          </p>
       </div>
       <div className="flex flex-col items-center space-y-2">
       <img src={phone} alt="phone" />
          <h1 className="text-lg text-[#3A3A3A]">Phone number</h1>
          <p className="text-[#3A3A3A80]">
            Manager <span className="text-[#0052FF]">+234865502357</span>
          </p>
       </div>
       <div className="flex flex-col items-center space-y-2">
       <img src={time} alt="time" />
          <h1 className="text-lg text-[#3A3A3A]">Working hours</h1>
          <p className="text-[#3A3A3A80]">Mon - Sat 8:00am - 9:00pm</p>
       </div>
      </div>

      <div className="md:flex space-y-5 md:space-y-0 justify-between items-center bg-[#0052FF] p-10 ">
         <div>
         <h1 className="text-4xl text-[#FFFFFF] font-bold ">Medilab</h1>
              <p className="text-[#FFFFFF]">Medi. Copyright 2020</p>
         </div>
         <div className="flex text-white space-x-10 text-2xl">
         <FaLinkedinIn />          
         <AiOutlineYoutube />
         <BiLogoFacebook />
          <AiOutlineInstagram />
         </div>
      </div>
    
      
    </>
  );
};

export default Footer;
