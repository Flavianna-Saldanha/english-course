import Link from "next/link";
import { MenuInterface } from "../types/MenuInterface";

export const MenuItem = ({ url, label, onClick }: MenuInterface) => {
  return (
    <li onClick={onClick}>
      <Link href={url} className="hover:opacity-95">
        {label}
      </Link>
    </li>
  );
};

export const NavList = ({ url, label, isButton, onClick }: MenuInterface) => {
  return (
    <li onClick={onClick}>
      <Link
        href={url}
        className={
          isButton
            ? "bg-[var(--button-bg-color)] text-white px-4 py-3 rounded-xl hover:opacity-95"
            : "hover:opacity-95"
        }
      >
        {label}
      </Link>
    </li>
  );
};
