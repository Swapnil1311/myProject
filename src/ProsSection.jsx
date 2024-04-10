import React from 'react'
import imgae1 from './img/bg2.jpeg'
import imgae2 from './img/bg3.png'


export const ProsSection = () => {
  return (
   <>
        <section>
  <div className="relative flex justify-center bg-cover bg-center gap-x-30">
    <div className="flex flex-col justify-center z-10 ml-10 my-40 items-start">
      <h1 className="text-5xl font-bold  mb-10 text-white text-left max-w-[500px]">
        Explore Our Skilled Professionals
      </h1>
      <div className="flex flex-col mb-6 relative text-white w-[400px]">
        <h2 className="text-2xl font-bold pb-5">
          Exceptional Industry Figures
        </h2>
        <p className="text-lg pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          doloremque?
        </p>
      </div>
      <div className="flex flex-col mb-6 relative text-white w-[400px]">
        <h2 className="text-2xl font-bold pb-5">Handpicked Experts</h2>
        <p className="text-lg pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          labore?
        </p>
      </div>
      <div className="flex flex-col mb-6 relative text-white w-[400px]">
        <h2 className="text-2xl font-bold pb-5">
          Prepared for the Heavy Lifting
        </h2>
        <p className="text-lg pb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eius.
        </p>
      </div>
    </div>
    <div className="absolute inset-0 z-0">
      <picture>
        <source media="(min-width: 10px) and (max-width: 1500px)" />
        <img
          src={imgae1}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </picture>
    </div>
    <picture className="z-10">
      <img
        className="md:h-[675px] mt-20"
        src={imgae2}
        alt="A Wix Marketplace profile showing a professional freelancer."
      />
    </picture>
  </div>
  </section>
   </>
  )
}
