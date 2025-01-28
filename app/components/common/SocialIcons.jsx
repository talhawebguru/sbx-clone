import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import * as motion from "motion/react-client"

const SocialIcons = () => {
  const iconVariants = {
    hover: {
      scale: 1.25,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <div className='flex items-center gap-5'>
        <motion.div variants={iconVariants} whileHover="hover">
          <FaFacebookF className='cursor-pointer hover:text-blue-600 transition-all duration-300' size={22} />
        </motion.div>
        <motion.div variants={iconVariants} whileHover="hover">
          <FaInstagram className='cursor-pointer hover:text-pink-600 transition-all duration-300' size={22} />
        </motion.div>
        <motion.div variants={iconVariants} whileHover="hover">
          <FaTwitter className='cursor-pointer hover:text-blue-400 transition-all duration-300' size={22} />
        </motion.div>
        <motion.div variants={iconVariants} whileHover="hover">
          <FaYoutube className='cursor-pointer hover:text-red-600 transition-all duration-300' size={22} />
        </motion.div>
      </div>
    </>
  )
}

export default SocialIcons