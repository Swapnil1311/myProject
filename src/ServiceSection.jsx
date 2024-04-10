import React from 'react'
import img1 from './img/w1.png'
import img2 from './img/w2.png'
import img3 from './img/w3.png'
import img4 from './img/a1.png'
import img5 from './img/a2.png'
import img6 from './img/a3.png'

export const ServiceSection = () => {
  return (
    <>
<section class="px-4 md:px-0">
  <div class="mx-5 my-10 md:my-20">
    <h2 class="text-3xl md:text-4xl font-bold max-w-lg md:max-w-[550px] leading-tight">
      Discover solutions tailored to each phase of your enterprise.
    </h2>
    <p class="mt-4 md:mt-5 text-base md:text-lg text-gray-700 leading-relaxed">
      Discover tailored services supporting your business at every stage. Our solutions evolve with your needs, from inception to expansion. Empower your journey with our expertise, propelling you towards success.
    </p>
  </div>

  <div className="w-full flex justify-center flex-wrap">
    <div className="flex flex-grow">
      <div className="border-t border-b border-gray-500 border-r p-20 flex-grow">
        <img className="w-full h-40" src={img1} alt="" />
        <h1 className="mt-6 font-bold text-lg">Web Design</h1>
        <p className="font-light mt-4">
          {" "}
          Elevate your brand with captivating web design. Tailored solutions for
          a standout online presence
        </p>
        <a className="underline decoration-solid font-bold" href="#">
          Explore Now
        </a>
      </div>
      <div className="border-t border-b border-gray-500 border-r p-20 flex-grow">
        <img className="w-full h-40" src={img2} alt="" />
        <h1 className="mt-6 font-bold text-lg">Marketing</h1>
        <p className="mt-4">
          {" "}
          Boost your reach with strategic marketing. Drive growth with targeted
          campaigns.
        </p>
        <a className="underline decoration-solid font-bold" href="#">
          Explore Now
        </a>
      </div>
      <div className="border-t border-b border-gray-500 p-20 flex-grow">
        <img className="w-full h-40" src={img3} alt="" />
        <h1 className="mt-6 font-bold text-lg">Online Stores</h1>
        <p className="mt-4">
          Expand your sales with online stores. Maximize revenue through
          e-commerce
        </p>
        <a className="underline decoration-solid font-bold" href="#">
          Explore Now
        </a>
      </div>
    </div>
  </div>
  <div className="w-full flex justify-center flex-wrap pb-8">
    <div className="flex flex-grow">
      <div className="border-t border-gray-500 border-r p-20 flex-grow">
        <img className="w-full h-40" src={img4} alt="" />
        <h1 className="mt-6 font-bold text-lg">Graphic Design</h1>
        <p className="font-light mt-4">
          {" "}
          Elevate your brand with captivating web design. Tailored solutions for
          a standout online presence
        </p>
        <a className="underline decoration-solid font-bold" href="#">
          Explore Now
        </a>
      </div>
      <div className="border-t border-gray-500 border-r p-20 flex-grow">
        <img className="w-full h-40" src={img5} alt="" />
        <h1 className="mt-6 font-bold text-lg">Tasks</h1>
        <p className="mt-4">
          {" "}
          Boost your reach with strategic marketing. Drive growth with targeted
          campaigns.
        </p>
        <a className="underline decoration-solid font-bold" href="#">
          Explore Now
        </a>
      </div>
      <div className="border-t border-gray-500 p-20 flex-grow">
        <img className="w-full h-40" src={img6} alt="" />
        <h1 className="mt-6 font-bold text-lg">Web Development</h1>
        <p className="mt-4">
          Expand your sales with online stores. Maximize revenue through
          e-commerce
        </p>
        <a className="underline decoration-solid font-bold" href="#">
          Explore Now
        </a>
      </div>
    </div>


  </div>
</section>


    </>
  )
}
