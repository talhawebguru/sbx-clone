import React from "react";
import TopNav from "./TopNav";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import BottomNav from "./BottomNav";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <TopNav />
      <div className="bg-white shadow-md">
        <div className="flex justify-between items-center container gap-10 sm:gap-0 mx-auto py-2.5 px-2.5 sm:px-0">
          <div>
            <CiMenuBurger width={28} height={28} className="cursor-pointer" />
          </div>
          <div>
            <Image src={Logo} alt="Logo" className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-2">
            <CiSearch width={28} height={28} className="cursor-pointer" />
            <span className="text-center cursor-pointer text-[#101010] text-[15.12px] font-normal font-inter leading-tight tracking-wide hidden md:block">
              Sign In
            </span>
            <BsPersonFill className=" md:hidden block cursor-pointer" width={28} height={28} />
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Header;
