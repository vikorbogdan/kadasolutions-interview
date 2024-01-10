import Button from "@/components/Button"
import { Dialog } from "@headlessui/react"
import Image from "next/image"

const CarouselFullImageModal = ({
  image,
  isOpen,
  setIsOpen,
}: {
  image: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) => {
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
            <Image
              width={1000}
              height={1000}
              className="object-contain"
              alt=""
              src={image}
            />
            <Button
              className="mx-auto mt-4 text-white px-3 py-1"
              onClick={() => setIsOpen(false)}
            >
              Close Image
            </Button>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default CarouselFullImageModal
