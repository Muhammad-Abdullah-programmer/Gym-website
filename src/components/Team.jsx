import React from 'react'
import {FaStar,HiArrowSmRight,FaCheck} from "../assets/icons"

const Team = () => {

   const teamCard = [
      {
        title: "Usman Khalid",
        role : "Head fitness trainer",
        img : "/team-1.png"
      },
      {
        title: "Areeba Khan",
        role : "Head fitness trainer",
        img : "/team-2.png"
      },
      {
        title: "Hamza Malik",
        role : "Head fitness trainer",
        img : "/team-1.png"
      },
     
     
     
     
    ];
  return (
   <>
   <section className=' hidden md:flex w-[100%] py-4 bg-amber-50 my-4 ' id='testimonial'>
    <div className="w-[90%] mx-auto flex flex-col justify-between  ">

  <div className="px-2  flex justify-between  w-[100%]">
          <h2 className="uppercase font-bold text-xl text-[#14202B] ">
            Meet our trainers
          </h2>

         

          <a href="#" className="flex items-center justify-center gap-2 text-[#14B8A6] font-bold">View All Trainers <HiArrowSmRight/> </a>
        </div>

        {/* cards  */}
        <div className="flex flex-col">

            <h2 className="uppercase  text-[#14B8A6] font-semibold ">
            Learn from experienced Professionals
          </h2>

          {/* cards  */}
          <div className="flex justify-between gap-4 my-4 ">

            {teamCard.map((card)=>{

              return <div className='  flex items-center bg-white border border-white/80 shadow  '>

                <img src={card.img} alt="" className='rounded w-30 h-full object-fill' />

                <div className=" py-3 px-3 flex-1 flex flex-col ">
                  <h5 className='text-[#14202B] font-bold leading-4 '>{card.title}</h5>
                  <p className='text-[#14202B]/80 font-semibold  '>{card.role}</p>
                  <ul className='text-sm mt-3'>
                    <li className='flex items-center gap-2 font-semibold'><FaCheck className='text-[#14B8A6]'/> 10+ Years experience</li>
                    <li className='flex items-center gap-2 font-semibold'><FaCheck className='text-[#14B8A6]'/> Strenght & Conditining</li>
                    <li className='flex items-center gap-2 font-semibold'><FaCheck className='text-[#14B8A6]'/> Functional Training</li>
                  </ul>
                </div>
              </div>
            })}
          </div>
        </div>
     
    </div>

   </section>
   </>
  )
}

export default Team
