import Button from "@/components/Button"
import LoadingSpinner from "@/components/LoadingSpinner"
import { useCartStore } from "@/store/client/useStore"
import { addPurchase } from "@/store/server/purchases/mutations"
import { useSession } from "next-auth/react"
import { useState } from "react"
import toast from "react-hot-toast"
import CartSignInDialog from "./CartSignInDialog"

const CartPurchaseButtonContent = ({
  sessionStatus,
}: {
  sessionStatus: "authenticated" | "loading" | "unauthenticated"
}) => {
  if (sessionStatus === "loading") return <LoadingSpinner />
  return "Purchase"
}

const CartPurchaseButton = () => {
  const { status: sessionStatus } = useSession()
  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false)
  const { products, clearCart } = useCartStore()
  const handleClick = async () => {
    if (sessionStatus === "unauthenticated") {
      setIsSignInDialogOpen(true)
    }
    if (sessionStatus === "authenticated") {
      await addPurchase(products)
      toast.success("Purchase successful")
      clearCart()
    }
  }
  return (
    <>
      <Button onClick={handleClick} className="py-5 w-full text-3xl">
        <CartPurchaseButtonContent sessionStatus={sessionStatus} />
      </Button>
      <CartSignInDialog
        isOpen={isSignInDialogOpen}
        setIsOpen={setIsSignInDialogOpen}
      ></CartSignInDialog>
    </>
  )
}

export default CartPurchaseButton
