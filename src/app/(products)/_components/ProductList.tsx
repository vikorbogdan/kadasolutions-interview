import ProductListItem from "./ProductListItem";

const ProductList = () => {
  return (
    <div className="flex justify-center flex-wrap gap-4 md:flex-row flex-col">
      <ProductListItem />
    </div>
  );
};

export default ProductList;
