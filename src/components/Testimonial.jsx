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

        <h1 className=" absolute top-1 left-1/2  translate-y-1/2  font-lg text-[#ffffff] text-3xl">
          Testimonial
        </h1>
        <img
          src={Ellipse}
          alt="Ellipse img"
          className="absolute  top-1/4 left-1/2"
        />
        <p className="absolute top-1/2 left-1/3 text-[#FFFFFF]">
          “Joby made searching for a job easier and reduced the time framewhile
          eliminating the office to office conventional mode of application”
        </p>
        <div className="absolute top-1/2 left-1/2 justify-between">
          <img src={star} alt="star" />
          <img src={Orlando_Philip} alt=" Orlando Philip img" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
