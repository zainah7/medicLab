import React from "react";
import Testimonial_img from "../assets/Rectangle 41.png";
import Ellipse from "../assets/Ellipse 3.png";
import star from "../assets/Group 52-1.png";
import Orlando_Philip from "../assets/-Orlando Philip(UI Designer).png";

const Testimonial = () => {
  return (
    <div className="py-10">
      <div className="relative  text-center ">
        <img src={Testimonial_img} alt="Testimonial img" className="" />
        <div className="overlay absolute inset-0 bg-[#0052FF80] opacity-100"></div>

        <h1 className=" absolute top-1 right-96 left-1/3  translate-y-1/2  font-lg text-[#ffffff] text-3xl">
          Testimonial
        </h1>
        <img
          src={Ellipse}
          alt="Ellipse img"
          className="hidden md:block  absolute top-14 left-44 md:top-1/4 md:left-1/2"
        />
        <div class="md:space-y-7 text-sm md:text-lg absolute top-14 md:top-1/2 md:right-96 md:left-1/3 flex flex-col justify-center items-center">
          <p className="text-[#FFFFFF]">
            “Joby made searching for a job easier and reduced the time
            framewhile eliminating the office to office conventional mode of
            application”
          </p>
          <div className="flex gap-4">
            <img className="w-20" src={star} alt="star" />
            <img className="w-20" src={Orlando_Philip} alt=" Orlando Philip img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
