import React from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import * as motion from "motion/react-client"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="bg-white border-t border-[#efefef]">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 py-20 px-2.5 sm:px-0"
          >
            <motion.div variants={itemVariants}>
              <Image src={Logo} alt="Logo" />
              <div className="flex justify-start items-center gap-5 mt-10">
                <SocialIcons />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-[#515151] text-sm font-normal font-inter leading-relaxed">
                Get the latest updates by subscribing to our newsletter.
              </p>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="text"
                placeholder="Enter your email"
                className="w-full border border-[#a8a8a8] rounded-md p-2 mt-5"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#101010] text-white px-4 py-2 rounded-md mt-5"
              >
                Subscribe
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="xl:place-items-center px-5 xl:px-0">
              <ul className="text-[#565656] marker:text-[#A8A8A8] text-sm font-normal font-inter leading-normal list-disc flex flex-col gap-2">
                <li>Auctions</li>
                <li>Preview</li>
                <li>Result</li>
                <li>Sell</li>
                <li>FAQ</li>
                <li>About</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="xl:place-items-center px-5 xl:px-0">
              <ul className="text-[#565656] marker:text-[#A8A8A8] text-sm font-normal font-inter leading-normal list-disc flex flex-col gap-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#f9f9f9] flex justify-center items-center"
        >
          <div className="text-center text-[#505050] text-[12.91px] font-normal font-inter leading-[21px] py-2.5">
            © Copyright 2025 All rights reserved SB Media USA Inc
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
