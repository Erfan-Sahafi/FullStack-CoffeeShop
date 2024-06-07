import Button from "@/components/modules/Button/Button";
import Image from "next/image";
import React from "react";

const OrderNow = () => {
  return (
    <div className="my-10 bg-[#80603a] h-[547px] bg-ordernow bg-no-repeat bg-cover bg-blend-multiply font-playfairDisplay overflow-hidden">
      <div className="h-full flex items-center">
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
        <div className="flex items-center bg-fuchsia-200 justify-end">
          <Image
            width={300}
            height={467}
            alt="coffee"
            src={"/images/cup.png"}
            className=""
          />
          <Image
            width={657}
            height={575}
            alt="coffee"
            src={"/images/coffee_bean.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
