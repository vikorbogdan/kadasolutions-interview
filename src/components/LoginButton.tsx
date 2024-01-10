"use client"
import { signIn } from "next-auth/react"
import Button from "./Button"

const LoginButton = () => {
  return (
    <Button onClick={() => signIn("google")} className="px-5 py-2">
      Sign In
    </Button>
  )
}

export default LoginButton
