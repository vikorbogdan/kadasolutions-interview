import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { Product } from "./interfaces"

const getProducts = async ({
  pageParam,
  limit,
}: {
  pageParam: number
  limit: number
}) => {
  const offset = pageParam * limit
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${offset}`
  )
  return res.json()
}
const getProduct = async (productId: number): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`)
  return res.json()
}

export const useGetProducts = (limit: number) => {
  const { data, fetchNextPage, isFetchingNextPage, isLoading, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["infinite-products"],
      queryFn: ({ pageParam }) => getProducts({ pageParam, limit }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        {
          const totalNumOfPages = Math.ceil(lastPage.total / limit)
          if (lastPageParam + 1 >= totalNumOfPages) {
            return undefined
          }
          return lastPageParam + 1
        }
      },
    })

  const products: Product[] | undefined = data?.pages.flatMap(
    (page) => page.products
  )

  return {
    products,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  }
}
export const useGetProduct = (productId: number) =>
  useQuery({
    queryKey: ["product-details", productId],
    queryFn: () => getProduct(productId),
  })
