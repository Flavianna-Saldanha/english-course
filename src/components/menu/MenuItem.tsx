import Link from "next/link";

export type MenuInterface = {
    label: string;
    url: string;
}

export const MenuItem = ({url, label}: MenuInterface) => {
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

export const NavList = ({url, label}: MenuInterface) => {
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