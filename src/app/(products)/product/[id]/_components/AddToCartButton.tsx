import Button from "@/components/Button"
import { useCartStore } from "@/store/client/useStore"
import { Product } from "@/store/server/products/interfaces"
import toast from "react-hot-toast"
interface AddToCartButtonProps {
  product: Product
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addProduct } = useCartStore()
  const handleClick = () => {
    addProduct(product)
    toast.success(`${product.title} was added to your cart.`)
  }
  return (
    <>
      <Button
        onClick={handleClick}
        className="py-2 md:py-5 px-10 md:px-20 text-xl md:text-3xl"
      >
        Add to Cart
      </Button>
    </>
  )
}

export default AddToCartButton
