import React, { useState } from "react";
import {
  MdGroupWork,
  TbMathGreater,
  PiLessThanBold,
  HiArrowSmRight
} from "../assets/icons";

const Membership = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const whyChose = [
    {
      title: "Practical Learning",
      des: "Hands on Training at the Gym",
      icon: <MdGroupWork />,
    },
    {
      title: "Expert Trainers",
      des: "Learn from experienced trainers",
      icon: <MdGroupWork />,
    },
    {
      title: "Modern Equipment",
      des: "Train with quality gym equipment",
      icon: <MdGroupWork />,
    },
    {
      title: "Supportive Community",
      des: "Train with people who motivate you",
      icon: <MdGroupWork />,
    },
  ];

  // Next card
  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % whyChose.length);
  };

  // Previous card
  const prevCard = () => {
    setCurrentCard(
      (prev) => (prev - 1 + whyChose.length) % whyChose.length
    );
  };

  return (
    <section
      className="membership overflow-hidden bg-[#06151F] py-4"
      id="membership"
    >
      <div className="mx-auto flex w-[100%] flex-col gap-4 md:w-[90%]">

        {/* Heading */}
        <div className="px-2  flex justify-between">
          <h2 className="uppercase font-bold text-white md:hidden">
            Why Choose Us
          </h2>

          <h2 className="text-white font-bold hidden md:flex uppercase">Why chose move active academy?</h2>

          <a href="#" className="flex items-center justify-center gap-2 text-[#14B8A6] font-bold">Explore All Benefits <HiArrowSmRight/> </a>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative flex w-[100%] items-center md:hidden">

          {/* Previous Arrow */}
          <button
            onClick={prevCard}
            className="absolute left-10  font-bold z-10 flex h-9 w-9 items-center justify-center rounded-full  text-[#14B8A6]"
          >
            <PiLessThanBold />
          </button>

          {/* Current Card */}
          <div className="w-[100%] px-8">
            <div className="flex min-h-[180px] w-full flex-col items-center justify-center rounded-xl bg-[#091C28] px-4 text-white">

              {/* Icon */}
              <div className="text-4xl text-[#14B8A6]">
                {whyChose[currentCard].icon}
              </div>

              {/* Title */}
              <h4 className="mt-2 text-center font-bold">
                {whyChose[currentCard].title}
              </h4>

              {/* Description */}
              <p className="mt-1 text-center text-xs font-normal">
                {whyChose[currentCard].des}
              </p>

            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextCard}
            className="absolute right-12 font-bold z-10 flex h-9 w-9 items-center justify-center rounded-full  text-[#14B8A6]"
          >
            <TbMathGreater />
          </button>

        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden w-full md:flex gap-3 md:justify-evenly">

          {whyChose.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[180px] flex-1 flex-col items-center justify-center bg-[#091C28] px-4 text-white z-50 shadow rounded-2xl"
            >

              {/* Icon */}
              <div className="text-4xl text-[#14B8A6]">
                {card.icon}
              </div>

              {/* Title */}
              <h4 className="mt-2 text-center font-bold">
                {card.title}
              </h4>

              {/* Description */}
              <p className="mt-1 text-center text-xs font-normal">
                {card.des}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Membership;