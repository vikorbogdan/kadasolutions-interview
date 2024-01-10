import Product from "@/types/product";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteProductsQuery = (limit: number) => {
  const fetchProducts = async ({ pageParam }: { pageParam: number }) => {
    const offset = pageParam * limit;
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${offset}`
    );
    return res.json();
  };

  const { data, fetchNextPage, isFetchingNextPage, isLoading, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["infinite-products"],
      queryFn: fetchProducts,
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        {
          const totalNumOfPages = Math.ceil(lastPage.total / limit);
          if (lastPageParam + 1 >= totalNumOfPages) {
            return undefined;
          }
          return lastPageParam + 1;
        }
      },
    });

  const products: Product[] | undefined = data?.pages.flatMap(
    (page) => page.products
  );

  return {
    products,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  };
};

export default useInfiniteProductsQuery;
