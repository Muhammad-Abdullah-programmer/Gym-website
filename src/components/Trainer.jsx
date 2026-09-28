import React from 'react'
import {HiArrowSmRight} from "../assets/icons"
import TrainerCards from './TrainerCards'

const Trainer = () => {
  return (
   <>
   <section className='bg-[#111312] w-[100%] py-4 ' id='trainer '>
<div className="w-[90%] mx-auto py-4 flex flex-col md:flex-row">
{/* heading  */}
<div className="flex flex-col my-4 md:my-0 items-center md:items-start md:w-[50%]">
    <p className='uppercase font-semibold tracking-widest text-yellow-300'>our trainers</p>
    <h2 className='font-extrabold tracking-wider uppercase text-yellow-400 md:text-4xl'>meet our <span className='text-white '>experts</span></h2>
    <p className='text-white/80 text-center md:text-left md:w-[90%] mt-2 tracking-wide'>our certified trainers bring experience, passion and personlized coaching and to help achieve your goals.</p>

    {/* button  */}
    <button className='bg-yellow-400 font-bold flex items-center gap-2 my-4 px-3 rounded py-2'>View all trainers <HiArrowSmRight/></button>
</div>

{/* Trainer Cards  */}
<div className="md:w-[50%] flex flex-col md:flex-row justify-evenly md:gap-4 ">
    <TrainerCards image="/gym-trainer.png" title="Ali Raza" des="Strength & Condiniting "/>
    <TrainerCards image="/girl-trainer.png" title="Sara Khan" des="Weight loss Specialist "/>
    <TrainerCards image="/gym-trainer.png" title="Usman Malik" des="Personal Trainer "/>
</div>

</div>
   </section>
   </>
  )
}

export default Trainer
