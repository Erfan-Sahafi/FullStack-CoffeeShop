"use client";
import Title from "@/components/modules/Title/Title";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./feedback.css";

// import required modules
import { Navigation } from "swiper/modules";

const Feedback = () => {
  return (
    <>
      <div className="relative">
        <Title position={"center"} title={"Our coffee perfection feedback"} />
        <p className="font-playfairDisplay text-xl text-center mt-4 mb-8 text-maingray">
          Our customers has amazing things to say about us
        </p>
        <div className="w-full flex justify-end absolute top-24">
          <Image
            className="-mt-32 z-10"
            alt="coffee"
            width={498}
            height={272}
            src={"/coffee_blast2.svg"}
          />
        </div>
        <div className="w-full flex justify-center">
          <Swiper slidesPerView={1} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Feedback;
