import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-16 bg-[#80603a] h-[374px] bg-ordernow bg-no-repeat bg-cover bg-blend-multiply font-playfairDisplay overflow-hidden">
      <div className="flex flex-col items-center h-full container justify-center gap-6">
        <h3 className="text-white text-center font-bold text-[54px]">
          Subscribe to get the Latest News
        </h3>
        <p className="text-xl text-white">Don’t miss out on our latest news, updates, tips and special offers</p>
        <div className="w-[642px] h-14 bg-white flex items-center justify-between rounded">
            <input type="email" className="w-full border-none pl-6 ring-0 outline-none focus:ring-0" placeholder="Enter your mail"/>
            <button className="text-coffee text-[22px] font-bold px-4 bg-[#F9C06A] h-full rounded">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
