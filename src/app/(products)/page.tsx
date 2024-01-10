import ProductList from "./_components/ProductList"

const ProductsPage = () => {
  return (
    <div className="flex flex-col items-center mt-24 gap-12">
      <h1 className="text-5xl text-center font-semibold">See Products</h1>
      <ProductList />
    </div>
  )
}

export default ProductsPage
