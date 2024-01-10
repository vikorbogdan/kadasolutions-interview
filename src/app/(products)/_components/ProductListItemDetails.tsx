import { Product } from "@/store/server/products/interfaces"

interface ProductListItemDetailsProps {
  product: Product
}

const ProductListItemDetails = ({ product }: ProductListItemDetailsProps) => {
  return (
    <>
      <div className="text-secondary font-semibold flex justify-between items-center">
        <p className="text-xl truncate max-w-[200px]">{product.title}</p>
        <p className="text-2xl">{product.price} $</p>
      </div>
      <p className="max-w-48 line-clamp-2">{product.description}</p>
    </>
  )
}

export default ProductListItemDetails
