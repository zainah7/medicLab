import React from "react";
import doctorBag from "../assets/icons8_doctors_bag_128px_2 1.jpg";
import labItems from "../assets/icons8_lab_items_240px_1 1.jpg";
import medicalDoctor from "../assets/icons8_Medical_Doctor_200px 1.jpg";

const About = () => {
  return (
    <>
    <div className="md:flex  item-center justify-between px-16 md:space-x-6 mt-7 py-16 ">
      <div className="flex flex-col gap-3 text-center items-center">
        <img className="" src={doctorBag} alt="Doctor Bag" />
        <h1 className="text-[#0052FF] font-semibold text-lg">
          24 Hour Emergency
        </h1>
        <p>Open round the clock for convenience, quick and easy acces</p>
      </div>
      <div className="flex flex-col gap-3 text-center items-center">
        <img src={labItems} alt="lab Items" />
        <h1 className="text-[#0052FF] font-semibold text-lg">
          Complete lab sevice
        </h1>
        <p>Cost-efficient, comprehensive and clinical laboatory services</p>
      </div>
      <div className="flex flex-col gap-3 text-center items-center">
        <img src={medicalDoctor} alt="medical doctor" />
        <h1 className="text-[#0052FF] font-semibold text-lg">
          Medical Professionals
        </h1>
        <p>Qualifed and certified physicians for quality medical care</p>
      </div>
    </div>
    </>
  );
};

export default About;
