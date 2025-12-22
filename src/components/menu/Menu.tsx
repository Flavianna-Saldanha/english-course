"use client";

import { menuList } from "@/data/menuList";
import { navList } from "@/data/navList"; // se tiver navList
import { MenuItem, NavList } from "./MenuItem";
import Image from "next/image";
import { useState } from "react";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="relative w-full mt-8 uppercase md:flex md:justify-around">
      <div className="flex justify-around">
        <a href="/">
          <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
        </a>

        {/* MENU MOBILE */}
        <nav className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="focus:outline-none"
          >
            <Image src="/assets/menu.png" width={30} height={30} alt="Menu" />
          </button>
        </nav>
      </div>

      {/* MENU MOBILE OPÇÕES */}
      {menuOpen && (
        <div className="md:hidden absolute top-11 left-0 w-full h-screen bg-gray-950/95 text-white z-50 flex flex-col items-center pt-20 gap-20">
          <ul className="text-center flex flex-col gap-8">
            {menuList.map((item, index) => (
              <MenuItem
                key={index}
                url={item.url}
                label={item.label}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </ul>
          {navList && (
            <ul className="text-center flex flex-col gap-8">
              {navList.map((item, index) => (
                <NavList
                  key={index}
                  url={item.url}
                  label={item.label}
                  isButton={item.isButton}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </ul>
          )}
        </div>
      )}

      {/* MENU DESKTOP */}
      <div className="hidden md:flex md:gap-24">
        <nav>
          <ul className="flex gap-10">
            {menuList.map((item, index) => (
              <MenuItem key={index} url={item.url} label={item.label} />
            ))}
          </ul>
        </nav>
        {navList && (
          <nav>
            <ul className="flex gap-10">
              {navList.map((item, index) => (
                <NavList
                  key={index}
                  url={item.url}
                  label={item.label}
                  isButton={item.isButton}
                />
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
