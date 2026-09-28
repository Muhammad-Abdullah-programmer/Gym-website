import React from 'react'
import {HiArrowSmRight} from "../assets/icons"

const ProgramCards = ({icon,image, title, description, bgimage}) => {

    
  return (
    <div className='bg-center bg-no-repeat md:bg-cover bg-size-[90%] rounded-xl  px-2 py-2 bg-black/90 h-[20vh] flex flex-col justify-end  min-h-[60vh] md:min-h-[60vh]' style={{backgroundImage : `url(${bgimage})`}}>

      <div className="text-yellow-400 text-3xl">{icon}</div>
      <h3 className='text-white font-bold uppercase tracking-wider md:tracking-wide'>{title}</h3>
      <p className='text-white/80 md:leading-5'>{description}</p>
      <a href="#" className='text-yellow-400 my-2 md:my-1 font-semibold flex items-center gap-2'>Learn More <HiArrowSmRight/></a>
    </div>
  )
}

export default ProgramCards
