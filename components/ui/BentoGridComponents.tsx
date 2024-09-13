import React from "react";
import { GlobeDemo } from "./GridGlobe";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { motion } from "framer-motion";

export const GlobeComponent = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent bg-transparent">
      <GlobeDemo />
    </div>
  );
};

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "GraphQL",
  "MongoDB",
  "Redux",
  "APIs",
];

// export const SkillsComponent = () => {
//   return (
//     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent bg-transparent justify-center items-center p-6">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//         className="grid grid-cols-2 gap-4"
//       >
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
//             }}
//             className="p-4 bg-gray-800 text-white rounded-lg shadow-md text-center font-semibold"
//           >
//             {skill}
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

export const InfinityMovingCaards = () => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  return (
    <div className="flex flex-col w-full h-full min-h-[6rem] rounded-xl border border-transparent bg-transparent items-center">
      <InfiniteMovingCards
        items={[
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "TaildWind CSS",
          "Graph QL",
          "Mongo DB",
          "TypeScript",
          "Redux",
          "APIs",
        ]}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={[
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "TaildWind CSS",
          "Graph QL",
          "Mongo DB",
          "TypeScript",
          "Redux",
          "APIs",
        ]}
        direction="left"
        speed="slow"
      />
      {/* <div className="flex gap-1 lg:gap-5 w-fit">
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
          {leftLists.map((item, i) => (
            <span
              key={i}
              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
          <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
        </div>
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
          <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
          {rightLists.map((item, i) => (
            <span
              key={i}
              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
