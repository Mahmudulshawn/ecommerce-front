"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="absolute w-max p-4 rounded-md shadow shadow-black/40 top-12 right-12 flex flex-col gap-6 z-20 ">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
        <h1 className="text-xl">Shopping Cart</h1>
          {/* Top */}
          <div className="flex flex-col gap-8">
            {/* Product */}
            <div className="flex gap-4  ">
              <Image
                src={
                  "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full ">
                {/* Top */}
                <div className="">
                  <div className="flex items-center justify-between gap-8 ">
                    <h1 className="font-semibold">Product Name</h1>
                    <div className="p-1 bg-gray-50 rounded-sm">$200</div>
                  </div>
                  <div className="text-sm text-gray-500  ">Available</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* Product */}
            <div className="flex gap-4  ">
              <Image
                src={
                  "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full ">
                {/* Top */}
                <div className="">
                  <div className="flex items-center justify-between gap-8 ">
                    <h1 className="font-semibold">Product Name</h1>
                    <div className="p-1 bg-gray-50 rounded-sm">$200</div>
                  </div>
                  <div className="text-sm text-gray-500  ">Available</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$400</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 ">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <Button variant={"outline"} className="">
                View Cart
              </Button>
              <Button
                className=""
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
