"use client";

import React, { useEffect, useState, useRef } from "react";
import { GlobeDemo } from "./GridGlobe";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import MagicButton from "../MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "../../data/confetti.json";
import Lottie from "react-lottie";
import { motion, useAnimation } from "framer-motion";
import { BackgroundLines } from "./background-lines";

export const GlobeComponent = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent bg-transparent">
      <GlobeDemo />
    </div>
  );
};

export const InfinityMovingCaards = () => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent bg-transparent items-center">
      <div className="flex flex-col w-full">
        <InfiniteMovingCards
          items={[
            "Rapid APIs",
            "JavaScript",
            "TypeScript",
            "React JS",
            "TaildWind CSS",
            "Graph QL",
            "Next JS",
            "Mongo DB",
            "Redux",
            "React Query",
          ]}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={[
            "Google Analytics",
            "Chart JS",
            "Fabric JS",
            "Firebase",
            "Ant Design",
            "Google Maps",
            "Puppeteer",
            "AWS",
            "Tensorflow",
          ]}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export const WorkTogetherEmail = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopy = () => {
    const text =
      "https://drive.google.com/file/d/1L-RIMOb21X6L5RH0__kqJFrVmj0yNKPs/view?usp=sharing";
    window.open(text, "_blank");
  };

  return (
    <BackgroundLines
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent bg-transparent justify-center items-center relative"
      svgOptions={{ duration: 5 }}
    >
      <div className={`absolute`}>
        <Lottie
          options={{
            loop: emailCopied,
            autoplay: emailCopied,
            animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>

      <MagicButton
        title="See Lakshayyy's Resume"
        position="left"
        handleClick={handleCopy}
        otherClasses="!bg-[#161A31]"
      />
    </BackgroundLines>
  );
};

export const CurrentProjectCompare = () => {
  const controls = useAnimation();
  const imageRef = useRef<any>(null);

  useEffect(() => {
    const scrollContainer = async () => {
      if (imageRef.current) {
        const imageHeight = imageRef.current.clientHeight;
        const containerHeight = imageRef.current.parentElement.clientHeight;

        const scrollDistance = imageHeight - containerHeight;

        await controls.start({
          y: [0, -scrollDistance],
          transition: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        });
      }
    };

    scrollContainer();
  }, [controls]);

  return (
    <div className="flex flex-1 w-full h-full rounded-xl border border-transparent bg-transparent justify-center items-baseline overflow-hidden z-0">
      <motion.div className="h-full" animate={controls}>
        <img
          ref={imageRef}
          src="/csn.png"
          className="object-contain object-cover"
        />
      </motion.div>
    </div>
  );
};
