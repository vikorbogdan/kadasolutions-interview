import { cn } from "@/utils/cn"
import { ReactNode } from "react"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | undefined
  className?: string
}
export const buttonVariants = {
  black:
    "transition-colors hover:bg-primary bg-black font-medium rounded-full text-white block text-center",
}
const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(className, buttonVariants.black)} {...props}>
      {children}
    </button>
  )
}

export default Button
