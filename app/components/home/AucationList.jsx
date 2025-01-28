import React from "react";
import { CiStar } from "react-icons/ci";
import Image from "next/image";
import cars from "@/data/car";

const AucationList = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {cars.map((car) => (
          <div className="h-[700px] ">
            <div className="relative">
              <Image
                src={car.image}
                alt="slide1"
                className="w-full h-[600px] relative object-cover"
              />
              <div className="absolute  top-5 right-5">
                <button className="bg-[#101010] text-white px-4 py-2 rounded-3xl flex items-center justify-center gap-2">
                  <CiStar className="text-white" size={22} />{" "}
                  <span className="text-white text-sm font-semibold font-inter leading-normal">
                    {car.favorites}
                  </span>
                </button>
              </div>

              <div className="absolute flex gap-3 justify-between bottom-5 px-5 w-full">
                <div>
                  <h2 className="w-[38.23px] h-[23px] text-white/70 text-base font-normal font-inter leading-normal">
                    {car.year}
                  </h2>
                  <h2 className="w-[156.43px] h-6 text-white text-lg font-bold font-inter uppercase leading-normal">
                    {car.model}
                  </h2>
                  <h3 className="w-[152.33px] h-[23px] text-white/70 text-sm font-normal font-inter leading-normal">
                    {car.variant}
                  </h3>
                </div>
                <div className="self-end">
                  <h2 className="w-[167.15px] h-[42px] text-right text-white/90 text-sm font-light font-inter uppercase leading-tight tracking-wide">
                    {car.location}
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-5 px-5">
              <div>
                <div className="w-[68.56px] h-6 text-[#a1a1a1] text-sm font-normal font-inter leading-normal">
                  Latest bid
                </div>
                <div className="w-[149.97px] h-[33px] text-[#101010] text-xl font-bold font-inter leading-[33px]">
                  {car.latestBid} {car.currency}
                </div>
              </div>
              <div>
                <div className="w-[60.83px] h-4 text-[#a1a1a1] text-sm font-normal font-inter leading-none">
                  Time left
                </div>
                <div className="w-[90.84px] h-[33px] text-[#b70404] text-xl font-bold font-inter leading-[33px]">
                  {car.timeLeft}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AucationList;
