"use client"
import React from 'react'
import { CiStar } from "react-icons/ci";
import Image from "next/image";
import { motion } from "motion/react"
import useCountdown from "@/app/hooks/useCountdown";

const AucationCard = ({car, index}) => {
    const timeRemaining = useCountdown(car.timeLeft);

  return (
    <>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              staggerChildren: 0.1,
            }}
            whileHover={{ y: -2 }}
            viewport={{ margin: "-100px" }}
            className="h-[700px]"
          >
            <div className="relative overflow-hidden group">
              <motion.div
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={car.image}
                  alt="slide1"
                  className="w-full h-[600px] relative object-cover"
                />
              </motion.div>

              <div className="absolute top-5 right-5">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#101010] hover:bg-[#2a2a2a] transition-colors duration-300 text-white px-4 py-2 rounded-3xl flex items-center justify-center gap-2 group"
                >
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CiStar
                      className="text-white group-hover:text-yellow-400"
                      size={22}
                    />
                  </motion.div>
                  <span className="text-white text-sm font-semibold font-inter leading-normal">
                    {car.favorites}
                  </span>
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute flex gap-3 justify-between bottom-5 px-5 w-full py-4"
              >
                <div className="z-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-white/70 text-base font-normal font-inter leading-normal"
                    whileHover={{ color: "rgba(255, 255, 255, 1)" }}
                  >
                    {car.year}
                  </motion.h2>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-white text-lg font-bold font-inter uppercase leading-normal"
                    whileHover={{ scale: 1.05 }}
                  >
                    {car.model}
                  </motion.h2>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="text-white/70 text-sm font-normal font-inter leading-normal"
                  >
                    {car.variant}
                  </motion.h3>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="self-end z-10"
                >
                  <h2 className="text-right text-white/90 text-sm font-light font-inter uppercase leading-tight tracking-wide">
                    {car.location}
                  </h2>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black pointer-events-none"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex justify-between mt-5 px-5"
            >
              <div>
                <div className="text-[#a1a1a1] text-sm font-normal font-inter leading-normal">
                  Latest bid
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-[#101010] text-xl font-bold font-inter leading-[33px]"
                >
                  {car.latestBid} {car.currency}
                </motion.div>
              </div>
              <div>
                <div className="text-[#a1a1a1] text-sm font-normal font-inter leading-none">
                  Time left
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`text-xl font-bold font-inter leading-[33px] ${
                   timeRemaining === "ENDED"
                      ? "text-gray-500"
                      : "text-[#b70404]"
                  }`}
                >
                  {timeRemaining}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
    </>
  )
}

export default AucationCard