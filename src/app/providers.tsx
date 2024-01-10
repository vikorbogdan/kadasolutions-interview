"use client"
import { PropsWithChildren, useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useCartStore } from "@/store/client/useStore"

export default function Providers({ children }: PropsWithChildren) {
  // for zustand localStorage consistency
  const updateStore = () => {
    useCartStore.persist.rehydrate()
  }
  useEffect(() => {
    document.addEventListener("visibilitychange", updateStore)
    window.addEventListener("focus", updateStore)
    return () => {
      document.removeEventListener("visibilitychange", updateStore)
      window.removeEventListener("focus", updateStore)
    }
  }, [])

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
