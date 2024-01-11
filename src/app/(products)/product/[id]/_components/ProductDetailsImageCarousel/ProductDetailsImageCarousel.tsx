import { ChevronLeft, ChevronRight, Circle } from "lucide-react"
import { useState } from "react"
import CarouselFullImageModal from "./components/CarouselFullImageModal"
import CarouselImage from "./components/CarouselImage"
import CarouselNavigationDots from "./components/CarouselNavigationDots"

interface ProductDetailsImageCarouselProps {
  images: string[]
}

const ProductDetailsImageCarousel = ({
  images,
}: ProductDetailsImageCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullImageModalOpen, setIsFullImageModalOpen] = useState(false)

  const handleNext = () => {
    if (currentImageIndex === images.length - 1) return
    setCurrentImageIndex((prev) => prev + 1)
  }

  const handlePrevious = () => {
    if (currentImageIndex === 0) return
    setCurrentImageIndex((prev) => prev - 1)
  }

  return (
    <>
      <CarouselFullImageModal
        isOpen={isFullImageModalOpen}
        setIsOpen={setIsFullImageModalOpen}
        image={images[currentImageIndex]}
      />
      <div
        aria-hidden
        className="w-full lg:w-1/2 items-center gap-4 flex flex-col "
      >
        <div className="flex items-center w-full h-full">
          <button
            onClick={handlePrevious}
            className="h-full w-1/6 cursor-pointer flex items-center justify-center"
          >
            <ChevronLeft className="text-secondary/60 w-full h-7" />
          </button>
          <div className="w-full relative h-96 lg:h-full">
            <CarouselImage
              images={images}
              currentImageIndex={currentImageIndex}
              handleClick={() => setIsFullImageModalOpen(true)}
            ></CarouselImage>
          </div>
          <button
            onClick={handleNext}
            className="h-full w-1/6 cursor-pointer flex items-center"
          >
            <ChevronRight className="text-secondary/60 w-full h-7" />
          </button>
        </div>
        <CarouselNavigationDots
          index={currentImageIndex}
          setIndex={setCurrentImageIndex}
          images={images}
        />
      </div>
    </>
  )
}

export default ProductDetailsImageCarousel
