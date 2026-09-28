import React from 'react'
import {FaStar} from "../assets/icons"

const Testimonial = () => {
  return (
   <>
   <section className='w-[100%] py-4 bg-[#0B0F10] my-4 md:h-[30vh]' id='testimonial'>
    <div className="w-[90%] mx-auto flex flex-col justify-between gap-4 md:flex-row md:items-center">

      {/* heading  */}
      <div className=" md:w-[45%]">
          <p className="m-0 text-yellow-200 uppercase text-center md:text-left text-xs tracking-[0.2em]">
            testimonial
          </p>
          <h1 className="text-white text-center md:text-left uppercase text-2xl font-bold m-0"> what
            <span className="text-yellow-400"> our </span> members say
          </h1>
      </div>

      {/* logo  */}
      <div className=" mt-4 flex flex-col md:flex-row items-center justify-center gap-4">
        <img src="/gym-trainer.png" alt="" className='w-40 h-40 md:w-25 md:h-25 border-2 bg-white/50 border-white object-cover rounded-full' />

        
        {/* review  */}
        <div className=" md:w-[55%] flex flex-col md:justify-start gap-4 items-center md:items-start">
          <p className='text-white/80 tracking-wide md:tracking-normal text-center md:text-left'>"Fit academy changed my life the trainers are amazing and the envirnoment keeps me motivated everyday.</p>

          <h2 className='text-white font-bold'>Ayan Khan </h2>
          <div className="flex text-xs gap-1">
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
          </div>
        </div>
      </div>
    </div>

   </section>
   </>
  )
}

export default Testimonial
