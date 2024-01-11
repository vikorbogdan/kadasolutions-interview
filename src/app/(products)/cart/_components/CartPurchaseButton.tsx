import Button from "@/components/Button"
import LoadingSpinner from "@/components/LoadingSpinner"
import { useCartStore } from "@/store/client/useStore"
import { addPurchase } from "@/store/server/purchases/mutations"
import { useSession } from "next-auth/react"
import { useState } from "react"
import toast from "react-hot-toast"
import CartSignInDialog from "./CartSignInDialog"

const CartPurchaseButtonContent = ({
  status,
}: {
  status: "authenticated" | "loading" | "unauthenticated"
}) => {
  if (status === "loading")
    return (
      <div className="w-full flex items-center justify-center">
        <LoadingSpinner className="text-white" />
      </div>
    )
  return "Purchase"
}

const CartPurchaseButton = () => {
  const { status: sessionStatus } = useSession()
  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false)
  const [isOngoingPurchase, setIsOngoingPurchase] = useState(false)
  const { products, clearCart } = useCartStore()
  const handleClick = async () => {
    if (sessionStatus === "unauthenticated") {
      setIsSignInDialogOpen(true)
    }
    if (sessionStatus === "authenticated") {
      if (isOngoingPurchase) return
      setIsOngoingPurchase(true)
      await addPurchase(products)
      toast.success("Purchase successful")
      clearCart()
      setIsOngoingPurchase(false)
    }
  }
  return (
    <>
      <Button onClick={handleClick} className="py-5 w-full text-3xl">
        <CartPurchaseButtonContent
          status={(isOngoingPurchase && "loading") || sessionStatus}
        />
      </Button>
      <CartSignInDialog
        isOpen={isSignInDialogOpen}
        setIsOpen={setIsSignInDialogOpen}
      ></CartSignInDialog>
    </>
  )
}

export default CartPurchaseButton
