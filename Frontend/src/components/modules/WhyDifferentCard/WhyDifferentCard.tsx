import React from "react";

const WhyDifferentCard = () => {
  return (
    <div className="relative h-[364px] w-[280px] flex flex-col gap-3 font-playfairDisplay bg-[#FFF9F1] border-solid border-2 border-[#F9C06A]">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-coffee text-[22px]">Expresso</p>
        <p className="text-[16px] text-secondry">Coffee 50% | Milk 50%</p>
        <p className="text-coffee font-bold text-[18px]">$8.50</p>
      </div>
    </div>
  );
};

export default WhyDifferentCard;
