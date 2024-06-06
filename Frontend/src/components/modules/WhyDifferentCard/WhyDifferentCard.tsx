import Image from "next/image";
import React from "react";

interface whyCard {
  iconsrc: String;
  title: String;
  desc: String;
}

const WhyDifferentCard = ({iconsrc,title,desc}:whyCard) => {
  return (
    <div className="h-[284px] w-[280px] flex flex-col justify-center gap-3 font-playfairDisplay bg-[#FFEED8] border-solid border-2 border-[#F9C06A]">
      <div className="flex flex-col gap-4 items-center">
        <div>
          <Image
            width={88}
            height={88}
            alt="icon"
            src={`${iconsrc}`}
          />
        </div>
        <p className="text-[28px] font-bold text-coffee">{title}</p>
        <p className="text-maingray w-40 text-center text-[18px]">
         {desc}
        </p>
      </div>
    </div>
  );
};

export default WhyDifferentCard;
