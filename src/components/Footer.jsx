import React from 'react'
import {FaWhatsapp,CiLocationOn,FaPhoneAlt,MdEmail,FaLinkedin,FaInstagram,FaFacebook} from "../assets/icons"

const Footer = () => {
  return (
    <section className='bg-[#000D16] border-t-4 border-[#087987] w-full hidden md:flex flex-col ' id='footer'>
<div className=" w-[90%] md:w-[90%] flex flex-col md:flex-row md:justify-between md:items-center py-4  mx-auto">
 
 {/* heading  */}
 <div className="md:w-[30%]">
     <h1 className="text-white uppercase  font-bold m-0">
        Move Active <br />Academy
          </h1>
           <p className="mt-2 text-white uppercase text-xs tracking-[0.2em]">
            Learn to move. Train to transform
          </p>
          
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
    <li><a href="">Trainers</a></li>
    <li><a href="">Gallery</a></li>
    <li><a href="">FAQs</a></li>
    <li><a href="">Contact</a></li>
</ul>
 </div>

 {/* Contact Info  */}
 <div className="flex flex-col my-4">
<p className='text-white font-semibold'>Get in Touch</p>

<ul className='flex flex-col text-white/80 gap-1 mt-4 md:text-xs'>
    <li><a href="" className='flex items-center gap-2'><FaWhatsapp className='text-white'/> +923088389163</a></li>
    <li><a href="" className='flex items-center gap-2'><MdEmail className='text-white'/>business.mabdullah@gmail.com</a></li>
    <li><a href="" className='flex items-center gap-2'><CiLocationOn className='text-white'/>Kiym,  Sadar Rawalpindi / Bank Road</a></li>
   
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

{/* copyright section  */}
<div className="w-[90%] mx-auto flex justify-between border-t border-[#087987]/80 py-4">

<div className="">
    <p className='text-white text-xs tracking-wide'>2026 M.Abdullah. All rights Reserved</p>
</div>

<div className="text-white text-xs tracking-wide flex gap-4">
    <p className=' border-r border-[#087987] pr-4'>Privacy Policy</p>
    <p>Terms & Condition</p>
</div>
</div>
    </section>
  )
}

export default Footer
