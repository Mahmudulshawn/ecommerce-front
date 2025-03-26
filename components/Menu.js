"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menu from "@/public/menu.png";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image 
      src={menu} 
      alt="" 
      height={28}
      width={28}
      className="cursor-pointer  "
      onClick={() => setOpen((prev) => !prev)}
      />
      {
        open && (
            <div className="absolute bg-black/50 text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 z-10 text-xl ">
                <Link href={"/"}>Categories</Link>
                <Link href={"/"}>All Products</Link>
                <Link href={"/"}>Deals</Link>
                <Link href={"/"}>What&aposs New</Link>
                <Link href={"/"}></Link>
                <Link href={"/"}></Link>
                <Link href={"/"}></Link>
                <Link href={"/"}></Link>
                <Link href={"/"}></Link>

            </div>
        )
      }
    </div>
  );
};

export default Menu;
