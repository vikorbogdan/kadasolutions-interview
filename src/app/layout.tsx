import { ShoppingBasket } from "lucide-react";
import type { Metadata } from "next";
import generalSans from "../fonts/generalSans";
import "./globals.css";
import Providers from "./providers";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Products Page",
  description:
    "Explore our cutting-edge product listing web app crafted for a seamless shopping experience. Featuring responsive design, user-friendly navigation, and secure authentication for safe purchases. Access dynamic cart functionality and exclusive deals. Sign up and shop now to enjoy orders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${generalSans.className} bg-gray-100`}>
        <header className="shadow-sm fixed z-40 bg-white h-14 w-full flex items-center px-2 md:px-14">
          <a href="/" className="select-none cursor-pointer">
            Products
          </a>
          <div className="ml-auto gap-4 flex">
            <div className="relative">
              <div className="text-center -bottom-1 -left-2 bg-red-500 text-white absolute px-2 text-xs font-medium rounded-full">
                3
              </div>
              <Button aria-label="Items added to Cart" className="w-10 h-10">
                <ShoppingBasket className="mx-auto" />
              </Button>
            </div>
            <Button className="px-5 py-2">Sign In</Button>
          </div>
        </header>
        <main className="flex h-full items-center justify-center">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
