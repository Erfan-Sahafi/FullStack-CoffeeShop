"use client";
import Title from "@/components/modules/Title/Title";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./feedback.css";

// import required modules
import { Navigation } from "swiper/modules";
import CommentSlide from "../CommentSlide/CommentSlide";

const Feedback = () => {
  const swiper = useSwiper();

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
        <div className="w-full mb-10 font-playfairDisplay">
          <Swiper
            navigation={true}
            loop={true}
            slidesPerView={1}
            modules={[Navigation]}
            className="mySwiper w-full relative"
          >
            <SwiperSlide>
              <CommentSlide />
            </SwiperSlide>
            <SwiperSlide>
              <CommentSlide />
            </SwiperSlide>
            <SwiperSlide>
              <CommentSlide />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full flex justify-start absolute bottom-0">
          <Image
            className="-mt-32 z-10"
            alt="coffee"
            width={498}
            height={272}
            src={"/coffee_blast.svg"}
          />
        </div>
      </div>
    </>
  );
};

export default Feedback;
