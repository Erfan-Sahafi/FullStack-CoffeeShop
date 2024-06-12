import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[492px] bg-footer bg-blend-multiply relative">
      <div className="absolute right-0 -top-56">
        <Image
          src={"/images/cup-footer.png"}
          width={300}
          height={300}
          alt="cup"
        />
      </div>
      <div className="absolute left-0 -top-56">
        <Image
          src={"/images/cup-footer2.png"}
          width={300}
          height={300}
          alt="cup"
        />
      </div>
      <div className="h-full container flex items-end">
        <div className="flex h-[70%] items-center gap-10 text-white font-playfairDisplay">
          <div className="w-[30%] flex flex-col justify-center gap-10">
            <Link className="font-clickerScript text-[54px]" href={"/"}>
              Radkan Coffee
            </Link>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex text-2xl items-center gap-4 child:cursor-pointer">
              <FaFacebook />
              <AiFillInstagram />
              <AiFillYoutube />
              <FaTwitter />
            </div>
          </div>
          <div className="w-[70%] flex justify-center items-center">
            <div className="flex flex-1 justify-center flex-col gap-20">
              <Link className=" text-[26px]" href={"/"}>
                About
              </Link>
              <ul className="flex flex-col text-[18px] gap-4">
                <li>
                  <Link href={"#"}>Menu</Link>
                </li>
                <li>
                  <Link href={"#"}>Features</Link>
                </li>
                <li>
                  <Link href={"#"}>News & Blogs</Link>
                </li>
                <li>
                  <Link href={"#"}>Help & Supports</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 justify-center flex-col gap-20">
              <Link className=" text-[26px]" href={"/"}>
                Company
              </Link>
              <ul className="flex flex-col text-[18px] gap-4">
                <li>
                  <Link href={"#"}>How we work</Link>
                </li>
                <li>
                  <Link href={"#"}>Terms of service</Link>
                </li>
                <li>
                  <Link href={"#"}>Pricing</Link>
                </li>
                <li>
                  <Link href={"#"}>FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 justify-center flex-col gap-20">
              <Link className=" text-[26px]" href={"/"}>
                Contact Us
              </Link>
              <ul className="flex flex-col text-[18px] gap-4">
                <li>
                  <Link href={"#"}>
                    Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                    Bangalore-560016
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>+1 202-918-2132</Link>
                </li>
                <li>
                  <Link href={"#"}>radkancoffee@mail.com</Link>
                </li>
                <li>
                  <Link href={"/"}>www.radkancoffee.com</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
