'use client';

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 80,
          damping: 15,
        },
      });
    }
  }, [inView, controls]);

  return (
    <>
      <Navbar />
      <div className="mt-14">
        <Hero />
      </div>

      <motion.div
        ref={ref}
        className="mt-20"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={controls}
      >
        <Projects />
      </motion.div>

      <Footer />
    </>
  );
}
