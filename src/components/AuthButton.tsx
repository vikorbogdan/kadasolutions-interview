import { useSession } from "next-auth/react"
import LoadingSpinner from "./LoadingSpinner"
import LogoutButton from "./LogoutButton"
import LoginButton from "./LoginButton"

const AuthButton = () => {
  const { status } = useSession()
  if (status === "loading") return <LoadingSpinner />
  if (status === "authenticated") return <LogoutButton />
  if (status === "unauthenticated") return <LoginButton />
}

export default AuthButton
