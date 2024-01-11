import Image from "next/image"

interface ProductListItemThumbnailProps {
  thumbnail: string
  discountPercentage: number
}

const ProductListItemThumbnail = ({
  thumbnail,
  discountPercentage,
}: ProductListItemThumbnailProps) => {
  return (
    <div className="w-72 h-36 relative">
      {discountPercentage !== 0 && (
        <span className="absolute z-10 right-2 top-2 font-medium text-white text-sm bg-primary py-1 px-3 rounded-full">
          {discountPercentage}%
        </span>
      )}
      <Image
        className="rounded-md object-cover"
        fill
        sizes="50%"
        src={thumbnail}
        alt="placeholder img"
      />
    </div>
  )
}

export default ProductListItemThumbnail
