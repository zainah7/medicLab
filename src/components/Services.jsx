import React from "react";
import nurse from "../assets/icons8_nurse_240px_1 1.jpg";
import vegan_food from "../assets/icons8_vegan_food_128px 1.jpg";
import Coronavirus from "../assets/icons8_Coronavirus_200px 1.png";

const Services = () => {
  return (
    <div>
      <div>
        <div className=" text-center p-10 ">
          <h1 className="text-[#3A3A3A] text-3xl font-semibold">
            Our Services
          </h1>
        </div>
        <div className="lg:flex  lg:space-x-10 p-10 ">
          <div className="flex flex-col items-start gap-3 border-2 border-[#0052FF] md:w-[370px] px-4 py-10 md:h-[480px] mb-5 rounded-lg space-x-4 md:mx-auto lg:mx-0 ">
            <img src={nurse} alt="nurse" />
            <h1 className="font-Mulish text-[#0052FF] font-semibold text-lg ">
              Prima Care Physicia
            </h1>
            <p className="text-[#3A3A3A80]">
              Lmedic Center provides the following health care services
            </p>
            <div className="py-3">
              <ul className="text-[#3A3A3A80] space-y-3 ">
                <li> &#x2713; &nbsp; Complete Family Healt Care</li>
                <li> &#x2713; &nbsp; EKG</li>
                <li> &#x2713; &nbsp; X-Ray</li>
                <li> &#x2713; &nbsp; Ultrasound</li>
                <li> &#x2713; &nbsp; Acute and Chronic Care</li>
                <li> &#x2713; &nbsp; Well Woman’s Exam</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 border-2 border-[#0052FF] md:w-[370px] px-4 mb-5 py-10  md:h-[480px] rounded-lg space-x-4  md:mx-auto lg:mx-0">
            <img src={vegan_food} alt="vegan food" />
            <h1 className="text-[#0052FF] font-semibold text-lg">
              Hslistic Wellness
            </h1>
            <p className="text-[#3A3A3A80]">
              You should feel yor best no matter the season
            </p>
            <div className="py-3">
              <ul className="text-[#3A3A3A80] space-y-3">
                <li> &#x2713; &nbsp; Weight loss</li>
                <li> &#x2713; &nbsp; Therapeutic medical massage</li>
                <li> &#x2713; &nbsp; Holistic skin care</li>
                <li> &#x2713; &nbsp; K-laser pain management</li>
                <li> &#x2713; &nbsp; Detoxification</li>
                <li> &#x2713; &nbsp; Hormone replacement therapy</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3  md:w-[370px] px-4 py-10 md:h-[480px]  rounded-lg bg-[#0052FF] text-[#F4FFEE] space-x-4  md:mx-auto lg:mx-0 ">
            <img src={Coronavirus} alt="Coronavirus" />
            <h1 className=" font-semibold font-Mulish text-lg">
              Allergy and Immunology
            </h1>
            <p className="text-[#FFFFFF]">
              Lmedic Center provides the following health care services
            </p>
            <div className="py-3">
              <ul className="text-[#FFFFFF] space-y-3">
                <li> &#x2713; &nbsp; Allergy and immunology</li>
                <li> &#x2713; &nbsp; Testing for Immunology</li>
                <li> &#x2713; &nbsp; Allergy treatments</li>
                <li> &#x2713; &nbsp; Asthma care</li>
                <li> &#x2713; &nbsp; Dematology</li>
                <li> &#x2713; &nbsp; Pediatric allergy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
