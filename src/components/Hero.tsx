'use client'
import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25, // slower stagger
        delayChildren: 0.3,    // delay before the first item
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // slightly slower animation duration
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className='relative flex flex-col-reverse lg:flex-row items-center justify-around mt-14 lg:mt-20 px-6'>

      <img 
        className='absolute left-1/2 transform -translate-x-1/2 bottom-0 h-4 lg:h-8 mt-32' 
        src="/arrow.png" 
        alt="Arrow" 
      />

      <div className='flex flex-col justify-between h-auto lg:h-[450px] text-center lg:text-left mb-10 lg:mb-0'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className='text-4xl lg:text-6xl text-[#2A2A2A] font-light'
          >
            Hey, I’m Neeraj Kumar.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className='text-base lg:text-lg mt-4 text-[#595959]'
          >
            I'm a multidisciplinary designer. I have a passion for creating
          </motion.p>
          <motion.p
            variants={itemVariants}
            className='text-base lg:text-lg text-[#595959]'
          >
            beautiful and delightful experiences.
          </motion.p>
        </motion.div>
      </div>

      <div className='hidden lg:block'>
        <img className='h-[450px]' src="/nk.png" alt="Neeraj" />
      </div>

    </div>
  )
}

export default Hero
