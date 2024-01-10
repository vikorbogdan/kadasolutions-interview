"use client"
import { useCartStore } from "@/store/client/useStore"
import AuthButton from "./AuthButton"
import CartCounterButton from "./CartCounterButton"

const Header = () => {
  const { getProductsCount } = useCartStore()
  const productsCount = getProductsCount()
  return (
    <header className="shadow-sm fixed z-40 bg-white h-14 w-full flex items-center px-2 md:px-14">
      <a href="/" className="select-none cursor-pointer">
        Products
      </a>
      <div className="ml-auto gap-4 flex">
        <CartCounterButton count={productsCount} />
        <AuthButton />
      </div>
    </header>
  )
}

export default Header
