import React from "react";
import {
  HiArrowSmRight,
  CiLocationOn,
  FaCalendarAlt,
  FaCheck,
  FaRegClock,
} from "../assets/icons";

const Trainer = () => {
  return (
    <>
      <section className="bg-[#F4F7F8] py-4 " id="trainer ">
        <div className="w-[90%] mx-auto flex flex-col  gap-6 ">
          {/* heading  */}
          <div className="flex justify-between">
            <div className="title">
              <h2 className="uppercase text-[#14202B] font-bold text-2xl">
                Our Cources
              </h2>
              <p className="hidden md:flex">
                Professional education for real opportunities
              </p>
            </div>

            {/* button  */}
            <div className="">
              <a
                href="#"
                className="text-[#14B8A6] rounded-2xl font-bold flex items-center gap-2 "
              >
                View All <HiArrowSmRight />{" "}
              </a>
            </div>
          </div>

          {/* content  */}
          <div className="flex flex-col md:flex-row md:justify-between bg-[#FFFFFF]   gap-6">
            {/* image  */}
            <div className="md:flex justify-between md:w-[70%] ">
              <img
                src="/trainer-banner.png"
                alt=""
                className="rounded-2xl md:hidden"
              />
              <img
                src="/gym-des.png"
                alt=""
                className="hidden md:flex w-70 h-full rounded"
              />

              <div className="text flex flex-col gap-4 my-3">
                <h2 className="text-2xl font-bold">
                  level 2 fitness trainer certification
                </h2>

                <p className="hidden md:flex">
                  Gain the knowledge, skill and practical experience to become{" "}
                  <br /> a certified fitness trainer
                </p>

                {/* features  */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  {/* batch Announcement  */}
                  <div className="hidden md:flex gap-2 items-center justify-center ">
                    <FaCalendarAlt className="text-[#14B8A6] text-2xl  " />

                    <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:gap-2 ">
                      <h5 className="text-[#14202B] font-semibold text-sm md:text-left">
                        Next Batch
                      </h5>

                      <p className="text-[#14202B] text-xs   m-0  ">
                        22 September
                      </p>
                    </div>
                  </div>

                  {/* Duration  */}
                 <div className="hidden md:flex gap-2 items-center justify-center ">
                    <FaRegClock className="text-[#14B8A6] text-2xl " />

                    <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:gap-2 ">
                      <h5 className="text-[#14202B] font-semibold text-sm md:text-left">
                        Duration
                      </h5>

                      <p className="text-[#14202B] text-xs  m-0  ">
                        6-8 Weeks
                      </p>
                    </div>
                  </div>

                  {/* Venue  */}
                  <div className="hidden md:flex gap-2 items-center justify-center ">
                    <CiLocationOn className="text-[#14B8A6] text-2xl " />

                    <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:gap-2 ">
                      <h5 className="text-[#14202B] text-sm font-semibold md:text-left">
                        Venue
                      </h5>

                      <p className="text-[#14202B]   m-0 text-xs ">
                        loym Sadar Rawalpindi <br /> Bank Road{" "}
                      </p>
                    </div>
                  </div>
                </div>

                {/* button  */}
                <button className="bg-[#14B8A6] md:w-50 font-bold flex items-center justify-center gap-2 rounded-2xl py-3">
                  Reserve your seat <HiArrowSmRight />{" "}
                </button>
              </div>
            </div>

            {/* key points  */}
            <div className="hidden md:flex  flex-col ">
              <h4 className="font-bold my-4 ">Key points to note</h4>

              <div className="">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-3 ">
                    <FaCheck className="text-[#14B8A6]" />
                    Exercise Anatomy
                  </li>
                  <li className="flex items-center gap-3 ">
                    <FaCheck className="text-[#14B8A6]" />
                    Body Systems
                  </li>
                  <li className="flex items-center gap-3 ">
                    <FaCheck className="text-[#14B8A6]" />
                    Diet Basics
                  </li>
                  <li className="flex items-center gap-3 ">
                    <FaCheck className="text-[#14B8A6]" />
                    Assesments
                  </li>
                  <li className="flex items-center gap-3 ">
                    <FaCheck className="text-[#14B8A6]" />
                    Practical Training
                  </li>
                  <li className="flex items-center gap-3 ">
                    <FaCheck className="text-[#14B8A6]" />
                    Exercise Programming{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainer;
