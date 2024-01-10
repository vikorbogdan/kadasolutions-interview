"use client"
import LoadingSpinner from "@/components/LoadingSpinner"
import { Product } from "@/store/server/products/interfaces"
import { useIntersection } from "@mantine/hooks"
import { useEffect, useRef } from "react"
import ProductListItem from "./ProductListItem"
import { useGetProducts } from "@/store/server/products/queries"

const ProductList = () => {
  const {
    products,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
  } = useGetProducts(10)
  const lastItemRef = useRef<HTMLElement>(null)
  const { ref, entry } = useIntersection({
    root: lastItemRef.current,
    threshold: 0.1,
  })
  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage()
  }, [entry, fetchNextPage])

  if (isLoading) {
    return (
      <div className="">
        <LoadingSpinner />
      </div>
    )
  }
  return (
    <>
      <div className="flex justify-center flex-wrap gap-4 md:flex-row flex-col">
        {products?.map((product: Product, idx) => {
          if (idx === products.length - 1) {
            return (
              <ProductListItem
                intersectionRef={ref}
                key={product.id}
                product={product}
              />
            )
          }
          return <ProductListItem key={product.id} product={product} />
        })}
      </div>
      {hasNextPage && isFetchingNextPage && <LoadingSpinner />}
    </>
  )
}

export default ProductList
