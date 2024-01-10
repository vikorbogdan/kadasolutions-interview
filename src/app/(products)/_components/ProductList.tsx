"use client";
import useInfiniteProductsQuery from "@/app/hooks/useInfiniteProductsQuery";
import LoadingSpinner from "@/components/LoadingSpinner";
import Product from "@/types/product";
import { useIntersection } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const {
    products,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
  } = useInfiniteProductsQuery(10);
  const lastItemRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastItemRef.current,
    threshold: 0.1,
  });
  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry, fetchNextPage]);

  if (isLoading) return <LoadingSpinner />;
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
            );
          }
          return <ProductListItem key={product.id} product={product} />;
        })}
      </div>
      {hasNextPage && isFetchingNextPage && <LoadingSpinner />}
    </>
  );
};

export default ProductList;
