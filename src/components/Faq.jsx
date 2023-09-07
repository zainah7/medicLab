'use client';

import { Accordion } from 'flowbite-react';
import FemaleDoctor from "../assets/humberto-chavez-FVh_yqLR9eA-unsplash 1.png";

const Faq = () => {
   

  
  return (
    <>
    <div className='p-5 bg-[#F9F9F9]'>
      <h1 className='text-center text-2xl font-semibold'>Frequently asked Questions</h1>
<div className='flex justify-center items-center space-x-16'>
  <div className='w-1/2 h-full'>
<Accordion>
      <Accordion.Panel>
        <Accordion.Title>
        How do i make an appoinment
        </Accordion.Title>
        <Accordion.Content>
         
            <p>
            If you would like to make an appointent with any one of our practitioners, please contact our reception staff. Alternatively you can book an appointment online. Every effort will be made to accomodate your preffered time and choice of practitioner
            </p>
        
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Is there a Figma file available?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
              has a design equivalent in our Figma file.
            </p>
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <p>
              Check out the
            </p>
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="https://flowbite.com/figma/"
              >
              <p>
                Figma design system
              </p>
            </a>
            <p>
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What are the differences between Flowbite and Tailwind UI?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://flowbite.com/pro/"
                >
                <p>
                  Flowbite Pro
                </p>
              </a>
            </li>
            <li>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://tailwindui.com/"
                rel="nofollow"
                >
                <p>
                  Tailwind UI
                </p>
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  </div>
  <div className='mb-0'>
  <img
          src={FemaleDoctor}
          alt="Ellipse img"
          className=""
          />
  </div>
</div>
<button className='bg-[#0052FF] text-white px-4 py-4 rounded-lg ml-12'>
Ask Questions
</button>
</div> 
    </>
  )
}

export default Faq