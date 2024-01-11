import { Circle } from "lucide-react"

interface CarouselNavigationDotsProps {
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
  images: string[]
}

const CarouselNavigationDots = ({
  index,
  setIndex,
  images,
}: CarouselNavigationDotsProps) => {
  return (
    <div className="gap-3 flex">
      {images.map((image, idx) => (
        <button key={image} onClick={() => setIndex(idx)}>
          <Circle
            className={`w-2 h-2 ${
              idx === index
                ? "fill-primary"
                : "fill-secondary/60 hover:fill-secondary/80"
            } stroke-none`}
          />
        </button>
      ))}
    </div>
  )
}

export default CarouselNavigationDots
