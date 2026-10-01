import React from 'react'
import {FaStar,HiArrowSmRight} from "../assets/icons"

const Testimonial = () => {

   const pathCard = [
      {
        title: "Gym / Fitness Trainer",
        bgimg : "/path-1.png"
      },
      {
        title: "Professional Trainer",
        bgimg : "/path-2.png"
      },
      {
        title: "Freelancing",
        bgimg : "/path-3.png"
      },
      {
        title: "Online Coaching",
        bgimg : "/path-4.png"
      },
      {
        title: "Start Your Own Fitness Business",
        bgimg : "/path-5.png"
      },
     
     
     
    ];
  return (
   <>
   <section className='w-[100%] py-4 bg-amber-50 my-4 ' id='testimonial'>
    <div className="w-[90%] mx-auto flex flex-col justify-between  ">

  <div className="px-2  flex justify-between  w-[100%]">
          <h2 className="uppercase font-bold text-xl text-[#14202B] ">
            career pathways
          </h2>

         

          <a href="#" className="flex items-center justify-center gap-2 text-[#14B8A6] font-bold">Explore Career Pathways <HiArrowSmRight/> </a>
        </div>

        {/* cards  */}
        <div className="flex flex-col">

            <h2 className="uppercase font-extrabold text-2xl text-[#14202B] ">
            Turn you passion  into a profession
          </h2>

          {/* cards  */}
          <div className="md:grid  mt-4 md:grid-cols-5 md:overflow-visible snap-x snap-mandatory overflow-x-auto  gap-4 flex">

            {pathCard.map((card)=>{

              return <div className='snap-start shrink-0 w-full md:w-auto rounded-2xl flex md:flex-col overflow-hidden md:h-full '>

                <img src={card.bgimg} alt="" className='w-full h-30 bg-center' />

                <div className="bg-[#091C28]/90 py-3 px-3 flex-1 flex items-center ">
                  <h5 className='text-white w-30'>{card.title}</h5>
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

export default Testimonial
