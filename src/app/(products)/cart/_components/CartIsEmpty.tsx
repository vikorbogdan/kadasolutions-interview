import { buttonVariants } from "@/components/Button"
import { cn } from "@/utils/cn"
import Link from "next/link"

const CartIsEmpty = () => {
  return (
    <div className="items-center flex flex-col gap-9">
      <h1 className="text-5xl text-center font-semibold">
        Your cart is empty.
      </h1>
      <Link
        href={"/"}
        className={cn(buttonVariants.black, "md:w-full px-5 py-5 text-3xl")}
      >
        Browse products
      </Link>
    </div>
  )
}

export default CartIsEmpty
