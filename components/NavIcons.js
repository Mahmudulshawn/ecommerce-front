"use client";
import Image from "next/image";
import React, { useState } from "react";
import profile from "@/public/profile.png";
import cart from "@/public/cart.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = false; 
  const cartItems = 2; 

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };


  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      {/* Cart Icon */}
      <div className="relative cursor-pointer">
        <Image
          src={cart}
          width={22}
          height={22}
          alt="Cart Icon"
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        {cartItems > 0 && (
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-rose-500 text-white text-sm rounded-full flex justify-center items-center">
            {cartItems}
          </div>
        )}
      </div>
      {isCartOpen && <CartModal />}

      {/* Profile Icon */}
      <Image
        src={profile}
        width={22}
        height={22}
        alt=""
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute bg-white p-4 rounded-md top-12 -left-2 text-sm shadow shadow-black/40 z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
    </div>
  );
};

export default NavIcons;
