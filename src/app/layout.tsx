import type { Metadata } from "next";
import "./globals.css";
import generalSans from "./fonts/generalSans";
import { ShoppingBasket } from "lucide-react";

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
      <body className={`${generalSans.className} bg-gray-100`}>
        <header className="shadow-sm fixed z-50 bg-white h-14 w-full flex items-center px-2 md:px-14">
          <a href="/" className="select-none cursor-pointer">
            Products
          </a>
          <div className="ml-auto gap-4 flex">
            <div className="relative">
              <div className="text-center -bottom-1 -left-2 bg-red-500 text-white absolute px-2 text-xs font-medium rounded-full">
                3
              </div>
              <button className="rounded-full transition-colors text-white bg-black hover:bg-primary w-10 h-10">
                <ShoppingBasket className="mx-auto" />
              </button>
            </div>
            <button className="bg-black hover:bg-primary transition-colors text-white px-5 py-2 rounded-full">
              Sign In
            </button>
          </div>
        </header>
        <main className="flex h-full items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
