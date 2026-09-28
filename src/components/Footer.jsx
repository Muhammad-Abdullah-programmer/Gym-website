import React from 'react'
import {CiLocationOn,FaPhoneAlt,MdEmail,FaLinkedin,FaInstagram,FaFacebook} from "../assets/icons"

const Footer = () => {
  return (
    <section className='bg-[#080C0D] w-full ' id='footer'>
<div className=" w-[90%] md:w-[90%] flex flex-col md:flex-row md:justify-between md:items-center py-4  mx-auto">
 
 {/* heading  */}
 <div className="md:w-[30%]">
     <h1 className="text-white uppercase text-2xl font-bold m-0">
            <span className="text-yellow-400">Fit</span> Academy
          </h1>
           <p className="m-0 text-white uppercase text-xs tracking-[0.2em]">
            stronger Everyday
          </p>
          <p className='text-white/80 md:text-sm tracking-wider md:mt-4 '>More than a gym its a community dedicated to a healthier, stronger you.</p>
 </div>

 {/* quick links  */}
 <div className="flex flex-col my-4">
<p className='text-white font-semibold'>Quick Links</p>

<ul className='flex flex-col text-white/80 mt-4 md:text-xs'>
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Programs</a></li>
    <li><a href="">Trainers</a></li>
</ul>
 </div>

 {/* Membership  */}
 <div className="flex flex-col my-4">

<ul className='flex flex-col text-white/80 mt-4 md:text-xs'>
    <li><a href="">Membership</a></li>
    <li><a href="">Gallery</a></li>
    <li><a href="">Contact</a></li>
    <li><a href="">FAQs</a></li>
</ul>
 </div>

 {/* Contact Info  */}
 <div className="flex flex-col my-4">
<p className='text-white font-semibold'>Contact Info</p>

<ul className='flex flex-col text-white/80 gap-1 mt-4 md:text-xs'>
    <li><a href="" className='flex items-center gap-2'><CiLocationOn className='text-white'/>123 fitness street lahore</a></li>
    <li><a href="" className='flex items-center gap-2'><FaPhoneAlt className='text-white'/>+923088389163</a></li>
    <li><a href="" className='flex items-center gap-2'><MdEmail className='text-white'/>business.mabdullah@gmail.com</a></li>
   
</ul>
 </div>

 {/* social media  */}
  <div className="flex flex-col my-4">
<p className='text-white font-semibold'>Follow Us</p>

<ul className='flex  text-white/80 gap-3 mt-4'>
    <li><a href="" className='flex items-center gap-2'><FaLinkedin className='text-white'/></a></li>
    <li><a href="" className='flex items-center gap-2'><FaInstagram className='text-white'/></a></li>
    <li><a href="" className='flex items-center gap-2'><FaFacebook className='text-white'/></a></li>
   
</ul>
 </div>

</div>


    </section>
  )
}

export default Footer
