'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (href: string) => pathname === href

  return (
<nav className='w-full bg-white fixed md:static top-0 left-0 z-50 md:z-auto'>

      <div className='flex items-center justify-between px-6 md:px-24 py-4'>
        {/* Logo */}
        <Link href='/'>
          <img className='h-10 md:h-16' src='/sign.png' alt='Logo' />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-10 text-[#2A2A2A] text-lg font-normal'>
          <li>
            <Link 
              href='/work' 
              className={`relative transition-all duration-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2A2A2A] 
                ${isActive('/work') ? 'after:w-full' : 'after:w-0'} hover:after:w-full`}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              href='/playground' 
              className={`relative transition-all duration-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2A2A2A] 
                ${isActive('/playground') ? 'after:w-full' : 'after:w-0'} hover:after:w-full`}
            >
              Playground
            </Link>
          </li>
          <li>
            <Link 
              href='/about' 
              className={`relative transition-all duration-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2A2A2A] 
                ${isActive('/about') ? 'after:w-full' : 'after:w-0'} hover:after:w-full`}
            >
              About
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className='md:hidden z-50' onClick={toggleMenu}>
          {isOpen ? <X className='h-6 w-6 text-[#2A2A2A]' /> : <Menu className='h-6 w-6 text-[#2A2A2A]' />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-10 text-2xl font-semibold text-[#2A2A2A] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link 
          href='/work' 
          onClick={() => setIsOpen(false)}
          className={isActive('/work') ? 'underline decoration-[#2A2A2A] decoration-2' : ''}
        >
          Work
        </Link>
        <Link 
          href='/playground' 
          onClick={() => setIsOpen(false)}
          className={isActive('/playground') ? 'underline decoration-[#2A2A2A] decoration-2' : ''}
        >
          Playground
        </Link>
        <Link 
          href='/about' 
          onClick={() => setIsOpen(false)}
          className={isActive('/about') ? 'underline decoration-[#2A2A2A] decoration-2' : ''}
        >
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar