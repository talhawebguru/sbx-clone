import React from "react";
import AucationList from "./AucationList";
const Aucation = () => {
  return (
    <>
      <div className="container mx-auto bg-white shadow-lg px-2 sm:px-5 md:px-10 py-10">
        <div className="flex  items-center justify-start">
          <h2 className="w-[90.50px] h-[22px] text-[#101010] text-[16.88px] font-bold font-inter uppercase leading-snug">
            Auction
          </h2>
          <p className="text-sm text-gray-500">
            Country{" "}
            <span className="text-[#101010] text-base font-light font-inter leading-[27px] underline underline-offset-2">
              All
            </span>
          </p>
        </div>
        <AucationList />
      </div>
    </>
  );
};

export default Aucation;
