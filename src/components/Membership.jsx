import React from "react";
import { FaCheck } from "../assets/icons";
const Membership = () => {
  const memberCards = [
    {
      title: "Basic",
      price: "$29",
      bg: "#ffff",
    },
    {
      title: "Pro",
      price: "$49",
      bg: "#111312",
      btnBg : "#FCC61C",
      textWhite : "#ffff"
    },
    {
      title: "Premium",
      price: "$79",
      bg: "#ffff",
    },
  ];
  return (
    <>
      <section className="membership  bg-[#F1F1EF] py-4" id="membership">
        <div className=" w-full  md:w-[90%] mx-auto flex flex-col md:flex-row items-center overflow-hidden">
          {/* heading  */}
        {/* first child  */}
        <div className="">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 md:justify-between ">
            {/* text  */}
            <div className="">
              <p className="m-0 text-gray-600 font-bold uppercase text-center md:text-left text-xs tracking-[0.2em]">
                membership
              </p>
              <h1 className="text-black text-center md:text-left uppercase text-2xl font-bold m-0">
                {" "}
                choose your plan
              </h1>
              <div className="w-15 h-1 bg-yellow-400"></div>
            </div>

            {/* button  */}
            <div className="mt-4 md:mt-0">
              <button className="bg-yellow-400 relative z-50  px-3 py-2 capitalize font-bold rounded-3xl">
                monthly
              </button>

              <button className=" -ml-7 border-1  border-gray-400 px-9 py-2 capitalize font-bold rounded-3xl">
                yearly
              </button>
            </div>
          </div>

          {/* Membership Cards  */}
          <div className="flex justify-evenly my-6 w-full md:w-[60%]">
            {/* cards  */}
            <div className="gap-3 flex flex-col md:flex-row items-center md:justify-evenly w-[100%]  px-4">
              {memberCards.map((card) => {
                return (
                  <div  className={` md:flex-1 border-1   border-gray-500 rounded-2xl flex flex-col  w-[100%]   items-center justify-evenly gap-2 min-h-[50vh] bg-[${card.bg}] `} >
                    <div className="heading border-b border-black/60 py-2">
                      <h4 className="text-black font-semibold">{card.title}</h4>
                      <h2 className="font-extrabold text-4xl" style={{color : card.btnBg }}>
                        {card.price}                        <span className=" font-normal text-sm" >/month</span>
                      </h2>
                    </div>

                    {/* features  */}
                    <div className="flex flex-col items-start">
                      <ul style={{color : card.textWhite}}>
                        <li className=" flex items-center gap-2">
                          <FaCheck className="text-yellow-400" /> Gym
                          Access{" "}
                        </li>
                        <li className=" flex items-center gap-2">
                          <FaCheck className="text-yellow-400" /> Standard
                          Equipment{" "}
                        </li>
                        <li className=" flex items-center gap-2">
                          <FaCheck className="text-yellow-400" /> Locker Room
                          Access{" "}
                        </li>
                      </ul>
                    </div>

                    {/* button  */}
                    <div className="">
                      <button className={`border-1 border-black font-bold text-black w-45 py-2 rounded-2xl bg-[${card.btnBg}]`} style={{backgroundColor :card.btnBg }}>
                        Get Started
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
         

          {/* wall div  */}
          <div className=" relative bg-[url('/wall.jpg')]  bg-cover w-[100%] md:w-[40%] h-[50vh] bg-center" >
          {/* image  */}
          <div className="absolute -top-15 md:-top-25 md:right-0 z-50">
            <img src="/gym-trainer.png" className="z-50 md:h-[50%] md:w-[80%]" alt="" />
          </div>
          <div className=" bg-white/90 inset-0 absolute"></div>
          

          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
