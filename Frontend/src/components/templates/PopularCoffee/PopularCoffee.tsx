import CoffeeCard from "@/components/modules/CoffeeCard/CoffeeCard";
import Title from "@/components/modules/Title/Title";
import Image from "next/image";
import React from "react";

const PopularCoffee = () => {
  return (
    <div className="container">
      <Title position={'center'} title={'Enjoy a new blend of coffee style'}/>
      <p className="font-playfairDisplay text-xl text-center my-6 text-maingray">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
      <div className="">
        <CoffeeCard/>
      </div>
    </div>
  );
};

export default PopularCoffee;
