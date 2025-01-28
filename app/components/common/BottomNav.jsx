import React from 'react'
import * as motion from "motion/react-client"

const BottomNav = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, y: 10 },
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
      <div className='bg-white shadow-md border-t border-[#E0E0E0]'>
        <div className='container mx-auto py-2'>
          <motion.div 
            className='flex justify-between items-center py-3.5 md:px-[100px] xl:px-[400px]'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {['Auctions', 'Preview', 'Result', 'Sell', 'FAQ', 'About'].map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.p 
                  className='text-[#101010] text-[15.12px] font-normal font-inter leading-tight tracking-wide relative group'
                  whileHover={{
                    color: '#808080',
                    transition: { duration: 0.2 }
                  }}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-[#101010] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default BottomNav