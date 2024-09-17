"use client";

import React, { useState } from "react";
import { GlobeDemo } from "./GridGlobe";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import MagicButton from "../MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "../../data/confetti.json";
import Lottie from "react-lottie";
import { Compare } from "./compare";

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
    const text = "yyy";
    navigator.clipboard.writeText(text);
    setEmailCopied(true);
  };

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent bg-transparent justify-center items-center relative">
      {/* Ensure parent div has 'relative' positioning */}
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
        title={emailCopied ? "Email is Copied!" : "Copy my email address"}
        icon={<IoCopyOutline />}
        position="left"
        handleClick={handleCopy}
        otherClasses="!bg-[#161A31]"
      />
    </div>
  );
};

export const CurrentProjectCompare = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent bg-transparent justify-center items-center relative">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="w-full"
        slideMode="hover"
      />
    </div>
  );
};
