"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="pt-[6rem] pb-10" id="projects">
      <h1 className="heading">
        A Small Selection of <span className="text-purple">My Projects.</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, index) => (
          <CardContainer className="inter-var" key={index}>
            <CardBody
              className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] lg:w-[90%] h-auto rounded-xl p-6 border"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-full mt-2 dark:text-neutral-300"
              >
                {item.des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.github}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-sm dark:text-white"
                >
                  Github →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-semibold"
                  href={item.live}
                >
                  Live Link
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
