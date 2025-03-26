"use client";

import React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const categories = [
  {
    title: "Accessories",
    href: "/",
  },
  {
    title: "Home Applience",
    href: "/",
  },
  {
    title: "DIY",
    href: "/",
  },
  {
    title: "Laptops",
    href: "/",
  },
  {
    title: "Mobile",
    href: "/",
  },
  {
    title: "Furnitures",
    href: "/",
  },
  {
    title: "Clothing",
    href: "/",
  },
];

export default function NavLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={"text-base font-normal "}>
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {categories.map((category, index) => (
                <Link
                  href={category.href}
                  key={index}
                  className="text-sm select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  {category.title}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={`${navigationMenuTriggerStyle()} text-base font-normal`}
          >
            All Products
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={`${navigationMenuTriggerStyle()} text-base font-normal`}
          >
            What&apos;s New
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
