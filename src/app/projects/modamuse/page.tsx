"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";

function Page() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const lastSectionRef = useRef(null);
  const challengeRef = useRef(null);
  const mm3ImageRef = useRef(null);
  const outcomeRef = useRef(null);
  const traditionalFashionRef = useRef(null);
  const howWeSeeFashionRef = useRef(null);
  const introducingRef = useRef(null);
  const featuresRef = useRef(null);
  const whatILearnedRef = useRef(null);
  const marketResearchRef = useRef(null);
  const competitiveAnalysisRef = useRef(null);
  const insightsSynthesisRef = useRef(null);
  const howPeopleSearchRef = useRef(null);
  const visionStatementRef = useRef(null);
  const personaRef = useRef(null);
  const infoArchitectureRef = useRef(null);
  const experienceMapRef = useRef(null);
  const designSystemRef = useRef(null);
  const mobilesRef = useRef(null);
  const endRef = useRef(null);

  const isTextVisible = useInView(textRef, { once: true, amount: 0.2 });
  const isImageVisible = useInView(imageRef, { once: true, amount: 0.1 });
  const isLastSectionVisible = useInView(lastSectionRef, { once: true, amount: 0.1 });
  const isChallengeVisible = useInView(challengeRef, { once: true, amount: 0.1 });
  const isMm3ImageVisible = useInView(mm3ImageRef, { once: true, amount: 0.1 });
  const isOutcomeVisible = useInView(outcomeRef, { once: true, amount: 0.1 });
  const isTraditionalFashionVisible = useInView(traditionalFashionRef, { once: true, amount: 0.1 });
  const isHowWeSeeFashionVisible = useInView(howWeSeeFashionRef, { once: true, amount: 0.1 });
  const isIntroducingVisible = useInView(introducingRef, { once: true, amount: 0.1 });
  const isFeaturesVisible = useInView(featuresRef, { once: true, amount: 0.1 });
  const isWhatILearnedVisible = useInView(whatILearnedRef, { once: true, amount: 0.1 });
  const isMarketResearchVisible = useInView(marketResearchRef, { once: true, amount: 0.1 });
  const isCompetitiveAnalysisVisible = useInView(competitiveAnalysisRef, { once: true, amount: 0.1 });
  const isInsightsSynthesisVisible = useInView(insightsSynthesisRef, { once: true, amount: 0.1 });
  const isHowPeopleSearchVisible = useInView(howPeopleSearchRef, { once: true, amount: 0.1 });
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

        <motion.div
          className="relative w-full h-screen overflow-hidden"
          initial={{ scale: 1.2, y: 50 }}
          animate={isImageVisible ? { scale: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          ref={imageRef}
        >
          <Image
            src="/mm1.jpg"
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority
          />
        </motion.div>

        {/* Project Details Section */}
        <div ref={textRef} className="bg-[#D7197B] w-full min-h-[200px] flex justify-evenly items-start py-12 px-8">
          <motion.div
            className="flex flex-col text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isTextVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
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
            animate={isTextVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-[24px] font-semibold">My Role</p>
            <div className="flex flex-col gap-y-3 pt-5">
              <p className="text-[16px] font-medium">UX Research, Design & Prototyping</p>
              <p className="text-[16px] font-medium">User experience Design</p>
              <p className="text-[16px] font-medium">User interface Design</p>
              <p className="text-[16px] font-medium">Prototyping</p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isTextVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-[24px] font-semibold">Tool</p>
            <div className="flex flex-col gap-y-3 pt-5">
              <p className="text-[16px] font-medium">Figma</p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isTextVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <p className="text-[24px] font-semibold">Duration</p>
            <div className="flex flex-col gap-y-3 pt-5">
              <p className="text-[16px] font-medium">4 Weeks</p>
            </div>
          </motion.div>
        </div>

        {/* Overview Section */}
        <motion.div
          ref={lastSectionRef}
          className="w-full h-screen flex flex-row items-center justify-between overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isLastSectionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="max-w-[50%] flex flex-col justify-center items-start">
            <p className="text-[42px] ml-36 font-semibold text-[#FF0084]">Overview</p>
            <p className="text-[19px] ml-36 mt-4 text-[#595959]">
              Explore how AI-powered fashion insights connect with real-world style trends, helping individuals express their unique style while staying in tune with broader fashion movements in urban spaces.
            </p>
          </div>
          <div className="max-w-[50%] flex justify-end items-center">
            <Image
              src="/mm2.png"
              alt="Fashion AI Insights"
              width={600}
              height={800}
              priority
            />
          </div>
        </motion.div>

        {/* The Challenge Section */}
        <motion.div
          ref={challengeRef}
          className="flex justify-evenly items-start py-24 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isChallengeVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="text-[#595959] text-[30px] font-medium"
            initial={{ opacity: 0, y: 50 }}
            animate={isChallengeVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            The Challenge
          </motion.div>
          <motion.div
            style={{
              color: "#595959",
              fontSize: "19px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
            className="max-w-[572px]"
            initial={{ opacity: 0, y: 50 }}
            animate={isChallengeVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Explore solutions that could{" "}
            <span style={{ color: "#FF0084", fontWeight: 400 }}>
              solve the key problems
            </span>{" "}
            through the research with people in{" "}
            <span style={{ color: "#FF0084", fontWeight: 600 }}>
              staying up to date with latest fashion trend & top brands
            </span>{" "}
            around their area in real-time.
          </motion.div>
        </motion.div>

        {/* New Image mm3.png Below "The Challenge" Section */}
        <motion.div
          ref={mm3ImageRef}
          className="w-full flex justify-center mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isMm3ImageVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/mm3.png"
            alt="Additional Fashion AI Insights"
            width={500}
            height={500}
            objectFit="cover"
            priority
          />
        </motion.div>

        {/* Outcome */}
        <div className="bg-[#FF0084] w-full flex justify-evenly items-start py-2 mt-20 px-8">
          <motion.div
            ref={outcomeRef}
            className="flex justify-evenly items-start py-16 w-full text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isOutcomeVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="text-white text-[30px] font-medium"
              initial={{ opacity: 0, y: 50 }}
              animate={isOutcomeVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              The Outcome
            </motion.div>
            <motion.div
              style={{
                color: "#595959",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
              className="max-w-[572px]"
              initial={{ opacity: 0, y: 50 }}
              animate={isOutcomeVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <p className="text-white">
                An AI-powered fashion discovery platform that uses a{" "}
                <span className="bg-white" style={{ color: "#FF0084", fontWeight: 400 }}>
                  flower-opening visualization
                </span>{" "}
                to transform real-time trend data into an intuitive and visually engaging experience.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Traditional fashion trend analysis */}
        <motion.div
          ref={traditionalFashionRef}
          className="py-28"
          initial={{ opacity: 0, y: 50 }}
          animate={isTraditionalFashionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.p
            className="font-medium text-3xl text-[#595959] px-32 py-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isTraditionalFashionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Traditional fashion trend analysis
          </motion.p>
          <p className="font-normal text-md text-[#9E9E9E] px-32">
            Traditional fashion trend analysis relies on <span className="text-[#FF0084]">bar charts, text lists,</span> and static reports—methods that <span className="text-[#FF0084]">feel rigid, uninspiring, and disconnected </span>from the dynamic nature of fashion.
          </p>
          <div className="flex flex-col items-center mt-32">
            <Image
              src="/mm4.png"
              alt="Additional Fashion AI Insights"
              width={1000}
              height={300}
              objectFit="cover"
            />
          </div>
        </motion.div>

        {/* how we see fashion trends */}
        <motion.div
          ref={howWeSeeFashionRef}
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={isHowWeSeeFashionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/mm5.png"
            alt="Additional Fashion AI Insights"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </motion.div>

        {/* Introducing */}
        <motion.div
          ref={introducingRef}
          className="px-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntroducingVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.p
            className="text-[#595959] py-10 text-3xl font-medium"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntroducingVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Introducing
          </motion.p>
          <div className="flex flex-col items-center">
            <Image
              src="/mm6.png"
              alt="Introducing Moda Muse"
              width={1000}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="mm6"
              priority
            />
            {/* Fallback img tag for debugging */}
            {/* {isIntroducingVisible && (
              <img
                src="/mm6.png"
                alt="Introducing Moda Muse Fallback"
                style={{ width: "100%", height: "auto" }}
                className="mm6"
              />
            )} */}
          </div>
          <motion.p
            className="text-[#595959] font-medium text-4xl mt-40"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntroducingVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Features and Iterations
          </motion.p>
          <div className="mt-20">
            <p className="text-[#595959] font-medium text-2xl py-5">Key Feature - Flower Opening</p>
            <p className="font-normal text-md text-[#9E9E9E] mr-64">
              Moda Muse transforms this experience with an <span className="text-[#FF0084]">AI-driven, real-time visual representation</span> using a flower-opening Visualization to showcase the <span className="text-[#FF0084]">top 5 trending fashion brands in a user’s country.</span>
            </p>
            <div className="flex flex-col items-center mt-16">
              <video
                src="/mm2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[750px] h-[500px] object-cover rounded-[40px]"
              />
            </div>
          </div>
          <div>
            {/* 1 - Video on Right */}
            <div className="mt-20 flex justify-center gap-10 items-start">
              <div className="w-96">
                <p className="text-[#595959] font-medium text-2xl py-5">Analysis Screen</p>
                <p className="text-[#9E9E9E]">
                  The Analysis Page reveals the top 5 trending brands with AI-driven visual rankings. Clicking "Show More" reveals additional brands in the user's local area.
                </p>
              </div>
              <div>
                <video
                  src="/mm1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[588px] w-[305px]"
                />
              </div>
            </div>
            {/* 2 - Video on Left */}
            <div className="mt-20 flex flex-row-reverse justify-center gap-10 items-start">
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
            </div>
            {/* 3 - Video on Right */}
            <div className="mt-20 flex justify-center gap-10 items-start">
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
            </div>
            {/* 4 - Video on Left */}
            <div className="mt-20 flex flex-row-reverse justify-center gap-10 items-start">
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
            </div>
            {/* 5 - Video on Right */}
            <div className="mt-20 flex justify-center gap-10 items-start">
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
            </div>
          </div>
        </motion.div>

        {/* What I have learned */}
        <motion.div
          ref={whatILearnedRef}
          className="px-20 mt-28"
          initial={{ opacity: 0, y: 50 }}
          animate={isWhatILearnedVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.p
            className="text-[#FF0084] text-3xl font-medium"
            initial={{ opacity: 0, y: 50 }}
            animate={isWhatILearnedVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            What I have learned
          </motion.p>
          <div className="flex justify-evenly items-start w-full mt-10">
            <p className="text-[42px] text-[#595959] font-medium">Project Goal</p>
            <div className="text-[#595959]">
              <p>After I gathered all the abundant information, I have started</p>
              <p>to set the goals of research to figure out and understand</p>
              <p>more better about the specific targets</p>
              <p>that I have narrowed it down.</p>
            </div>
          </div>
        </motion.div>

        {/* Market Research Secondary Source */}
        <motion.div
          ref={marketResearchRef}
          className="px-20 mt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={isMarketResearchVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.p
            className="text-[30px] font-medium text-[#FF0084]"
            initial={{ opacity: 0, y: 50 }}
            animate={isMarketResearchVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Market Research <span className="text-[#E2E2E2]">Secondary Source</span>
          </motion.p>
          <div className="flex flex-col items-center mt-20">
            <Image
              src="/mm7.png"
              alt="Market Research Image"
              width={1000}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="mm Karma Future Regular Font Free Download7"
            />
          </div>
          <p className="text-[#595959] text-2xl mt-16 ml-28">Why users feel overwhelmed or disconnected from trends?</p>
          <div className="flex flex-col items-center mt-20">
            <Image
              src="/mm8.png"
              alt="Market Research Secondary Image"
              width={1000}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="mm7"
            />
          </div>
        </motion.div>

        {/* Competitive Analysis */}
        <motion.div
          ref={competitiveAnalysisRef}
          className="px-20 mt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={isCompetitiveAnalysisVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.p
            className="text-[#595959] font-medium text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isCompetitiveAnalysisVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Competitive Analysis
          </motion.p>
          <div className="flex flex-col items-center mt-20">
            <Image
              src="/mm9.png"
              alt="Competitive Analysis Image"
              width={1000}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="mm8"
            />
          </div>
        </motion.div>

        {/* Insights Synthesis Primary Source */}
        <motion.div
          ref={insightsSynthesisRef}
          className="px-10 mt-2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInsightsSynthesisVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mt-20">
            <img
              src="/mm11.png"
              alt="Insights Synthesis Image"

              className="mm11"
            />
          </div>
        </motion.div>

        {/* How are people searching for fashion trends today? */}
        <motion.div
          ref={howPeopleSearchRef}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isHowPeopleSearchVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mt-20">
            <img
              src="/mm12.png"
              alt="Fashion Trends Search Image"
    
              className="mm12"
            />
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          ref={visionStatementRef}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisionStatementVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mt-20">
            <Image
              src="/mm13.png"
              alt="Vision Statement Image"
              width={1000}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </motion.div>

        {/* Persona */}
        <motion.div
          ref={personaRef}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isPersonaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mt-20">
            <img
              src="/mm14.png"
              alt="Persona Image"

              className="mm11"
            />
          </div>
        </motion.div>

        {/* Information Architecture */}
        <motion.div
          ref={infoArchitectureRef}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInfoArchitectureVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mt-20">
            <Image
              src="/mm15.png"
              alt="Information Architecture Image"
              width={1000}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="mm12"
            />
          </div>
        </motion.div>

        {/* Experience Map */}
        <motion.div
          ref={experienceMapRef}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isExperienceMapVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mt-20">
            <img
              src="/mm16.png"
              alt="Experience Map Image"

              className="mm12"
            />
          </div>
        </motion.div>

        {/* Design System */}
        <motion.div
          ref={designSystemRef}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isDesignSystemVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mt-20">
            <Image
              src="/mm17.png"
              alt="Design System Image"
              width={1000}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </motion.div>

        {/* mobiles */}
        <motion.div
          ref={mobilesRef}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isMobilesVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mt-20">
            <Image
              src="/mm18.png"
              alt="Mobiles Image"
              width={1000}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="mm12"
            />
          </div>
        </motion.div>

        {/* end */}
        <motion.div
          ref={endRef}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isEndVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center mt-20">
            <Image
              src="/mm19.png"
              alt="End Image"
              width={1000}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Page;