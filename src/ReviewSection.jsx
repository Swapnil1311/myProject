import React from 'react'
import image from './img/a4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export const ReviewSection = () => {
  return (
    <>
        <>
  <section className="flex justify-center items-center h-screen">
    <div className="text-center">
      <h1 className="text-4xl text-black font-bold pt-10">User Reviews</h1>
      <p className="text-lg font-thin text-black w-[785px] py-10">
        "Experience seamless website creation with our intuitive builder,
        offering endless customization options and user-friendly tools. Build
        your online presence effortlessly and stand out with our responsive
        designs and robust features."
      </p>
      <div className="relative pb-2">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className='pt-2'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <h2 className="text-lg pb-5">Stella Cascade</h2>
      <p className="pb-4 font-thin">
        Shopify store developed by Wix partner{" "}
        <span className="underline">UrbanGlow Emporium</span>
      </p>
      <div className="mt-4">
        <img src={image} alt="" className="mx-auto w-[350px] h-auto" />
      </div>
    </div>
  </section>
  <div className="mb-5" />
</>

    </>
  )
}
