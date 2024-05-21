import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center text-white container py-3">
      <div className="flex-1 font-clickerScript text-3xl">
        <Link href={"/"}>Radkan Coffee</Link>
      </div>
      <ul className="flex flex-[1.5] font-playfairDisplay text-sm gap-10 child-hover:text-main child-hover:delay-200">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link href={"/about"}>About Us</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
      <div className="flex-1 flex justify-end items-center text-sm font-playfairDisplay gap-5">
        <Link href={"/sign-in"} className="underline">
          Sign In
        </Link>
        <Link
          href={"/sign-up"}
          className="w-28 bg-main text-center py-2 text-secondry rounded-3xl shadow-button"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
