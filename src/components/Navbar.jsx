import React, { useState } from "react";
import { IoMdMenu } from "../assets/icons";
const Navbar = () => {
  const [shownav, setShownav] = useState();
  return (
    <>
      <nav className="bg-[#0D1114]  md:items-center md:justify-around py-2  hidden md:flex ">
        {/* Menue  */}
        {/* logo  */}
        <div className="leading-none">
          {/* <IoMdMenu className='  bg-green-400'/> */}

          <h1 className="text-white uppercase text-2xl font-bold m-0">
            <span className="text-yellow-400">Fit</span> Academy
          </h1>
          <p className="m-0 text-white uppercase text-xs tracking-[0.2em]">
            stronger Everyday
          </p>
        </div>

        {/* Nav links  */}
        <div className="text-white">
          <ul className="flex gap-4 text-sm relative group">
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
        <div className="">
          <button className="bg-yellow-500 px-3 py-2 rounded-3xl font-bold">
            <a href="">Join Now</a>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
