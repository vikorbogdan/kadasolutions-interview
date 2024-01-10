import { create } from "zustand"
import { persist } from "zustand/middleware"
import createCartSlice, { CartSlice } from "./createCartSlice"

export const useCartStore = create<CartSlice>()(
  persist(
    (...a) => ({
      ...createCartSlice(...a),
    }),
    {
      name: "cart-store",
    }
  )
)
