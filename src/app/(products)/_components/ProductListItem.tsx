import Product from "@/types/product";
import Link from "next/link";
import ProductListItemDetails from "./ProductListItemDetails";
import ProductListItemThumbnail from "./ProductListItemThumbnail";
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
        className="w-full block text-center transition-colors hover:bg-primary bg-black text-white font-medium py-2 rounded-full mt-3"
      >
        See details
      </Link>
    </div>
  );
};

export default ProductListItem;
