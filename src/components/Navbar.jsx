import React, { useState } from "react";
import { HiArrowSmRight, IoMdMenu,RiCloseFill } from "../assets/icons";
const Navbar = () => {
  const [shownav, setShownav] = useState(false);
  const [closenav, setCloseNav] = useState(false)
  return (
    <>
      <nav className={`  md:flex-row  relative bg-[#FFFFFF]  items-center md:justify-around py-2  flex flex-col  justify-between px-3`}>
        {/* Menue  */}
        {/* logo  */}
        <div className="leading-none flex items-center justify-between w-[100%] md:w-[12%]  ">
          {/* <IoMdMenu className='  bg-green-400'/> */}

          <h1 className={`${shownav ? "text-center w-[100%] transition-all ease-in duration-300" : "text-left"} text-[#0D1B5C] py-4 md:py-0 uppercase text-lg leading-5 font-bold m-0`}>
            move active <br className="hidden md:flex"/> academy
          </h1>
      
       {/* mobile icon  */}
        <IoMdMenu className={` ${closenav ? "hidden" : "flex"} ${shownav ? "hidden" : "flex"} md:hidden font-bold text-xl md:hidden`} onClick={()=> setShownav(!false)}/>
        </div>

        {/* Nav links  */}
        <div className={`  text-[#0D1B5C] font-bold  ${shownav ? "flex flex-col transition-all ease-in-out duration-300 " : "hidden" } md:flex  `}>
          <ul className={`  flex flex-col md:flex-row  gap-4 text-sm relative group`}>
            <li className="">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Program</a>
            </li>
            <li>
              <a href="">Trainers</a>
            </li>
            <li>
              <a href="">Membership</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <div className="absolute w-[0px] h-[0px] group-hover:w-[36px] group-hover:h-[2px] -bottom-4 transition ease-linear duration-300 bg-amber-300"></div>
          </ul>
        </div>

        {/* Button  */}
        <div className="hidden md:flex">
          <button className="bg-[#14B8A6] w-35 px-3 py-2 rounded-3xl font-bold flex items-center justify-evenly">
            Enroll Now <HiArrowSmRight/>
          </button>
        </div>

       
        
        {/* close menu  */}
        <RiCloseFill className={`${shownav ? "flex" : "hidden"} text-xl absolute right-2`} onClick={()=> setShownav(false)}/>
          
      </nav>
    </>
  );
};

export default Navbar;
