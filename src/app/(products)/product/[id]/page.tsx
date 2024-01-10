"use client"
import LoadingSpinner from "@/components/LoadingSpinner"
import Product from "@/types/product"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import ProductDetailsImageCarousel from "./_components/ProductDetailsImageCarousel/ProductDetailsImageCarousel"
import ProductDetailsRatingDisplay from "./_components/ProductDetailsRatingDisplay"
import Button from "@/components/Button"

const ProductPage = () => {
  const { id: productId } = useParams()
  const { data: productDetailsData, isLoading: isProductDetailsLoading } =
    useQuery({
      queryKey: ["product-details", productId],
      queryFn: async (): Promise<Product> => {
        const res = await fetch(`https://dummyjson.com/products/${productId}`)
        return res.json()
      },
    })
  if (isProductDetailsLoading || !productDetailsData)
    return (
      <div className="mt-16 lg:mt-64">
        <LoadingSpinner />
      </div>
    )
  return (
    <div className="flex flex-col lg:flex-row mt-16 lg:mt-64 w-full h-full lg:gap-16 max-w-7xl">
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
          <div className="flex items-center justify-between w-full">
            <div className="font-semibold text-2xl md:text-6xl">
              {productDetailsData.price} $
            </div>
            <Button className="py-2 md:py-5 px-10 md:px-20 text-xl md:text-3xl">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
