'use client';

import { Accordion } from 'flowbite-react';
import FemaleDoctor from "../assets/humberto-chavez-FVh_yqLR9eA-unsplash 1.png";



const Faq = () => {
  return (
    <>
      <div className='md:p-5 pt-5 bg-[#F9F9F9]'>
      <h1 className='text-center text-xl md:text-2xl my-7 md:mt-10 font-semibold'>Frequently asked Questions</h1>
<div className='md:flex justify-center px-5 items-center lg:space-x-16'>
  <div className='md:w-[300px] md:h-1/2 lg:w-1/2 h-full'>
   <Accordion>
      <Accordion.Panel>
        <Accordion.Title className='text-[#0052FF]'>
        How do i make an appoinment
        </Accordion.Title>
        <Accordion.Content>

            <p className='text-[#3A3A3A80]'>
            If you would like to make an appointent with any one of our practitioners, please contact our reception staff. Alternatively you can book an appointment online. Every effort will be made to accomodate your preffered time and choice of practitioner
            </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
      <Accordion.Title className='text-[#0052FF]'>
        How do i get a copy of my record
        </Accordion.Title>
        <Accordion.Content>
         
        <p className='text-[#3A3A3A80]'>
            If you would like to make an appointent with any one of our practitioners, please contact our reception staff. Alternatively you can book an appointment online. Every effort will be made to accomodate your preffered time and choice of practitioner
            </p>
         
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
      <Accordion.Title className='text-[#0052FF]'>
        Is there a charge for extra copies
        </Accordion.Title>
        <Accordion.Content>
      
        <p className='text-[#3A3A3A80]'>
            If you would like to make an appointent with any one of our practitioners, please contact our reception staff. Alternatively you can book an appointment online. Every effort will be made to accomodate your preffered time and choice of practitioner
            </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
      <Accordion.Title className='text-[#0052FF]'>
      How do i know the righ practitioner
        </Accordion.Title>
        <Accordion.Content>
      
        <p className='text-[#3A3A3A80]'>
            If you would like to make an appointent with any one of our practitioners, please contact our reception staff. Alternatively you can book an appointment online. Every effort will be made to accomodate your preffered time and choice of practitioner
            </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
<button className='bg-[#0052FF] text-white my-10 px-4 py-4 rounded-lg'>
Ask Questions
</button>
  </div>
  <div className='mb-0'>
  <img
          src={FemaleDoctor}
          alt="Ellipse img"
          className="md:w-[300px] lg:w-full"
          />
  </div>
</div>
</div> 
    </>
  );
};

export default Faq;
