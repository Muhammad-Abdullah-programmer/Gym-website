import React from 'react'
import {HiArrowSmRight,FaRegPlayCircle,CiDumbbell,FaUsers,IoMdStarOutline,FaCalendarAlt,CiLocationOn} from "../assets/icons"
const Hero = () => {
  return (
  <>
  <section className=" relative bg-[#000509]/90 bg-[url('mobile-hero-men.png')] bg-cover bg-top-left md:bg-[url('/hero-men.png')]  md:bg-auto  md:bg-top-right md:bg-no-repeat w-full h-[70vh] flex md:items-center ">
    <div className="hero flex flex-col md:flex-row md:items-center  md:mx-auto md:justify-between  h-[100%] w-[100%]  md:w-[90%]  ">
        {/* Text  */}
        <div className="  overflow-hidden flex flex-col px-2  justify-center w-[65%] md:w-[60%] h-full    ">

            <div className="heading  h-[100%]  flex flex-col md:items-center justify-center pt-4 md:items-start gap-2 md:px-2  ">
                <p className="uppercase text-[#14B8A6] text-xs  md:tracking-wider"> Learn to move <br className='flex md:hidden'/> train to transform </p>
               <div className=" md:border-l-3 border-[#14B8A6] md:pl-3  ">
                 <h3 className="uppercase mt-0 text-white tracking-wide md:tracking-normal  md:text-4xl text-xs  font-bold">Level 2 fitness training</h3>
                <h2 className="uppercase mt-0 text-[#14B8A6] tracking-wide md:tracking-wider  md:text-6xl font-bold">certification</h2>
               </div>
                                <p className=" text-white/80 w-[100%] mt-2  md:text-left md:tracking-wide md:w-[60%]"> Professional education. Practical experience. Real career opportunities  </p>


                                {/* Features  */}
                                <div className="  my-4 flex flex-col md:flex-row justify-between gap-2 md:gap-0  md:w-[70%]">
                                    
                                    {/* Batch Announcement  */}
                                    <div className="flex items-center gap-3">
                                        <FaCalendarAlt className='text-[#14B8A6] text-3xl'/>
                                    <p className='text-white md:font-semibold m-0 leading-5 text-xs'>Next Batch <br /> 22 September</p>
                                    </div>

                                    {/* Experts  */}
                                       <div className="flex items-center gap-3">
                                        <CiLocationOn className='text-[#14B8A6] text-3xl'/>
                                    <p className='text-white md:font-semibold m-0 leading-5 text-xs'>Gym, Sadar Rawalpindi / <br /> Bank Road</p>
                                    </div>

                                    {/* Community  */}
                                      <div className="flex items-center gap-3">
                                        <FaUsers className='text-[#14B8A6] text-3xl'/>
                                    <p className='text-white md:font-semibold m-0 leading-5 text-xs'>Limited Seates <br /> Available</p>
                                    </div>

                                </div>

                                 {/* buttons  */}
                                <div className="  my-4 flex flex-col md:flex-row gap-3 md:gap-6">
                                    <button className='cursor-pointer flex bg-[#14B8A6]  transition-all ease-in-out duration-300 justify-center items-center px-3 py-3 gap-2  text-xs w-30 md:w-40 rounded-2xl font-bold'>Enroll Now <HiArrowSmRight/></button>

                                    <button className='flex items-center text-white/80 gap-2 border border-[#14B8A6] px-3 py-2 rounded-2xl  hover:bg-white/10 text-xs w-30 '><FaRegPlayCircle/>Watch Video</button>
                                </div>
                               

            </div>
        </div>

      
    </div>
  </section>
  </>
  )
}

export default Hero
