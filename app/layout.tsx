import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gadgets",
  description: "Ecommerce Laptop preview price ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
