import React from "react";
import William_Geralg from "../assets/Rectangle 20.jpg";
import Mike_Ebube from "../assets/Rectangle 21.jpg";
import Egbon_Cedric from "../assets/Rectangle 22.jpg";

const OurSpecialists = () => {
  return (
    <div className="p-5">
      <div className="text-center font-semibold text-3xl font-Mulish  ">
        <h1 className="py-10 ">Our Specialists</h1>
      </div>
      <div className="md:flex justify-center gap-10 ">
        <div className="md:h-[505px] mb-5 md:mb-0 rounded-xl space-y-8 border-2 border-[#0052FF]">
          <div>
            <img src={William_Geralg} alt="William Geralg img" />
          </div>
          <div className="text-center ">
            <h1 className="text-[#3A3A3A] font-semibold text-lg">
              Dr. William Geralg
            </h1>
            <p className="text-[#0052FF]">Cardiotherapist</p>
          </div>
          <div className="flex justify-around  items-center text-[#3A3A3A80] ">
            <div className="space-y-2">
              <p>Mon - Thur</p>
              <p>Friday</p>
              <p>Saturday</p>
            </div>
            <div className="space-y-2">
              <p>08:00 - 20:00</p>
              <p>08:00 - 20:00</p>
              <p>08:00 - 20:00</p>
            </div>
          </div>
        </div>

        <div className="border-2 mb-5 md:mb-0 border-[#0052FF] md:h-[505px] rounded-lg space-y-8">
          <div>
            <img src={Mike_Ebube} alt="Mike Ebube img" />
          </div>
          <div className="text-center">
            <h1 className="text-[#3A3A3A] font-semibold text-lg">
              Dr Mike Ebube
            </h1>
            <p className="text-[#0052FF]">Gynecologist</p>
          </div>
          <div className="flex justify-around  items-center text-[#3A3A3A80]">
            <div className="space-y-2">
              <p>Mon - Thur</p>
              <p>Friday</p>
              <p>Saturday</p>
            </div>
            <div className="space-y-2">
              <p>08:00 - 20:00</p>
              <p>08:00 - 20:00</p>
              <p>08:00 - 20:00</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#0052FF] md:h-[505px] rounded-lg space-y-8">
          <div>
            <img src={Egbon_Cedric} alt="Egbon Cedric img" />
          </div>
          <div className="text-center">
            <h1 className="text-[#3A3A3A] font-semibold text-lg ">
              Dr. Egbon Cedric
            </h1>
            <p className="text-[#0052FF]">Pschiatrist</p>
          </div>
          <div className="flex justify-around  items-center text-[#3A3A3A80]">
            <div className="space-y-2">
              <p>Mon - Thur</p>
              <p>Friday</p>
              <p>Saturday</p>
            </div>
            <div className="space-y-2">
              <p>08:00 - 20:00</p>
              <p>08:00 - 20:00</p>
              <p>08:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialists;
