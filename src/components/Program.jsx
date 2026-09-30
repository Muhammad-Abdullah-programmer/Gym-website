import React from 'react'
import ProgramCards from './ProgramCards'
import {CiDumbbell,FaRunning,IoFitness,HiArrowSmRight} from '../assets/icons'

const Program = () => {
  return (
   <>
   <section className='bg-[#FFFFFF] py-4 overflow-hidden w-full ' id='program'>
<div className="flex justify-center items-center md:w-[90%] px-2 w-[90%] ">

{/* shape  */}
<div className="relative hidden md:flex  p-4">

{/* cyan shape behind  */}
<div className="absolute right-20 bottom-20 h-32 w-16 rotate-15 bg-cyan-200 ">
</div>

{/* image  */}
<div className="relative z-10 h-72 overflow-hidden rounded-2xl " style={{ clipPath : "polygon(0 0, 95% 0, 100% 100%, 0 100%)"}}>

<img src="/about.png" alt="" className=' object-contain' />
</div>
 </div> 

 {/* about text  */}
<div className="flex flex-col gap-2 items-start">
  <h2 className=' md:hidden uppercase text-[#14B8A6] font-bold tracking-wider'>About us</h2>
  <h2 className='uppercase hidden md:flex text-[#14B8A6] font-bold tracking-wider'>About move active academy</h2>
  <h2 className='text-[#14202B] font-bold md:font-extrabold  text-3xl capitalize'>Education today <br /> a stronger tomorrow</h2>
  <p className=' tracking-wide'>Move Active Academy is a professional fitness education platform, focused on creating skilled trainers and helping indudials builds successfull carrers</p>

  <button className='flex items-center gap-2 text-[#14B8A6] border border-[#14B8A6] rounded-2xl px-3 py-1 font-bold'>Learn More <HiArrowSmRight/> </button>

</div>

{/* Gym boy  */}
<div className="hidden md:flex  items-center gap-2">

  <img src="/gym-boy.png" alt="gym boy" className='object-contain w-50 h-50 rounded-2xl ' />
  <h4 className='uppercase text-[#14B8A6] font-bold'>Real <br /> Skills <br /> Real <br /> Opportunties</h4>
</div>

 

</div>
   </section>
   </>
  )
}

export default Program
