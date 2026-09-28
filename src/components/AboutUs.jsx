import React from 'react'

const AboutUs = () => {
  return (
   <>
   <section className=" w-[100%] bg-[#171B1C]" id='aboutUs '>
<div className='flex flex-col md:flex-row gap-2'>

{/* image  */}
<div className=" md:w-[50%]">
    <img src="/fit-academy.png" alt="" className='object-cover'/>
</div>

{/* About us Content  */}
<div className=" flex flex-col mt-4 md:mt-0 py-4 md:py-0 gap-2 md:w-[40%] md:justify-evenly">

    <div className="heading flex flex-col items-center md:items-start md:px-4 md:justify-center ">
        <p className='text-yellow-400 font-bold tracking-wider'>About Us</p>
        <h2 className='uppercase text-white font-bold tracking-wider md:tracking-normal md:text-4xl'>Your fitness journey <span className='text-yellow-400'>starts here</span></h2>
        <p className='text-white/80 text-center md:text-left tracking-wide md:tracking-normal mt-2 text-sm'>At Fit academy, we beleive fitness is more than just workouts - its a lifestyle. Our mission is to educate motivate and guide you towords a stronger healthier and more confident you.</p>
    </div>

    {/* reviews  */}
    <div className="flex justify-between px-4 mt-4 md:mt-0 ">
        {/* 5 year  */}
        <div className="">
            <h2 className='text-yellow-400 font-bold text-center'>5+</h2>
            <p className='text-white text-xs font-semibold'>Years experience</p>
        </div>

        {/* 10 years  */}
          <div className="border-l border-white/80 pl-4">
            <h2 className='text-yellow-400 font-bold text-center'>10K+</h2>
            <p className='text-white text-xs font-semibold'>Happy Members</p>
        </div>

        {/* Certified Trainers  */}
         <div className="border-l border-white/80 pl-4">
            <h2 className='text-yellow-400 font-bold text-center'>20+</h2>
            <p className='text-white text-xs font-semibold'>Certified Trainers</p>
        </div>
    </div>
</div>
</div>

   </section>
   
   </>
  )
}

export default AboutUs
