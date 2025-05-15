"use client";

import Navbar from '@/components/Navbar';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Page() {
  // Refs for sections
  const heroRef = useRef(null);
  const socialLinksRef = useRef(null);
  const footerRef = useRef(null);

  // InView hooks
  const isHeroVisible = useInView(heroRef, { once: true, amount: 0.1 });
  const isSocialLinksVisible = useInView(socialLinksRef, { once: true, amount: 0.1 });
  const isFooterVisible = useInView(footerRef, { once: true, amount: 0.1 });

  return (
    <div>
      <Navbar />
      <div>
        <motion.div
          className="flex flex-col md:flex-row justify-around mt-20 items-center px-4 md:px-0"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={heroRef}
        >
          <div className="flex flex-col items-center">
            <img
              className="h-[300px] md:h-[738px] w-full max-w-[449px]"
              src="/NEERAJ.jpg"
              alt=""
            />
            <img
              className="h-[24px] md:h-[36px] mt-10 md:mt-28"
              src="/connect.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <img
              className="h-[300px] md:h-[673px] w-full max-w-[600px]"
              src="/neerajtext.png"
              alt=""
            />
            <a
              href="/resume.pdf"
              download
              className="resume mt-5"
            >
              View Resume
            </a>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-base md:text-[22px] mt-10 md:mt-28 text-[#595959] text-center">
              <p>Email: neeraj942000@gmail.com</p>
              <p>Phone: +49-15213505913</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-40 mb-5 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isSocialLinksVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          ref={socialLinksRef}
        >
          <div className="flex gap-3 mb-4 md:mb-0">
            <a href="">
              <img className="h-[32px] md:h-[40px]" src="/linkedin.png" alt="" />
            </a>
            <a href="">
              <img className="h-[32px] md:h-[40px]" src="/behance.png" alt="" />
            </a>
            <a href="">
              <img className="h-[32px] md:h-[40px]" src="/instagram.png" alt="" />
            </a>
            <a href="">
              <img className="h-[32px] md:h-[40px]" src="/mail.png" alt="" />
            </a>
          </div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isFooterVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            ref={footerRef}
          >
            <p className="text-[#595959] text-xs md:text-[14px]">
              © Neeraj Kumar - 2025
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Page;