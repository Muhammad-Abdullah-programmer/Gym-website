import React from 'react'
import {HiArrowSmRight} from '../assets/icons'
const Journey = () => {
  return (
  <>
  <section className=" relative w-full bg-[url('dumble.png')] md:py-6 bg-contain md:bg-size-[500px] bg-no-repeat bg-right bg-bottom-right bg-[#000D16]  ">

<div className='absolute bg-[#06151F]/70 inset-0 -z-1'></div>
<div className=" z-10 w-[90%] md:flex md:justify-center  mx-auto">

<div className="heading w-[50%] md:-ml-30 py-4 flex flex-col md:flex-row gap-3 md:gap-6 ">
   <div className="md:flex md:flex-col">
     <h2 className='text-white font-extrabold text-xl tracking-wide'>Ready to Start <br className='md:hidden' /> your Journey?</h2>
    <p className='text-white/90 text-xs'>Limited seats for the Next Batch</p>
   </div>

 {/* button  */}
<div className="">
       <button className='bg-[#14B8A6] px-2 py-2 flex items-center justify-center rounded w-full gap-2 font-bold'>
        Enroll Now <HiArrowSmRight/>
    </button>
</div>
</div>


</div>
  </section>
  </>
  )
}

export default Journey
