"use client"
import { signOut } from "next-auth/react"
import Button from "./Button"

const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()} className="px-5 py-2">
      Sign Out
    </Button>
  )
}

export default LogoutButton
