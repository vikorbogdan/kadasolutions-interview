"use client"
import LoadingSpinner from "@/components/LoadingSpinner"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import ProductDetailsImageCarousel from "./_components/ProductDetailsImageCarousel/ProductDetailsImageCarousel"
import ProductDetailsRatingDisplay from "./_components/ProductDetailsRatingDisplay"
import Button from "@/components/Button"
import { useGetProduct } from "@/store/server/products/queries"
import AddToCartButton from "./_components/AddToCartButton"

const ProductPage = () => {
  const { id: productId } = useParams()
  const { data: productDetailsData, isLoading: isProductDetailsLoading } =
    useGetProduct(Number(productId))

  if (isProductDetailsLoading || !productDetailsData)
    return (
      <div>
        <LoadingSpinner />
      </div>
    )
  return (
    <div className="flex flex-col p-3 lg:mt-40 lg:flex-row w-full h-full lg:gap-16 max-w-7xl">
      <ProductDetailsImageCarousel images={productDetailsData.images} />
      <div className="py-4 w-full lg:w-1/2">
        <div className="flex flex-col md:flex-row items-center">
          <h1 className="font-semibold text-center md:text-left text-2xl md:text-4xl">
            {productDetailsData.title}
          </h1>
          <ProductDetailsRatingDisplay
            rating={productDetailsData.rating ?? 0}
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="flex text-center md:text-left text-xl md:text-2xl font-medium flex-col mt-3 gap-3">
            <p className="max-w-sm">{productDetailsData.description}</p>
            <p className="opacity-60">Stock: {productDetailsData.stock}</p>
            <p className="opacity-60">Brand: {productDetailsData.brand}</p>
            <p className="opacity-60">
              Category: {productDetailsData.category}
            </p>
          </div>
          <div className="font-medium text-white text-lg bg-primary py-1 px-3 my-6 rounded-full">
            {productDetailsData.discountPercentage}%
          </div>
          <div className="flex items-center justify-around md:justify-between w-full">
            <div className="font-semibold text-2xl md:text-6xl">
              {productDetailsData.price} $
            </div>
            <AddToCartButton product={productDetailsData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
