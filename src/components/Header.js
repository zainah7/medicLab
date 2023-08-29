import React from "react";
import headerImg from "../assets/Rectangle 2.jpg";

const Header = () => {
  return (
    <div className="Header ">
      <img src={headerImg} alt="header-img " />
      <div className="headerDetails  absolute bottom-2 left-64 right-64 px-72 py-72">
        <h1 className="text-white font-bold text-6xl justify-center ">
          We Provide
        </h1>
        <h2 className="text-white font-bold text-4xl ">Full Medical Care!</h2>
        <p className="text-white font-bold text-3xl flex ">
          Highest standard of customer service
        </p>
        <button className="px-10 py-3 bg-[#0052FF] gap-10 text-[#FFFFFF] rounded-sm">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Header;
