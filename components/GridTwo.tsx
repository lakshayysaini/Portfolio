import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import {
  GlobeComponent,
  InfinityMovingCaards,
  WorkTogetherEmail,
  CurrentProjectCompare,
} from "./ui/BentoGridComponents";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem] z-100">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent bg-transparent"></div>
);
const items = [
  {
    title: "The Technologies are Beautiful",
    description: "and their libraries are just damn.",
    header: <InfinityMovingCaards />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Build something together?",
    description: "would love to discuss some good scalable ideas on a call !",
    header: <WorkTogetherEmail />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Try to Move This Globe",
    description: "Building impactful product >>> FAANG jobs",
    header: <GlobeComponent />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <CurrentProjectCompare />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
