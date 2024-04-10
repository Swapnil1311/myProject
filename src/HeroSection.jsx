import React from 'react'
import image2 from './img/image2.png';
import image1 from './img/img1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const HeroSection = () => {
  return (
   <>
   <section>
  <header className="relative flex flex-col justify-center items-center bg-cover bg-center md:flex-row md:justify-center md:gap-x-44">
    <div className="flex flex-col justify-center z-10 mx-5 md:mx-50 my-auto items-center md:items-start mt-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white text-center md:text-left max-w-[500px]">
        Empower your project with expertise and creativity.
      </h1>
      <div className="flex items-center mb-4 md:mb-6 relative">
        <input
          type="text"
          placeholder="Browse services"
          className="border border-black px-2 md:px-4 pr-12 py-2 md:py-2.5 mr-2 rounded-3xl text-base md:text-lg flex-grow"
        />
        <FontAwesomeIcon icon={faCaretDown} className="absolute right-0 top-1 bottom-0 mx-2 my-auto px-3 md:px-5" />
      </div>
      <p className="my-auto mb-3 md:mb-5 text-white text-sm md:text-lg text-center md:text-left">
        Connect with top talent
      </p>
      <div className="flex flex-wrap justify-center">
        <a
          href="#"
          className="mr-2 md:mr-4 mb-2 md:mb-4 text-xs md:text-sm text-white border-2 border-white rounded-full px-4 md:px-6 py-1 md:py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          Web Designer
        </a>
        <a
          href="#"
          className="mr-2 md:mr-4 mb-2 md:mb-4 text-xs md:text-sm text-white border-2 border-white rounded-full px-4 md:px-6 py-1 md:py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          Web Developer
        </a>
        <a
          href="#"
          className="mr-2 md:mr-4 mb-2 md:mb-4 text-xs md:text-sm text-white border-2 border-white rounded-full px-4 md:px-6 py-1 md:py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          Graphic Designer
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        <a
          href="#"
          className="mr-2 md:mr-4 mb-2 md:mb-4 text-xs md:text-sm text-white border-2 border-white rounded-full px-4 md:px-6 py-1 md:py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          SEO Expert
        </a>
        <a
          href="#"
          className="mr-2 md:mr-4 mb-2 md:mb-4 text-xs md:text-sm text-white border-2 border-white rounded-full px-4 md:px-6 py-1 md:py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          eCommerce Specialist
        </a>
        <a
          href="#"
          className="mr-2 md:mr-4 mb-2 md:mb-4 text-xs md:text-sm text-white border-2 border-white rounded-full px-4 md:px-6 py-1 md:py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          Logo Designer
        </a>
      </div>
    </div>
    <div className="mt-8  absolute md:mt-0 md:absolute inset-0 z-0">
      <picture>
        <source media="(min-width: 10px) and (max-width: 1500px)" />
        <img
          src={image1}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </picture>
    </div>
    <picture className="z-10 md:ml-8">
      <img
        className="h-[250px] md:h-[550px] mt-8 md:mt-20"
        src={image2}
        alt="A Wix Marketplace profile showing a professional freelancer."
      />
    </picture>
  </header>
  <div className="w-full h-auto px-5 md:px-60 py-10 md:py-20 flex flex-col md:flex-row justify-between bg-gray-200 items-center">
    <div className="md:border-r-2 border-zinc-400 pb-3 md:pb-0 pr-3 md:pr-10 flex flex-col items-center">
      <h2 className="text-lg md:text-3xl font-semibold">180K requests</h2>
      <p className="text-xs md:text-sm mt-1 md:mt-2">submitted in 2022</p>
    </div>
    <div className="md:border-r-2 border-zinc-400 pb-3 md:pb-0 pr-3 md:pr-10 flex flex-col items-center">
      <h2 className="text-lg md:text-3xl font-semibold">45K people</h2>
      <p className="text-xs md:text-sm mt-1 md:mt-2">access the Marketplace</p>
    </div>
    <div className="flex flex-col items-center">
      <h2 className="text-lg md:text-3xl font-semibold">4.9/5 rating</h2>
      <p className="text-xs md:text-sm mt-1 md:mt-2">average client satisfaction</p>
    </div>
  </div>
</section>



   </>
  )
}
