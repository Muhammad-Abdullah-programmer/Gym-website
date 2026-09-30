import React from 'react'
import {LuBadgeJapaneseYen,FaTools,FaUserFriends,FaIndustry} from "../assets/icons"

const AboutUs = () => {
  return (
   <>
   <section className="bg-amber-50 min-h-[20vh] " id='aboutUs '>
<div className="md:w-[90%]  min-h-[30vh] px-2  mx-auto flex items-center justify-between overflow-hidden">

{/* first child  */}
<div className=" items-center gap-4 hidden md:flex">
    <LuBadgeJapaneseYen className='bg-[#14B8A6]/30 rounded-full p-2 md:text-5xl'/>
    <p className='font-semibold'>International <br /> Certification Support</p>
</div>

{/* Practical Training  */}
<div className="flex flex-col md:flex-row items-center gap-4">
    <FaTools className='bg-[#14B8A6]/30 rounded-full p-2 text-5xl'/>
    <p className='font-semibold'>Practical  <br /> Training</p>
</div>

{/* Expert Trainers  */}
<div className="flex flex-col md:flex-row items-center gap-4">
    <FaUserFriends className='bg-[#14B8A6]/30 rounded-full p-2 text-5xl'/>
    <p className='font-semibold'>Expert <br /> Trainers</p>
</div>

{/* FaIndustry focused curriculum */}
<div className=" items-center gap-4 hidden md:flex">
    <FaIndustry className='bg-[#14B8A6]/30 rounded-full p-2 text-5xl'/>
    <p className='font-semibold'>Industry-Focussed <br /> Curriculum</p>
</div>
 {/* currer opportunities  */}
<div className="flex flex-col md:flex-row items-center gap-4">
    <FaIndustry className='bg-[#14B8A6]/30 rounded-full p-2 text-5xl'/>
    <p className='font-semibold text-center md:text-left'>Currer <br /> Opportunities</p>
</div>
</div>
   </section>
   
   </>
  )
}

export default AboutUs
