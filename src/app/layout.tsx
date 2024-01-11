import type { Metadata } from "next"
import generalSans from "../fonts/generalSans"
import "./globals.css"
import Providers from "./providers"
import Header from "@/components/Header"
import { getServerSession } from "next-auth"
import { authOptions } from "@/utils/authOptions"
import SessionProvider from "./SessionProvider"
import { Toaster } from "react-hot-toast"
export const metadata: Metadata = {
  title: "Products Page",
  description:
    "Explore our cutting-edge product listing web app crafted for a seamless shopping experience. Featuring responsive design, user-friendly navigation, and secure authentication for safe purchases. Access dynamic cart functionality and exclusive deals. Sign up and shop now to enjoy orders.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={`${generalSans.className} bg-gray-100`}>
        <SessionProvider session={session}>
          <Providers>
            <Header />
            <main className="flex h-full items-center justify-center pt-16 lg:pt-24">
              {children}
              <Toaster />
            </main>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  )
}
