"use client"
import { ShoppingBasket } from "lucide-react"
import Button from "./Button"
import LoginButton from "./LoginButton"
import { useSession } from "next-auth/react"
import AuthButton from "./AuthButton"

const Header = () => {
  const sess = useSession()
  return (
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
        <AuthButton />
      </div>
    </header>
  )
}

export default Header
