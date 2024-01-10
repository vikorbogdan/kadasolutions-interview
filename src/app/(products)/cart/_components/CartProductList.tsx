import { ProductWithQuantity } from "@/store/server/products/interfaces"
import CartProductListItem from "./CartProductListItem"

interface CartProductListProps {
  products: ProductWithQuantity[]
}

const CartProductList = ({ products }: CartProductListProps) => {
  return (
    <ul className="flex flex-col w-full gap-3">
      {products.map((product) => (
        <CartProductListItem key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default CartProductList
