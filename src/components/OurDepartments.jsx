import React from "react";
import { PiBrainThin } from "react-icons/pi";
// import Psychiatry from "../assets/icons8_brain_200px 1.jpg";
import Laboratory from "../assets/icons8_test_tube_240px 1.jpg";
import Dentistry from "../assets/icons8_tooth_100px_1 1.jpg";
import Cardiology from "../assets/icons8_heart_with_pulse_100px_1 1.jpg";
import Gynecology from "../assets/icons8_vagina_100px_1 1.jpg";
import Medicine from "../assets/icons8_caduceus_100px_1 1.jpg";
import Emergency from "../assets/icons8_Car_Accident_100px_1 1.jpg";
import Pediatrics from "../assets/icons8_Child_with_Pacifier_200px_1 1.jpg";

const OurDepartments = () => {
  return (
    <>
      <div className="bg-[#F9F9F9]">
        <div className="text-center space-y-3 p-10 ">
          <h1 className="text-[#202020] text-3xl font-semibold">
            Our Departments
          </h1>
          <p className="text-[#5B5B5B] font-normal">
            Lmedic medical care specialises in various services for the
            convenience of the patients
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 pb-10 px-24">
          <div className="flex flex-col bg-[#0052FF] items-center justify-center w-60 px-2 py-6 rounded-md">
            {/* <img className="text-xl" src={Psychiatry} alt="" /> */}
            <PiBrainThin className="text-white text-7xl" />
            <h1 className="text-white">Psychiatry</h1>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-60 px-2 py-6 rounded-md">
            <img src={Laboratory} alt="Laboratory" />
            <h1 className="text-[#0052FF]">Laboratory</h1>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-60 px-2 py-6 rounded-md">
            <img src={Dentistry} alt="Dentistry" />
            <h1 className="text-[#0052FF]">Dentistry</h1>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-60 px-2 py-6 rounded-md">
            <img src={Cardiology} alt="Cardiology" />
            <h1 className="text-[#0052FF]">Cardiology</h1>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-60 px-2 py-6 rounded-md">
            <img src={Gynecology} alt="Gynecology" />
            <h1 className="text-[#0052FF]">Gynecology</h1>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-60 px-2 py-6 rounded-md">
            <img src={Medicine} alt="Medicine" />
            <h1 className="text-[#0052FF]">Medicine</h1>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-60 px-2 py-6 rounded-md">
            <img src={Emergency} alt="Emergency" />
            <h1 className="text-[#0052FF]">Emergency</h1>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-60 px-2 py-6 rounded-md">
            <img src={Pediatrics} alt="Pediatrics" />
            <h1 className="text-[#0052FF]">Pediatrics</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDepartments;
