"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";

function page() {
  // Create refs for each section to track visibility
  const startingRef = useRef(null);
  const projectDetailsRef = useRef(null);
  const overviewRef = useRef(null);
  const challengeRef = useRef(null);
  const mobileImgRef = useRef(null);
  const outcomeRef = useRef(null);
  const trendAnalysisRef = useRef(null);
  const howWeSeeFashionRef = useRef(null);
  const introducingRef = useRef(null);
  const featuresIterationsRef = useRef(null);
  const projectGoalRef = useRef(null);
  const marketResearchRef = useRef(null);
  const competitiveAnalysisRef = useRef(null);
  const insightsSynthesisRef = useRef(null);
  const visionStatementRef = useRef(null);
  const personaRef = useRef(null);
  const infoArchitectureRef = useRef(null);
  const experienceMapRef = useRef(null);
  const designSystemRef = useRef(null);
  const mobilesRef = useRef(null);
  const endRef = useRef(null);

  // Track visibility for each section using useInView
  const isStartingVisible = useInView(startingRef, { once: true, amount: 0.1 });
  const isProjectDetailsVisible = useInView(projectDetailsRef, { once: true, amount: 0.1 });
  const isOverviewVisible = useInView(overviewRef, { once: true, amount: 0.1 });
  const isChallengeVisible = useInView(challengeRef, { once: true, amount: 0.1 });
  const isMobileImgVisible = useInView(mobileImgRef, { once: true, amount: 0.1 });
  const isOutcomeVisible = useInView(outcomeRef, { once: true, amount: 0.1 });
  const isTrendAnalysisVisible = useInView(trendAnalysisRef, { once: true, amount: 0.1 });
  const isHowWeSeeFashionVisible = useInView(howWeSeeFashionRef, { once: true, amount: 0.1 });
  const isIntroducingVisible = useInView(introducingRef, { once: true, amount: 0.1 });
  const isFeaturesIterationsVisible = useInView(featuresIterationsRef, { once: true, amount: 0.1 });
  const isProjectGoalVisible = useInView(projectGoalRef, { once: true, amount: 0.1 });
  const isMarketResearchVisible = useInView(marketResearchRef, { once: true, amount: 0.1 });
  const isCompetitiveAnalysisVisible = useInView(competitiveAnalysisRef, { once: true, amount: 0.1 });
  const isInsightsSynthesisVisible = useInView(insightsSynthesisRef, { once: true, amount: 0.1 });
  const isVisionStatementVisible = useInView(visionStatementRef, { once: true, amount: 0.1 });
  const isPersonaVisible = useInView(personaRef, { once: true, amount: 0.1 });
  const isInfoArchitectureVisible = useInView(infoArchitectureRef, { once: true, amount: 0.1 });
  const isExperienceMapVisible = useInView(experienceMapRef, { once: true, amount: 0.1 });
  const isDesignSystemVisible = useInView(designSystemRef, { once: true, amount: 0.1 });
  const isMobilesVisible = useInView(mobilesRef, { once: true, amount: 0.1 });
  const isEndVisible = useInView(endRef, { once: true, amount: 0.1 });

  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen flex flex-col mt-10">
        <div className="px-40 pb-10">
          <p className="mt-12 text-[#595959]">User Experience with Visual Design Project</p>
          <p className="text-4xl text-[#595959] mt-3">Fashion Trend Analyzing App</p>
        </div>

        {/* Starting Section */}
        <motion.div
          className="relative w-full h-screen overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isStartingVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={startingRef}
        >
          <img
            src="/mm1.jpg"
            alt="Image"
            className="w-full h-full"
          />
        </motion.div>

        {/* Project Details Section */}
        <div
          className="bg-[#D7197B] w-full min-h-[200px] flex justify-evenly items-start py-12 px-8"
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
              <p className="text-[16px] font-medium">Solo Project - 2024</p>
              <p className="text-[16px] font-medium">Mobile Application</p>
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
              <p className="text-[16px] font-medium">User experience Research</p>
              <p className="text-[16px] font-medium">User experience Design</p>
              <p className="text-[16px] font-medium">User interface Design</p>
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
              <p className="text-[16px] font-medium">4 Weeks</p>
            </div>
          </motion.div>
        </div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isOverviewVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={overviewRef}
        >
          <img src="/mm2.png" alt="" />
        </motion.div>

        {/* Challenge Section */}
        <motion.div
          className="px-28 pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isChallengeVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={challengeRef}
        >
          <img src="/mm3.png" alt="" />
        </motion.div>

        {/* Mobile Img Section */}
        <motion.div
          className="px-64 pt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={isMobileImgVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={mobileImgRef}
        >
          <img src="/mm4.png" alt="" />
        </motion.div>

        {/* Outcome Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isOutcomeVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={outcomeRef}
        >
          <img src="/mm5.png" alt="" />
        </motion.div>

        {/* Trend Analysis Section */}
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={isTrendAnalysisVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={trendAnalysisRef}
        >
          <img src="/mm6.png" alt="" />
        </motion.div>

        {/* How We See Fashion Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isHowWeSeeFashionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={howWeSeeFashionRef}
        >
          <img src="/mm7.png" alt="" />
        </motion.div>

        {/* Introducing Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntroducingVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={introducingRef}
        >
          <img src="/mm8.png" alt="" />
        </motion.div>

        {/* Features and Iterations Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isFeaturesIterationsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={featuresIterationsRef}
        >
          <img src="/mm9.png" alt="" />

          <motion.div
            className="flex flex-col items-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isFeaturesIterationsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          >
            <video
              src="/mm1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[750px] h-[500px] object-cover rounded-[40px]"
            />
          </motion.div>

          <div>
            {/* 1 - Video on Right */}
            <motion.div
              className="mt-20 flex justify-center gap-10 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={isFeaturesIterationsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <div className="w-96">
                <p className="text-[#595959] font-medium text-2xl py-5">Analysis Screen</p>
                <p className="text-[#9E9E9E]">
                  The Analysis Page reveals the top 5 trending brands with AI-driven visual rankings. Clicking "Show More" reveals additional brands in the user's local area.
                </p>
              </div>
              <div>
                <video
                  src="/mm2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[588px] w-[305px]"
                />
              </div>
            </motion.div>

            {/* 2 - Video on Left */}
            <motion.div
              className="mt-20 flex flex-row-reverse justify-center gap-10 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={isFeaturesIterationsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              <div className="w-96">
                <p className="text-[#595959] font-medium text-2xl py-5">Show more</p>
                <p className="text-[#9E9E9E]">
                  A complete list of brands will appear which are on top with less trending. Tap on one to explore the brand.
                </p>
              </div>
              <div>
                <video
                  src="/mm3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[588px] w-[305px]"
                />
              </div>
            </motion.div>

            {/* 3 - Video on Right */}
            <motion.div
              className="mt-20 flex justify-center gap-10 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={isFeaturesIterationsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            >
              <div className="w-96">
                <p className="text-[#595959] font-medium text-2xl py-5">Analysis Screen</p>
                <p className="text-[#9E9E9E]">
                  Selecting a specific brand name brings up a detailed page with new trends and arrivals for that brand.
                </p>
              </div>
              <div>
                <video
                  src="/mm4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[588px] w-[305px]"
                />
              </div>
            </motion.div>

            {/* 4 - Video on Left */}
            <motion.div
              className="mt-20 flex flex-row-reverse justify-center gap-10 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={isFeaturesIterationsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            >
              <div className="w-96">
                <p className="text-[#595959] font-medium text-2xl py-5">Trend Around you</p>
                <p className="text-[#9E9E9E]">
                  Check out the brands which are famous in your area.
                </p>
              </div>
              <div>
                <video
                  src="/mm5.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[588px] w-[305px]"
                />
              </div>
            </motion.div>

            {/* 5 - Video on Right */}
            <motion.div
              className="mt-20 flex justify-center gap-10 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={isFeaturesIterationsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            >
              <div className="w-96">
                <p className="text-[#595959] font-medium text-2xl py-5">Community</p>
                <p className="text-[#9E9E9E]">
                  Share your thoughts and information about trending local brands and clothes around you.
                </p>
              </div>
              <div>
                <video
                  src="/mm6.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[588px] w-[305px]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Goal Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isProjectGoalVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={projectGoalRef}
        >
          <img src="/mm10.png" alt="" />
        </motion.div>

        {/* Market Research Secondary Source Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isMarketResearchVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={marketResearchRef}
        >
          <img src="/mm11.png" alt="" />
        </motion.div>

        {/* Competitive Analysis Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isCompetitiveAnalysisVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={competitiveAnalysisRef}
        >
          <img src="/mm12.png" alt="" />
        </motion.div>

        {/* Insights Synthesis Primary Source Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInsightsSynthesisVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={insightsSynthesisRef}
        >
          <img src="/mm13.png" alt="" />
        </motion.div>

        {/* Vision Statement Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisionStatementVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={visionStatementRef}
        >
          <img src="/mm14.png" alt="" />
        </motion.div>

        {/* Persona Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isPersonaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={personaRef}
        >
          <img src="/mm15.png" alt="" />
        </motion.div>

        {/* Information Architecture Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInfoArchitectureVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={infoArchitectureRef}
        >
          <img src="/mm16.png" alt="" />
        </motion.div>

        {/* Experience Map Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isExperienceMapVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={experienceMapRef}
        >
          <img src="/mm17.png" alt="" />
        </motion.div>

        {/* Design System Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isDesignSystemVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={designSystemRef}
        >
          <img src="/mm18.png" alt="" />
        </motion.div>

        {/* Mobiles Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isMobilesVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={mobilesRef}
        >
          <img src="/mm19.png" alt="" />
        </motion.div>

        {/* End Section */}
        <motion.div
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isEndVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={endRef}
        >
          <img src="/mm20.png" alt="" />
        </motion.div>
      </div>
    </>
  );
}

export default page;