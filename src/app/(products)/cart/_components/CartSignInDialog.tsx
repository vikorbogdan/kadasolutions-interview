import Button from "@/components/Button"
import { Dialog } from "@headlessui/react"
import { X } from "lucide-react"
import { signIn } from "next-auth/react"

interface CartSignInDialogProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const CartSignInDialog = ({ isOpen, setIsOpen }: CartSignInDialogProps) => {
  return (
    <Dialog
      className={"relative z-50"}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 bg-black/25" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="max-w-md relative w-full h-full">
            <div className="bg-white h-96 p-3 rounded-md flex flex-col items-center justify-center">
              <button
                className="absolute top-0 right-0"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <Dialog.Title className="text-3xl font-semibold">
                Just one more step...
              </Dialog.Title>
              <Dialog.Description>
                Please sign in to complete your purchase.
              </Dialog.Description>
              <Button
                onClick={() => signIn("google")}
                className="py-5 w-full text-3xl mt-9"
              >
                Sign In
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default CartSignInDialog
