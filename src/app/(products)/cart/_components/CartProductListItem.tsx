import QuantitySelector from "@/components/QuantitySelector"
import { useCartStore } from "@/store/client/useStore"
import { ProductWithQuantity } from "@/store/server/products/interfaces"
import Image from "next/image"

interface CartProductListItemProps {
  product: ProductWithQuantity
}

const CartProductListItem = ({ product }: CartProductListItemProps) => {
  const { addProduct, removeProduct } = useCartStore()
  return (
    <li
      className="flex items-center justify-between rounded-md shadow-md bg-white p-3"
      key={product.id}
    >
      <div className="w-20 h-20 relative">
        <Image
          className="object-cover rounded-md"
          fill
          alt={product.title}
          src={product.thumbnail}
        />
      </div>
      <div className="font-semibold text-xl">{product.title}</div>
      <QuantitySelector
        handleDecrement={() => removeProduct(product)}
        value={product.quantity}
        handleIncrement={() => addProduct(product)}
      />
    </li>
  )
}

export default CartProductListItem
