import { cn } from "@/utils/cn"
import { ReactNode } from "react"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | undefined
  className?: string
  variant?: keyof typeof buttonVariants
}
export const buttonVariants = {
  black:
    "transition-colors hover:bg-primary bg-black font-medium rounded-full text-white block text-center",
  destructive: "text-lg hover:underline hover:text-red-500 block text-center",
}
const Button = ({ variant, children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants[variant ?? "black"], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
