import Button from "@/components/modules/Button/Button";
import Image from "next/image";
import React from "react";

const OrderNow = () => {
  return (
    <div className="my-10 bg-[#80603a] h-[547px] bg-ordernow bg-no-repeat bg-cover bg-blend-multiply font-playfairDisplay overflow-hidden">
      <div className="h-full flex items-center justify-between">
        <div className="w-[575px] pl-16 text-white">
          <h3 className="text-[54px] font-bold">
            Get a chance to have an Amazing morning
          </h3>
          <p className="text-xl leading-10 mt-4">
            We are giving you are one time opportunity to experience a better
            life with coffee.
          </p>
          <Button text={"Order Now"} />
        </div>
        <div className="flex items-center relative">
          <Image
            width={300}
            height={467}
            alt="coffee"
            src={"/images/cup.png"}
            className="z-99 absolute right-60"
          />
          <Image
            width={600}
            height={575}
            alt="coffee"
            src={"/images/coffee_bean.png"}
            className="z-1"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;

{
  /* <Image
            width={300}
            height={467}
            alt="coffee"
            src={"/images/cup.png"}
            className="absolute"
          />
          <Image
            width={657}
            height={575}
            alt="coffee"
            src={"/images/coffee_bean.png"}
          /> */
}
