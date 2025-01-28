"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation , Autoplay } from "swiper/modules";
import * as motion from "motion/react-client";
import Image from "next/image";
import Slider1 from "@/public/images/slide1.webp";
import Slider2 from "@/public/images/slide2.webp";
import Slider3 from "@/public/images/slide3.webp";

const HeroSlider = () => {
  const slideData = [
    { image: Slider1, title: "Tesla Model S", description: "Experience Luxury Electric" },
    { image: Slider2, title: "BMW i8", description: "Future of Performance" },
    { image: Slider3, title: "Porsche Taycan", description: "Electric Evolution" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto relative">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper h-[300px] sm:h-[600px] object-cover"
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[300px] sm:h-[600px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className=" h-[300px] sm:h-[600px] w-full object-contain sm:object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                  <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl"
                  >
                    {slide.description}
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default HeroSlider;
