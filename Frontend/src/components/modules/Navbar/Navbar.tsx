import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center text-white container py-3">
      <div className="flex-1 font-clickerScript text-3xl">Radkan Coffee</div>
      <ul className="flex flex-1 font-playfairDisplay text-sm gap-10 child-hover:text-main child-hover:delay-200">
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
      <div className="flex-1 flex justify-end gap-4">
        <Link href={'/sign-in'}>sign in</Link>
        <Link href={'/sign-up'}>sign up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
