import { StateCreator } from "zustand"
import { Product, ProductWithQuantity } from "../server/products/interfaces"

export interface CartSlice {
  products: ProductWithQuantity[]
  getProductsCount: () => number
  addProduct: (product: Product) => void
  removeProduct: (product: Product) => void
  clearCart: () => void
}

const createCartSlice: StateCreator<CartSlice> = (set, get) => ({
  products: [],
  getProductsCount: () =>
    get().products.reduce((acc, cur) => acc + cur.quantity, 0),
  addProduct: (product) =>
    set((state) => {
      const productIndex = state.products.findIndex(
        (_product) => _product.id === product.id
      )

      if (productIndex === -1) {
        return {
          products: [...state.products, { ...product, quantity: 1 }],
        }
      }

      const products = [...state.products]
      products[productIndex].quantity += 1

      return { products }
    }),
  removeProduct: (product) =>
    set((state) => {
      const productIndex = state.products.findIndex(
        (_product) => _product.id === product.id
      )
      const products = [...state.products]

      if (productIndex === -1) {
        return { products }
      }

      products[productIndex].quantity -= 1

      if (products[productIndex].quantity === 0) {
        return {
          products: products.filter((_product) => _product.id !== product.id),
        }
      }

      return { products }
    }),

  clearCart: () => {
    set({ products: [] })
  },
})

export default createCartSlice
