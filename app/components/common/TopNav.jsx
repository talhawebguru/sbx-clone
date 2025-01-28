import React from 'react'
import * as motion from "motion/react-client"

const TopNav = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <div className='bg-[#f3f3f3]'>
        <motion.div 
          className='flex md:justify-start justify-center items-center gap-4 py-2 container mx-auto px-4'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="text-[#101010] text-xs font-normal font-inter leading-[21px] border-r border-[#a8a8a8] pr-4 hidden md:block">
            US +1 323-407-8523
          </motion.p>
          <motion.p variants={itemVariants} className="text-[#101010] text-xs font-normal font-inter leading-[21px] border-r border-[#a8a8a8] pr-4 hidden md:block">
            UAE +971 4 876 1764
          </motion.p>
          <motion.p variants={itemVariants} className="text-[#101010] text-xs font-normal font-inter leading-[21px] border-r border-[#a8a8a8] pr-4">
            UK +44 20 4525 8014
          </motion.p>
          <motion.p 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-[#101010] text-xs font-normal font-inter leading-[21px] cursor-pointer"
          >
            sales@sbxcars.com
          </motion.p>
        </motion.div>
      </div>
    </>
  )
}

export default TopNav