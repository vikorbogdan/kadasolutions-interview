import { ProductWithQuantity } from "@/store/server/products/interfaces"

interface CartDetailsTableProps {
  products: ProductWithQuantity[]
}

const CartDetailsTable = ({ products }: CartDetailsTableProps) => {
  return (
    <table className="w-full">
      <thead className="font-medium">
        <tr>
          <td>Product Name</td>
          <td>Quantity</td>
          <td className="text-right">Price</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr className="even:bg-gray-100" key={product.id}>
            <td>{product.title}</td>
            <td>{product.quantity}</td>
            <td className="font-medium text-right">
              {product.price * product.quantity} $
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="text-lg">
          <td className="pt-2">Total</td>
          <td colSpan={2} className="text-right font-semibold">
            {products.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)} $
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default CartDetailsTable
