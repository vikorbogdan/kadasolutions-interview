import Button from "@/components/Button"
import LoadingSpinner from "@/components/LoadingSpinner"
import { Dialog } from "@headlessui/react"
import { X } from "lucide-react"
import { signIn, useSession } from "next-auth/react"
import { useState } from "react"
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
  const handleClick = () => {
    if (sessionStatus === "unauthenticated") {
      setIsSignInDialogOpen(true)
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
