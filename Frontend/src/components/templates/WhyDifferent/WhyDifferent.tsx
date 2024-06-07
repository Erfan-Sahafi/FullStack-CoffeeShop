import Title from "@/components/modules/Title/Title";
import WhyDifferentCard from "@/components/modules/WhyDifferentCard/WhyDifferentCard";
import React from "react";

const WhyDifferent = () => {
  return (
    <div className="container">
      <Title position={"center"} title={"Why are we different?"} />
      <p className="font-playfairDisplay text-xl text-center mt-4 mb-8 text-maingray">
        We don’t just make your coffee, we make your day!
      </p>
      <div className="w-full flex justify-center gap-4">
        <WhyDifferentCard
          iconsrc={"/images/coffee-beans1.svg"}
          title={"Supreme Beans"}
          desc={"Beans that provides great taste"}
        />
        <WhyDifferentCard
          iconsrc={"/images/badge1.svg"}
          title={"High Quality"}
          desc={"We provide the highest quality"}
        />
        <WhyDifferentCard
          iconsrc={"/images/coffee-cup1.svg"}
          title={"Extraordinary"}
          desc={"Coffee like you have never tasted"}
        />
        <WhyDifferentCard
          iconsrc={"/images/best-price1.svg"}
          title={"Affordable Price"}
          desc={"Our Coffee prices are easy to afford"}
        />
      </div>
    </div>
  );
};

export default WhyDifferent;
