import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Navbar from "@/components/modules/Navbar/Navbar";
import React from "react";

const Menu = () => {
  return (
    <>
      <div className="bg-menubaner flex flex-col h-[200px] mb-10">
        <div className="h-[60%]">
          <Navbar />
        </div>
        <div className="flex w-full justify-center">
          <BreadCrumb />
        </div>
      </div>
      <main className="container">
        
      </main>
    </>
  );
};

export default Menu;
