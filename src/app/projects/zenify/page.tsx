"use client";

"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";

function Page() {
  // Refs for each section
  const heroRef = useRef(null);
  const projectDetailsRef = useRef(null);
  const challengeRef = useRef(null);
  const phoneZenifyRef = useRef(null);
  const outcomeRef = useRef(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const howItWorksRef = useRef(null);
  const userResearchRef = useRef(null);
  const possibleSolutionRef = useRef(null);
  const missionStatementRef = useRef(null);
  const competitiveLandscapeRef = useRef(null);
  const personaRef = useRef(null);
  const infoArchitectureRef = useRef(null);
  const designSystemRef = useRef(null);
  const userGuideRef = useRef(null);
  const successRateRef = useRef(null);
  const zenifyRef = useRef(null);
  const endRef = useRef(null);

  // InView hooks
  const isHeroVisible = useInView(heroRef, { once: true, amount: 0.1 });
  const isProjectDetailsVisible = useInView(projectDetailsRef, { once: true, amount: 0.1 });
  const isChallengeVisible =  useInView(challengeRef, { once: true, amount: 0.1 });
  const isPhoneZenifyVisible = useInView(phoneZenifyRef, { once: true, amount: 0.1 });
  const isOutcomeVisible = useInView(outcomeRef, { once: true, amount: 0.1 });
  const isVideo1Visible = useInView(video1Ref, { once: true, amount: 0.1 });
  const isVideo2Visible = useInView(video2Ref, { once: true, amount: 0.1 });
  const isVideo3Visible = useInView(video3Ref, { once: true, amount: 0.1 });
  const isHowItWorksVisible = useInView(howItWorksRef, { once: true, amount: 0.1 });
  const isUserResearchVisible = useInView(userResearchRef, { once: true, amount: 0.1 });
  const isPossibleSolutionVisible = useInView(possibleSolutionRef, { once: true, amount: 0.1 });
  const isMissionStatementVisible = useInView(missionStatementRef, { once: true, amount: 0.1 });
  const isCompetitiveLandscapeVisible = useInView(competitiveLandscapeRef, { once: true, amount: 0.1 });
  const isPersonaVisible = useInView(personaRef, { once: true, amount: 0.1 });
  const isInfoArchitectureVisible = useInView(infoArchitectureRef, { once: true, amount: 0.1 });
  const isDesignSystemVisible = useInView(designSystemRef, { once: true, amount: 0.1 });
  const isUserGuideVisible = useInView(userGuideRef, { once: true, amount: 0.1 });
  const isSuccessRateVisible = useInView(successRateRef, { once: true, amount: 0.1 });
  const isZenifyVisible = useInView(zenifyRef, { once: true, amount: 0.1 });
  const isEndVisible = useInView(endRef, { once: true, amount: 0.1 });

  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen flex flex-col mt-10">
        {/* Header Section */}
        <motion.div
          className="px-40 pb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={heroRef}
        >
          <p className="mt-12 text-[#595959]">Data Visualization Project</p>
          <p className="text-4xl text-[#595959] mt-3">Meditation Monitoring App</p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative w-full h-screen overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={heroRef}
        >
          <img src="/ma1.jpg" alt="Image" className="w-full h-full" />
        </motion.div>

        {/* Project Details Section */}
        <div
          className="bg-[#51A0A1] w-full min-h-[200px] flex justify-evenly items-start py-12 px-8"
          ref={projectDetailsRef}
        >
          <motion.div
            className="flex flex-col text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isProjectDetailsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-[24px] font-semibold">Project Details</p>
            <div className="flex flex-col gap-y-3 pt-5">
              <p className="text-[16px] font-medium">UE Fall Semester- 2024</p>
              <p className="text-[16px] font-medium">Data Visualization Final Project</p>
              <p className="text-[16px] font-medium">October - December 2023</p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isProjectDetailsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-[24px] font-semibold">My Role</p>
            <div className="flex flex-col gap-y-3 pt-5">
              <p className="text-[16px] font-medium">UX Research</p>
              <p className="text-[16px] font-medium">UX/UI Design</p>
              <p className="text-[16px] font-medium">3D Modeling & Rendering</p>
              <p className="text-[16px] font-medium">Prototyping</p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isProjectDetailsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-[24px] font-semibold">Tool</p>
            <div className="flex flex-col gap-y-3 pt-5">
              <p className="text-[16px] font-medium">Figma</p>
              <p className="text-[16px] font-medium">Blender 3D</p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isProjectDetailsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            <p className="text-[24px] font-semibold">Duration</p>
            <div className="flex flex-col gap-y-3 pt-5">
              <p className="text-[16px] font-medium">3 Months</p>
            </div>
          </motion.div>
        </div>

        {/* The Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isChallengeVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={challengeRef}
        >
          <img src="/ma2.png" alt="" />
        </motion.div>

        {/* Phone with Zenify */}
        <motion.div
          className="px-28 py-28"
          initial={{ opacity: 0, y: 50 }}
          animate={isPhoneZenifyVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={phoneZenifyRef}
        >
          <img src="/ma3.png" alt="" />
        </motion.div>

        {/* Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isOutcomeVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={outcomeRef}
        >
          <img src="/ma4.png" alt="" />
        </motion.div>

        {/* Videos Section */}
        <div>
          {/* Video 1 - Video on Left */}
          <motion.div
            className="mt-20 flex flex-row-reverse justify-center gap-10 items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={isVideo1Visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            ref={video1Ref}
          >
            <div className="w-96 mt-52">
              <p className="text-[#9E9E9E]">
                The analysis page will depict average minute, total meditation time and average success rate of the user. The Average video time will change depending on the total minutes of meditation session.
              </p>
            </div>
            <div>
              <div>
                <img className="hvtext" src="/mv1.png" alt="" />
              </div>
              <video
                src="/ma1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[588px] w-[305px]"
              />
            </div>
          </motion.div>

          {/* Video 2 - Video on Right */}
          <motion.div
            className="mt-20 flex justify-center gap-10 items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={isVideo2Visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            ref={video2Ref}
          >
            <div className="w-96 mt-52">
              <p className="text-[#9E9E9E]">
                The heart rate will be shown in a form of big purple circle. The number of petals will be according to your average heart beat during the meditation.
              </p>
            </div>
            <div>
              <div>
                <img className="hvtext" src="/mv2.png" alt="" />
              </div>
              <video
                src="/ma2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[588px] w-[305px]"
              />
            </div>
          </motion.div>

          {/* Video 3 - Video on Left */}
          <motion.div
            className="mt-20 flex flex-row-reverse justify-center gap-10 items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={isVideo3Visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            ref={video3Ref}
          >
            <div className="w-96 mt-52">
              <p className="text-[#9E9E9E]">
                The breathing circle will have a blue color, if there is an irregularity in breathing the color will shift darker as well as there will be fluctuation in the circle. <br />
                <br />
                <br />
                The number of petal will be according to second/ Minutes which (1min = 60 seconds) so 60 Patel.
              </p>
            </div>
            <div>
              <div>
                <img className="hvtext" src="/mv3.png" alt="" />
              </div>
              <video
                src="/ma3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[588px] w-[305px]"
              />
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          className="px-40 my-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isHowItWorksVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={howItWorksRef}
        >
          <img src="/ma5.png" alt="" />
        </motion.div>

        {/* User Research */}
        <motion.div
          className="px-40 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isUserResearchVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={userResearchRef}
        >
          <img src="/ma6.png" alt="" />
        </motion.div>

        {/* Possible Solution */}
        <motion.div
          className="px-28 mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isPossibleSolutionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={possibleSolutionRef}
        >
          <img src="/ma7.png" alt="" />
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="px-52 mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isMissionStatementVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={missionStatementRef}
        >
          <img src="/ma8.png" alt="" />
        </motion.div>

        {/* Competitive Landscape */}
        <motion.div
          className="px-40 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isCompetitiveLandscapeVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={competitiveLandscapeRef}
        >
          <img src="/ma9.png" alt="" />
        </motion.div>

        {/* Persona */}
        <motion.div
          className="px-40 mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isPersonaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={personaRef}
        >
          <img src="/ma10.png" alt="" />
        </motion.div>

        {/* Information Architecture */}
        <motion.div
          className="px-40 mt-28"
          initial={{ opacity: 0, y: 50 }}
          animate={isInfoArchitectureVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={infoArchitectureRef}
        >
          <img src="/ma11.png" alt="" />
        </motion.div>

        {/* Design System */}
        <motion.div
          className="px-40 my-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isDesignSystemVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={designSystemRef}
        >
          <img src="/ma12.png" alt="" />
        </motion.div>

        {/* User Guide Screens */}
        <motion.div
          className="px-40 my-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isUserGuideVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={userGuideRef}
        >
          <img src="/ma13.png" alt="" />
        </motion.div>

        {/* Success Rate Calculation */}
        <motion.div
          className="px-40 my-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isSuccessRateVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={successRateRef}
        >
          <img src="/ma14.png" alt="" />
        </motion.div>

        {/* Zenify */}
        <motion.div
          className="my-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isZenifyVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={zenifyRef}
        >
          <img src="/ma15.png" alt="" />
        </motion.div>

        {/* End */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isEndVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={endRef}
        >
          <img src="/ma16.png" alt="" />
        </motion.div>
      </div>
    </>
  );
}

export default Page;