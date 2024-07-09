"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumb = () => {
  const params = usePathname();

  return (
    <>
      <ul className="flex text-2xl font-playfairDisplay text-white gap-2">
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        {">"}
        <li>
          <Link href={`${params}`}>{params.toUpperCase().split("/")}</Link>
        </li>
      </ul>
    </>
  );
};

export default BreadCrumb;
