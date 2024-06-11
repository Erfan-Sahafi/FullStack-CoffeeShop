import Navbar from "@/components/modules/Navbar/Navbar";
import AboutBestCoffee from "@/components/templates/aboutBestCoffee/AboutBestCoffee";
import PopularCoffee from "@/components/templates/PopularCoffee/PopularCoffee";
import WhyDifferent from "@/components/templates/WhyDifferent/WhyDifferent";
import OrderNow from "@/components/templates/OrderNow/OrderNow";
import React from "react";
import Feedback from "@/components/templates/Feedback/Feedback";
import Subscribe from "@/components/templates/Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <header className="w-full min-h-screen bg-no-repeat bg-origin-content bg-cover bg-header">
        <Navbar />
        <section className="container font-playfairDisplay mt-16 py-6">
          <div className="flex text-white flex-col w-[527px] h-[422px] gap-3 justify-end">
            <p className="text-[22px]">
              We’ve got your morning covered with
            </p>
            <h1 className="font-clickerScript text-[220px]">Coffee</h1>
            <p className="text-[20px] text-justify">
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </p>
          </div>
        </section>
      </header>
      <main>
        <AboutBestCoffee/>
        <PopularCoffee/>
        <WhyDifferent/>
        <OrderNow />
        <Feedback/>
        <Subscribe/>
      </main>
    </>
  );
};

export default Home;
