import type { Metadata } from "next";
import "./globals.css";
import generalSans from "./fonts/generalSans";

export const metadata: Metadata = {
  title: "Products Page",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${generalSans.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
