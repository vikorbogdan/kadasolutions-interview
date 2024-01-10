import { ShoppingBasket } from "lucide-react"
import { useEffect, useState } from "react"
import Button, { buttonVariants } from "./Button"
import { cn } from "@/utils/cn"
import Link from "next/link"

interface CartCounterButtonProps {
  count: number
}

const CartCounterButton = ({ count }: CartCounterButtonProps) => {
  const [numToDisplay, setNumToDisplay] = useState(0)
  useEffect(() => {
    // for next localStorage hydration error (https://nextjs.org/docs/messages/react-hydration-error)
    setNumToDisplay(count)
  }, [count])

  return (
    <div className="relative">
      <div className="text-center -bottom-1 -left-2 bg-red-500 text-white absolute px-2 text-xs font-medium rounded-full">
        {numToDisplay !== 0 && numToDisplay}
      </div>
      <Link
        href="/cart"
        aria-label="Items added to Cart"
        className={cn(
          buttonVariants.black,
          "flex items-center justify-center w-10 h-10"
        )}
      >
        <ShoppingBasket />
      </Link>
    </div>
  )
}

export default CartCounterButton
