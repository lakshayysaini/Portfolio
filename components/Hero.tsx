import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = [<>Frontend&nbsp;Developer</>, "Drummer", "Designer"];

  const handleGoToGithub = () => {
    window.open("https://github.com/lakshayysaini", "_blank");
  };
  return (
    <div className="lg:py-10 sm:pt-10 sm:pb-0">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />

        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            I Love Tech and Music.
          </h1>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming concepts into seamless User Experiences"
          />

          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Lakshayyy, a Frontend Dev Based in F-town.
          </p> */}

          <div className="text-center md:tracking-wider sm:mt-2 mb-4 text-base font-medium md:text-lg lg:text-2xl">
            Hiii, I&apos;m Lakshayyy a
            <FlipWords words={words} className="text-white" />
            currently based in Delhi, NCR.
          </div>

          <a
            href="https://github.com/lakshayysaini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
