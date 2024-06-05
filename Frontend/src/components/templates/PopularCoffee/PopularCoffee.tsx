import CoffeeCard from "@/components/modules/CoffeeCard/CoffeeCard";
import Title from "@/components/modules/Title/Title";
import Image from "next/image";
import React from "react";

const PopularCoffee = () => {
  return (
    <>
      <div className="container">
        <Title
          position={"center"}
          title={"Enjoy a new blend of coffee style"}
        />
        <p className="font-playfairDisplay text-xl text-center mt-4 mb-8 text-maingray">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
        <div className="w-full flex justify-center gap-4">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Image
          className="-mt-32"
          alt="coffee"
          width={498}
          height={272}
          src={"/coffee_blast2.svg"}
        />
      </div>
    </>
  );
};

export default PopularCoffee;
