import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Array } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {Array?.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
