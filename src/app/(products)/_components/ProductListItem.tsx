import Product from "@/types/product";
import Link from "next/link";
import ProductListItemDetails from "./ProductListItemDetails";
import ProductListItemThumbnail from "./ProductListItemThumbnail";
import { cn } from "@/utils/cn";
import { buttonVariants } from "@/components/Button";
interface ProductListItemProps {
  product: Product;
  intersectionRef?: (element: HTMLElement | null) => void;
}

const ProductListItem = ({
  product,
  intersectionRef,
}: ProductListItemProps) => {
  return (
    <div
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
    </div>
  );
};

export default ProductListItem;
