"use client"

import { menuList } from "@/data/menuList";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuItem, NavList} from "./MenuItem";
import { navList } from "@/data/navList";

export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    } /*Menu mobile*/

    return (
        <div>
            <header className="w-full flex justify-center gap-20">
                <div className="">
                    <Link href="/">
                        <Image 
                            src="/assets/logo.png"
                            alt="logo da página"
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>

                <nav className="flex">
                    <ul className="flex gap-10">
                        {menuList.map((item, index) => (
                            <MenuItem 
                                key={index}
                                url={item.url}
                                label={item.label}
                            />
                        ))}
                    </ul>
                </nav>
                <nav>
                    <ul className="flex gap-10">
                        {navList.map((item, index) => (
                            <NavList 
                                key={index}
                                url={item.url}
                                label={item.label}
                            />
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    );
}