import type { Metadata } from "next";
import "./globals.css";
import { Menu } from "@/components/menu/Menu";


export const metadata: Metadata = {
  title: "English Course",
  description: "English Course",
  icons: {
    icon: "/assets/favicon-96x96.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
