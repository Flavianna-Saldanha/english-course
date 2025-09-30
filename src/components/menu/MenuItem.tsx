import Link from "next/link";
import { MenuInterface } from "../types/MenuInterface";

export const MenuItem = ({url, label}: MenuInterface) => {
    const isMatricula = label.toLowerCase() === "Matricule-se";

    return (
        <div>
            <li>
                <Link href={url}>
                    {label}
                </Link>
            </li>
        </div>
    );
}

export const NavList = ({url, label, isButton}: MenuInterface) => {
    return (
            <li>
                <Link 
                    href={url}
                    className={ isButton ? 
                        "bg-[#0b294d] text-white px-4 py-3 rounded-xl hover:opacity-95":
                        "hover:opacity-95"
                    }
                >
                    {label}
                </Link>
            </li>
    );
}