import CoffeeCard from "@/components/modules/CoffeeCard/CoffeeCard";
import Title from "@/components/modules/Title/Title";
import React from "react";

const WhyDifferent = () => {
  return (
    <div className="container">
      <Title position={"center"} title={"Why are we different?"} />
      <p className="font-playfairDisplay text-xl text-center mt-4 mb-8 text-maingray">
        We don’t just make your coffee, we make your day!
      </p>
      <div className="w-full flex justify-center gap-4">
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </div>
    </div>
  );
};

export default WhyDifferent;
