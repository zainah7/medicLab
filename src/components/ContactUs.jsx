import React from "react";
import bgImg from "../assets/austin-distel-7bMdiIqz_J4-unsplash 1@2x.png";
const ContactUs = () => {
  return (
    <div className="md:flex px-5 md:px-3 justify-around items-center">
      <div>
        <img
          src={bgImg}
          alt="austin-distel-img"
          className="md:h-[695px] md:w-[576px] "
        />
      </div>

      <div className="bg-white flex">
        <div className="mx-10 md:mx-0">
          <p className="text-center mb-4 md:text-xl font-semibold">
            Looking For a Professional Fullname
          </p>
          <div className="w-full mt-2 mb-5 relative  space-y-8">
            <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-[#3A3A3A]
                    absolute"
              >
                Fullname
              </p>
              <input
                placeholder="Jon Doe"
                type="text"
                className="border placeholder-gray-400 focus:outline-none
                    focus:border-black w-full  text-base block bg-white
                    border-[#0052FF] rounded-md"
              />
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-[#3A3A3A] absolute">
                Email
              </p>
              <input
                placeholder="aiseosauyiidahor@gmail.com"
                type="text"
                className="border placeholder-gray-400 focus:outline-none
                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                    border-[#0052FF] rounded-md"
              />
            </div>
            <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-[#3A3A3A] 
                    absolute"
              >
                Message
              </p>
              <textarea
                placeholder="Type message here"
                type="Message"
                className="border focus:outline-none h-[100]  md:h-[199px]
                    focus:border-black w-full bg-white border-[#0052FF] rounded-md"
              />
            </div>
            <button  className="bg-[#0052FF]  text-[#FFFFFF] my-20 px-2 py-2 rounded-md">
              Book Appointmest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
