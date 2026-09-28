import React from 'react'
import ProgramCards from './ProgramCards'
import {CiDumbbell,FaRunning,IoFitness} from '../assets/icons'

const Program = () => {
  return (
   <>
   <section className='bg-[#F1F1F1] my-4 ' id='program'>
<div className="flex flex-col md:max-w-[90%] mx-auto">

    {/* Heading  */}
    <div className=" flex flex-col md:flex-row md:justify-between items-center py-4 md:my-4">
       <div className="text md:w-[65%]">
         <p className='uppercase text-black/80 font-semibold text-center md:text-left'>Our program</p>
        <h2 className='text-black relative uppercase font-bold md:font-extrabold text-2xl text-center md:text-left'>Training for every goal</h2>
        <div className="absolute left-[32%] -bottom-[42%] bg-amber-300 w-15 h-1 hidden md:flex "></div>

        <div className="absolute left-[5%] -bottom-[46%] bg-amber-300 w-12 h-1 hidden md:flex "></div>
       </div>

      
    </div>

    {/* Cards  */}
    <div className="flex flex-col md:flex-row md:justify-evenly gap-2">
      {/* first card  */}
        <ProgramCards title="strength Traning" description="build muscle, increase strength and become your best self" bgimage="/men-gym.png" icon={<CiDumbbell/>}/>

        {/* second card  */}
        <ProgramCards title="Weight Loss" description="Effective programms to help you burn fat and stay fit." bgimage="/girl-gym.png" icon={<FaRunning/>}/>

        {/* third card  */}
          <ProgramCards title="Functional fitness" description="Improve flexibility endurance and everyday performance " bgimage="/men-fitness.png" icon={<IoFitness/>}/>

          {/* forth card  */}
              <ProgramCards title="Personal Training" description="One-on-One Coaching for faster results. " bgimage="/girl-fitness.png" icon={<IoFitness/>}/>
    </div>

</div>
   </section>
   </>
  )
}

export default Program
