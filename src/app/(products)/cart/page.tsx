"use client"
import Button from "@/components/Button"
import { useCartStore } from "@/store/client/useStore"
import { ProductWithQuantity } from "@/store/server/products/interfaces"
import { useEffect, useState } from "react"
import CartDetailsTable from "./_components/CartDetailsTable"
import CartIsEmpty from "./_components/CartIsEmpty"
import CartProductList from "./_components/CartProductList"
import CartPurchaseButton from "./_components/CartPurchaseButton"

const CartPage = () => {
  const { products, clearCart } = useCartStore()
  const [productsToDisplay, setProductsToDisplay] = useState<
    ProductWithQuantity[]
  >([])
  useEffect(() => {
    // for next localStorage hydration error (https://nextjs.org/docs/messages/react-hydration-error)
    setProductsToDisplay(products)
  }, [products])
  if (productsToDisplay.length === 0) return <CartIsEmpty />
  return (
    <div className="flex flex-col w-full gap-3 max-w-5xl lg:flex-row lg:items-start">
      <CartProductList products={productsToDisplay} />
      <div className="flex flex-col items-center gap-9 w-full p-3 rounded-md shadow-md bg-white">
        <h1 className="text-5xl text-center font-semibold">
          Complete Purchase
        </h1>
        <CartDetailsTable products={productsToDisplay} />
        <div className="w-full flex flex-col items-center gap-2">
          <CartPurchaseButton />
          <Button
            variant="destructive"
            onClick={clearCart}
            className="py-2 px-5 w-1/8"
          >
            Empty Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
