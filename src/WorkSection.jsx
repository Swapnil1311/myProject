import React from 'react'

export const WorkSection = () => {
  return (
   <>
    <section className="flex justify-evenly">
  <div className="w-full h-[450px] bg-black flex flex-col justify-center">
    <h1 className="text-4xl text-white font-bold my-10 px-10">Workflow</h1>
    <div className="flex flex-wrap justify-start items-center space-x-40 px-10">
      <div className="text-white">
        <h2 className="text-2xl font-bold">01</h2>
        <div className="w-[150px] h-1 border-gray-400 border-b-4" />
        <h4 className="text-lg font-semibold">Discover Expertise</h4>
        <p className="font-light w-40">
          Discover exceptional talents curated to match your project's
          requirements and elevate its success with unparalleled expertise and
          dedication.
        </p>
      </div>
      <div className="text-white">
        <h2 className="text-2xl font-bold">02</h2>
        <div className="w-40 h-1 border-gray-400 border-b-4" />
        <h4 className="text-lg font-semibold">Define Your Vision</h4>
        <p className="font-light w-40">
          Clarify goals and aspirations. Collaborate to refine vision and align
          strategies. Tailored solutions for your unique objectives.
        </p>
      </div>
      <div className="text-white">
        <h2 className="text-2xl font-bold">03</h2>
        <div className="w-40 h-1 border-gray-400 border-b-4" />
        <h4 className="text-lg font-semibold">Task Fulfillment</h4>
        <p className="font-light w-40">
          Ensure task completion and project finalization with our expert team.
          Achieve your objectives efficiently and effectively with our
          assistance.
        </p>
      </div>
    </div>
  </div>
</section>

   </>
  )
}
