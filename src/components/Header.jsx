import React from "react";
import headerImg from "../assets/Rectangle 2.jpg";

const Header = () => {
  return (
    <div className="overflow-hidden ">
      <div className="imageWrapper relative">
        <img src={headerImg} alt="header-img" className="w-full" />
        <div className="overlay absolute inset-0 bg-gray-900 opacity-40"></div>
      </div>

      <div class="space-y-7 absolute top-1/3 left-1/3 flex flex-col justify-center items-center">
        <h2 className="text-white font-bold text-4xl justify-center  ">
          We Provide
        </h2>
        <h1 className="text-white font-bold text-6xl ">Full Medical Care!</h1>
        <p className="text-white  text-xl flex ">
          Highest standard of customer service
        </p>
        <button className="px-10 py-3 bg-[#0052FF] gap-10 text-[#FFFFFF] rounded-md">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Header;
