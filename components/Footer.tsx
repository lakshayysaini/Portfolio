import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "../data/index";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] lg:leading-[4rem]">
          Ready to make your next <span className="text-purple">SaaS Idea</span>{" "}
          into a crazy product?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s create a huge impact.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=lakshayysaini@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex lg:flex-row sm:flex-col justify-between items-center mt-[2rem]">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Lakshayyyy
        </p>

        <div className="flex items-center lg:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
