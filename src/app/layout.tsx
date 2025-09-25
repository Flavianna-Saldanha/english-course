import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
