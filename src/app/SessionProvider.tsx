"use client"

import { SessionProviderProps } from "next-auth/react"
import { SessionProvider as Provider } from "next-auth/react"
const SessionProvider = ({ children, session }: SessionProviderProps) => {
  return <Provider session={session}>{children}</Provider>
}

export default SessionProvider
