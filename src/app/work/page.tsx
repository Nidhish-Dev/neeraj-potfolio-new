'use client'

import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import React from 'react'
import { motion } from 'framer-motion'

function page() {
  return (
    <div>
      <Navbar />
      <motion.div
        className='mt-5'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Projects />
      </motion.div>
    </div>
  )
}

export default page
