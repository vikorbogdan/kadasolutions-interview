import { Transition } from "@headlessui/react"
import Image from "next/image"

interface CarouselImageProps {
  images: string[]
  currentImageIndex: number
  handleClick: (value: any) => void
}

const CarouselImage = ({
  images,
  currentImageIndex,
  handleClick,
}: CarouselImageProps) => {
  return images.map((image, idx) => (
    <Transition
      onClick={handleClick}
      show={idx === currentImageIndex}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as={Image}
      key={idx}
      className="object-cover cursor-pointer rounded-md"
      alt=""
      fill
      src={image}
    />
  ))
}

export default CarouselImage
