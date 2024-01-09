import ProductListItemDetails from "./ProductListItemDetails";
import ProductListItemThumbnail from "./ProductListItemThumbnail";

const ProductListItem = () => {
  return (
    <div className="p-3 bg-white rounded-md border-[.6px] box-border border-gray-200">
      <ProductListItemThumbnail />
      <ProductListItemDetails />
      <button className="w-full transition-colors hover:bg-primary bg-black text-white font-medium py-2 rounded-full mt-3">
        See details
      </button>
    </div>
  );
};

export default ProductListItem;
