import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
      {/* Mobile */}
      <div className="h-full flex justify-between items-center lg:hidden ">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide ">AGORA</div>
        </Link>
        <Menu />
      </div>

      {/* Computer */}
      <div className="hidden lg:flex items-center justify-between h-full gap-8 ">
        {/* left side */}
        <div className="w-1/2 flex items-center gap-12 ">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide ">AGORA</div>
          </Link>
          <NavLinks />
        </div>
        
        {/* right */}
        <div className="w-1/2 flex items-center justify-end gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Nav;
