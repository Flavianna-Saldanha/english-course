"use client"

import { menuList } from "@/data/menuList";
import Image from "next/image";
import Link from "next/link";
import { MenuItem, NavList} from "./MenuItem";
import { navList } from "@/data/navList";
import { useState } from "react";

export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <header className="w-full mt-8 uppercase border border-red-600 md:flex ">
                <div className="flex justify-around">
                    <Link href="/">
                        <Image 
                            src="/assets/logo.png"
                            alt="logo da página"
                            width={50}
                            height={50}
                        />
                    </Link>
                    
                    {/*MENU MOBILE*/}
                    <nav className="md:hidden">
                     <Link href="/">
                        <button
                            onClick={toggleMenu}
                            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                            className="focus:outline-none"
                        >
                            <Image 
                                src="/assets/menu.png" 
                                width={40} 
                                height={40} 
                                alt="Logo do Menu"
                            />
                        </button>
                     </Link>
                    </nav>
                </div>


                {/*MENU DESKTOP*/}
                <div className="border border-blue-600 md:flex md:flex-1">
                    <nav className="hidden md:flex ">
                        <ul className="md:flex md:gap-10">
                            {menuList.map((item, index) => (
                                <MenuItem 
                                    key={index}
                                    url={item.url}
                                    label={item.label}
                                />
                            ))}
                        </ul>
                    </nav>
                    <nav className="hidden md:flex">
                        <ul className="md:flex md:gap-10">
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
                </div>
            </header>
        </div>
    );
}