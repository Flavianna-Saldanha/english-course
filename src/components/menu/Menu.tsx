"use client";

import { menuList } from "@/data/menuList";
import { navList } from "@/data/navList";
import { MenuItem, NavList } from "./MenuItem";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full mt-8 uppercase md:flex md:justify-around">
      <div className="flex justify-around items-center w-full md:w-auto">
        <Link href="/">
          <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
        </Link>

        <nav className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <Image src="/assets/menu.png" width={30} height={30} alt="Menu" />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-11 left-0 w-full h-screen bg-gray-950/95 text-white z-50 flex flex-col items-center pt-20 gap-20">
          <ul className="flex flex-col gap-8 text-center">
            {menuList.map((item) => (
              <MenuItem
                key={item.url}
                {...item}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </ul>

          {navList && (
            <ul className="flex flex-col gap-8 text-center">
              {navList.map((item) => (
                <NavList
                  key={item.url}
                  {...item}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="hidden md:flex gap-24">
        <nav>
          <ul className="flex gap-10">
            {menuList.map((item) => (
              <MenuItem key={item.url} {...item} />
            ))}
          </ul>
        </nav>

        {navList && (
          <nav>
            <ul className="flex gap-10">
              {navList.map((item) => (
                <NavList key={item.url} {...item} />
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
