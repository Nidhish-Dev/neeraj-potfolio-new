"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";

function Page() {
  const heroImageRef = useRef(null);
  const projectDetailsRef = useRef(null);
  const challengeRef = useRef(null);
  const billboardRef = useRef(null);
  const introRef = useRef(null);
  const outcomeRef = useRef(null);
  const keyFeaturesRef = useRef(null);
  const mobPicRef = useRef(null);
  const discoverProblemRef = useRef(null);
  const whatILearnedRef = useRef(null);
  const personaRef = useRef(null);
  const discoverProblem2Ref = useRef(null);
  const possibleSolutionRef = useRef(null);
  const missionStatementRef = useRef(null);
  const discoverRef = useRef(null);
  const infoArchitectureRef = useRef(null);
  const typographyColorsRef = useRef(null);
  const brandingRef = useRef(null);
  const brochureRef = useRef(null);
  const logosRef = useRef(null);
  const endRef = useRef(null);

  const isHeroImageVisible = useInView(heroImageRef, { once: true, amount: 0.1 });
  const isProjectDetailsVisible = useInView(projectDetailsRef, { once: true, amount: 0.1 });
  const isChallengeVisible = useInView(challengeRef, { once: true, amount: 0.1 });
  const isBillboardVisible = useInView(billboardRef, { once: true, amount: 0.1 });
  const isIntroVisible = useInView(introRef, { once: true, amount: 0.1 });
  const isOutcomeVisible = useInView(outcomeRef, { once: true, amount: 0.1 });
  const isKeyFeaturesVisible = useInView(keyFeaturesRef, { once: true, amount: 0.1 });
  const isMobPicVisible = useInView(mobPicRef, { once: true, amount: 0.1 });
  const isDiscoverProblemVisible = useInView(discoverProblemRef, { once: true, amount: 0.1 });
  const isWhatILearnedVisible = useInView(whatILearnedRef, { once: true, amount: 0.1 });
  const isPersonaVisible = useInView(personaRef, { once: true, amount: 0.1 });
  const isDiscoverProblem2Visible = useInView(discoverProblem2Ref, { once: true, amount: 0.1 });
  const isPossibleSolutionVisible = useInView(possibleSolutionRef, { once: true, amount: 0.1 });
  const isMissionStatementVisible = useInView(missionStatementRef, { once: true, amount: 0.1 });
  const isDiscoverVisible = useInView(discoverRef, { once: true, amount: 0.1 });
  const isInfoArchitectureVisible = useInView(infoArchitectureRef, { once: true, amount: 0.1 });
  const isTypographyColorsVisible = useInView(typographyColorsRef, { once: true, amount: 0.1 });
  const isBrandingVisible = useInView(brandingRef, { once: true, amount: 0.1 });
  const isBrochureVisible = useInView(brochureRef, { once: true, amount: 0.1 });
  const isLogosVisible = useInView(logosRef, { once: true, amount: 0.1 });
  const isEndVisible = useInView(endRef, { once: true, amount: 0.1 });

  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen flex flex-col mt-10">
        <div className="px-40 pb-10">
          <p className="mt-12 text-[#595959]">User Experience with Branding Project</p>
          <p className="text-4xl text-[#595959] mt-3">Student Accommodation App</p>
        </div>

        <motion.div
          className="relative w-full h-screen overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroImageVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={heroImageRef}
        >
          <Image
            src="/hh1.jpg"
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority
          />
        </motion.div>

        {/* Project Details Section */}
        <div
          className="bg-[#0A0A0A] w-full min-h-[200px] flex justify-evenly items-start py-12 px-8"
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
              <p className="text-[16px] font-medium">UX Research</p>
              <p className="text-[16px] font-medium">UX/UI Design</p>
              <p className="text-[16px] font-medium">Branding</p>
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

        {/* the Challenge */}
        <motion.div
          className="px-28 py-40"
          initial={{ opacity: 0, y: 50 }}
          animate={isChallengeVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={challengeRef}
        >
          <img src="/hh2.png" alt="" />
        </motion.div>

        {/* billboard */}
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={isBillboardVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={billboardRef}
        >
          <img src="/hh3.png" alt=""  />
        </motion.div>

        {/* intro */}
        <motion.div
          className="px-28 py-40"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={introRef}
        >
          <img src="/hh4.png" alt=""/>
        </motion.div>

        {/* outcome */}
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={isOutcomeVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={outcomeRef}
        >
          <img src="/hh5.png" alt=""/>
        </motion.div>

        {/* keyfeatures */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isKeyFeaturesVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={keyFeaturesRef}
        >
          <div>
            {/* 1 - Video on Left */}
            <motion.div
              className="mt-20 flex flex-row-reverse justify-center gap-10 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={isKeyFeaturesVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="w-96 mt-52">
                <p className="text-[#9E9E9E]">
                  An algorithm automatically matches you with flatmates based on your preferences, so you don’t have to search through social media groups.
                </p>
              </div>
              <div>
                <div>
                  <img
                    className="hvtext"
                    src="/hv1.png"
                    alt=""

                  />
                </div>
                <video
                  src="/hh1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[588px] w-[305px]"
                />
              </div>
            </motion.div>
            {/* 2 - Video on Right */}
            <motion.div
              className="mt-20 flex justify-center gap-10 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={isKeyFeaturesVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            >
              <div className="w-96">
                <p className="text-[#9E9E9E] mt-52">
                  Browse a city, pick an apartment, check the details, and contact the owner directly via call or text.
                </p>
              </div>
              <div>
                <div>
                  <img
                    className="hvtext"
                    src="/hv2.png"
                    alt=""
  
                  />
                </div>
                <video
                  src="/hh2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[588px] w-[305px]"
                />
              </div>
            </motion.div>
            {/* 3 - Video on Left */}
            <motion.div
              className="mt-20 flex flex-row-reverse justify-center gap-10 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={isKeyFeaturesVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <div className="w-96">
                <p className="text-[#9E9E9E] mt-52">
                  Join the in-app community feature of international students and get to know each other even before moving to new place.
                </p>
              </div>
              <div>
                <div>
                  <img
                    className="hvtext"
                    src="/hv3.png"
                    alt=""
                 
                  />
                </div>
                <video
                  src="/hh3.mp4"
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

        {/* mobPic */}
        <motion.div
          className="mt-40"
          initial={{ opacity: 0, y: 50 }}
          animate={isMobPicVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={mobPicRef}
        >
          <img src="/hh6.png" alt="" />
        </motion.div>

        {/* Discover the problem */}
        <motion.div
          className="mt-40 px-40"
          initial={{ opacity: 0, y: 50 }}
          animate={isDiscoverProblemVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={discoverProblemRef}
        >
          <img src="/hh7.png" alt="" />
        </motion.div>

        {/* What I learned after the interview */}
        <motion.div
          className="mt-40 px-28"
          initial={{ opacity: 0, y: 50 }}
          animate={isWhatILearnedVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={whatILearnedRef}
        >
          <img src="/hh8.png" alt="" />
        </motion.div>

        {/* persona */}
        <motion.div
          className="mt-40 px-28"
          initial={{ opacity: 0, y: 50 }}
          animate={isPersonaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={personaRef}
        >
          <img src="/hh9.png" alt="" />
        </motion.div>

        {/* Discover a Problem */}
        <motion.div
          className="mt-40 px-40"
          initial={{ opacity: 0, y: 50 }}
          animate={isDiscoverProblem2Visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={discoverProblem2Ref}
        >
          <img src="/hh10.png" alt=""  />
        </motion.div>

        {/* Possible solution */}
        <motion.div
          className="mt-40"
          initial={{ opacity: 0, y: 50 }}
          animate={isPossibleSolutionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={possibleSolutionRef}
        >
          <img src="/hh11.png" alt=""/>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mt-40 px-40"
          initial={{ opacity: 0, y: 50 }}
          animate={isMissionStatementVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={missionStatementRef}
        >
          <img src="/hh12.png" alt=""  />
        </motion.div>

        {/* Discover */}
        <motion.div
          className="mt-40 px-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isDiscoverVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={discoverRef}
        >
          <img src="/hh13.png" alt="" />
        </motion.div>

        {/* Information Architecture */}
        <motion.div
          className="mt-40 px-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInfoArchitectureVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={infoArchitectureRef}
        >
          <img src="/hh20.png" alt=""  />
        </motion.div>

        {/* Typography & Colors */}
        <motion.div
          className="mt-40 px-34"
          initial={{ opacity: 0, y: 50 }}
          animate={isTypographyColorsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={typographyColorsRef}
        >
          <img src="/hh14.png" alt="" />
        </motion.div>

        {/* Branding */}
        <motion.div
          className="mt-40"
          initial={{ opacity: 0, y: 50 }}
          animate={isBrandingVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={brandingRef}
        >
          <img src="/hh16.png" alt="" />
        </motion.div>

        {/* Brochure */}
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={isBrochureVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={brochureRef}
        >
          <img src="/hh17.png" alt=""  />
        </motion.div>

        {/* logos */}
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={isLogosVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={logosRef}
        >
          <img src="/hh18.png" alt="" />
        </motion.div>

        {/* end */}
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          animate={isEndVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          ref={endRef}
        >
          <img src="/hh19.png" alt=""  />
        </motion.div>
      </div>
    </>
  );
}

export default Page;