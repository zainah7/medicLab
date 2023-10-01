import React, { useState } from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { BsPatchQuestion } from 'react-icons/bs';
import { LuBookKey } from 'react-icons/lu';
import PropTypes from 'prop-types';
import { PiHandshake } from 'react-icons/pi';
import { AiOutlinePhone } from 'react-icons/ai';

export default function MobileHeaderToggle({ handleToggle }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-4 rounded-full border-grey-200 md:hidden">
      <button
        type="button"
        className={'flex flex-col items-end justify-between w-5 h-4'}
        onClick={() => {
          handleToggle();
          setSidebarOpen(true);
          console.log(sidebarOpen);
        }}
      >
        <span className="w-full h-0.5 rounded-xl bg-white" />
        <span className="w-10/12 h-0.5  rounded-xl bg-white" />
        <span className="w-1/2 h-0.5 rounded-xl bg-white" />
      </button>
      <div
        className={
          sidebarOpen === false
            ? 'bg-white fixed top-0 right-0 h-full w-0 text-xl transition-all	'
            : 'bg-white fixed top-0 right-0 h-full w-10/12 text-xl transition-all	'
        }
      >
        <p
          className="mb-3 p-10 pb-0 text-right font-Outfit font-normal text-4xl"
          onClick={() => {
            setSidebarOpen(false);
            console.log(sidebarOpen);
          }}
        >
          x
        </p>
        <hr />
        <ul className="p-10 space-y-10">
          <li className="flex items-center gap-4 text-[#0052FF]">
            <span>
            <HiOutlineHome className='text-2xl' />
           </span>
            Home</li>
          <li className="flex items-center gap-4 text-[#82808F]"> 
            <span>
           <BsPatchQuestion className='text-2xl' />
          </span>
          About us</li>
          <li className="flex items-center gap-4 text-[#82808F]">
            <span>
             <PiHandshake className='text-2xl' />
            </span>
            Services</li>
          <li className="flex items-center text-[#82808F] gap-4 ">
            <span>
             <LuBookKey className='text-2xl' />
            </span>
            Blog</li>
          <li className="flex gap-4 items-center text-[#82808F]">
            <span>
             <AiOutlinePhone className='text-2xl' />
            </span>
            Contact us</li>
        </ul>
      </div>
    </div>
  );
}

MobileHeaderToggle.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};