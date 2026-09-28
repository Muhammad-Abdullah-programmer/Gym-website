import React from 'react'
import {HiArrowSmRight,FaRegPlayCircle,CiDumbbell,FaUsers,IoMdStarOutline} from "../assets/icons"
const Hero = () => {
  return (
  <>
  <section className=" relative bg-[url('/gym-background.jpg')] bg-black/80 bg-cover bg-center bg-blend-color w-full h-[70vh] flex md:items-center ">
    <div className="hero flex flex-col md:flex-row md:items-center  md:mx-auto md:justify-between  h-[100%]  md:w-[90%]  ">
        {/* Text  */}
        <div className=" md:w-[60%] h-[100%]   ">

            <div className="heading  h-[100%]  flex flex-col items-center justify-center pt-4 md:items-start gap-2 md:px-2  ">
                <p className="uppercase text-white/80  tracking-wider"> Build a stronger , healthier you </p>
                <h2 className="uppercase mt-0 text-white tracking-wide md:tracking-normal  md:text-5xl font-bold">more than a gym it's <span className='text-amber-400'> an academy </span> </h2>
                                <p className=" text-white/80 tracking-wider mt-2 text-center md:text-left md:tracking-widest"> Expert training. Personalized programs. A community that pushes you to be your best  </p>

                                {/* buttons  */}
                                <div className="  my-4 flex gap-6">
                                    <button className='cursor-pointer flex bg-yellow-400 hover:bg-yellow-300 transition-all ease-in-out duration-300 justify-between items-center px-3 py-2 gap-2 rounded font-bold'>Join Now <HiArrowSmRight/></button>

                                    <button className='flex items-center text-white/80 gap-2 border border-white px-3 py-2 rounded  hover:bg-white/10'><FaRegPlayCircle/>Watch Video</button>
                                </div>

                                {/* Features  */}
                                <div className="  my-4 flex justify-between gap-2 md:gap-0  md:w-[90%]">
                                    
                                    {/* equipment  */}
                                    <div className="flex items-center gap-2">
                                        <CiDumbbell className='text-yellow-300 text-4xl'/>
                                    <p className='text-white font-semibold m-0 leading-5 text-xs'>Modern <br /> Equipment</p>
                                    </div>

                                    {/* Experts  */}
                                      <div className="flex items-center gap-2">
                                        <FaUsers className='text-yellow-400 text-4xl'/>
                                    <p className='text-white font-semibold m-0 leading-5 text-xs'>Expert <br /> Trainers</p>
                                    </div>

                                    {/* Community  */}
                                       <div className="flex items-center gap-2">
                                        <IoMdStarOutline className='text-yellow-400 text-4xl'/>
                                    <p className='text-white font-semibold m-0 leading-5 text-xs'>Supportive <br /> Community</p>
                                    </div>

                                </div>

            </div>
        </div>

        {/* Gym picture  */}
        <div className="md:w-[50%]">
            <img src="/men-gym.png" alt="men-gym" className="object-fill h-full w-[100%]" />
        </div>
    </div>
  </section>
  </>
  )
}

export default Hero
