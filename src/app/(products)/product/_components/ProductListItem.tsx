import Link from "next/link"
import ProductListItemDetails from "./ProductListItemDetails"
import ProductListItemThumbnail from "./ProductListItemThumbnail"
import { cn } from "@/utils/cn"
import { buttonVariants } from "@/components/Button"
import { Product } from "@/store/server/products/interfaces"
import { Transition } from "@headlessui/react"
import { useIntersection } from "@mantine/hooks"
import { useRef } from "react"
interface ProductListItemProps {
  product: Product
  intersectionRef?: (element: HTMLElement | null) => void
}

const ProductListItem = ({
  product,
  intersectionRef,
}: ProductListItemProps) => {
  return (
    <Transition
      enter="ease-out duration-500"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      show={true}
      appear
      ref={intersectionRef ?? null}
      className="p-3 bg-white rounded-md border-[.6px] box-border border-gray-200"
    >
      <ProductListItemThumbnail
        thumbnail={product.thumbnail}
        discountPercentage={product.discountPercentage}
      />
      <ProductListItemDetails product={product} />
      <Link
        href={`/product/${product.id}`}
        className={cn(buttonVariants.black, "w-full py-2 mt-3")}
      >
        See details
      </Link>
    </Transition>
  )
}

export default ProductListItem
