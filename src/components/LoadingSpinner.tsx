import { cn } from "@/utils/cn"
import { Loader2 } from "lucide-react"

interface LoadingSpinnerProps {
  className?: string
}

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <Loader2
      className={cn("animate-spin text-secondary w-10 h-10", className)}
    />
  )
}

export default LoadingSpinner
