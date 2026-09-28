import React from 'react'
import {FaFacebook,FaInstagram,FaLinkedin} from "../assets/icons"

const TrainerCards = ({image,title,des}) => {
  return (
    <div className='bg-[#191B1A]  flex flex-col gap-2 items-center w-[80%] md:w-[90%] mx-auto'>
      
      <img src={image} alt="" className='object-cover  h-35 w-40 ' />

      {/* text  */}
      <div className="bg-[#0F1110] flex flex-col justify-center p-2 items-center z-50 w-[100%]">
       <h3 className='text-white font-semibold tracking-wide text-2xl md:text-sm'>{title}</h3>
       <p className='text-white/80 tracking-wide md:text-xs'>{des}</p>

       {/* icons  */}
       <div className="flex gap-4 my-3 ">
        <FaFacebook className="text-white"/>
        <FaInstagram className="text-white"/>
        <FaLinkedin className="text-white"/>
       </div>
      </div>
    </div>
  )
}

export default TrainerCards
