import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "secondary"
  size?: "default" | "sm" | "lg"
  magnetic?: boolean
}

export const AuctusButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", magnetic = true, children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-ac-400 shadow-lg shadow-primary/20",
      ghost: "text-fg-100 border border-line-700 hover:bg-bg-800 hover:border-ac-400/50",
      secondary: "bg-bg-800 text-fg-100 hover:bg-line-700 border border-line-700"
    }
    
    const sizes = {
      default: "px-6 py-3 text-sm",
      sm: "px-4 py-2 text-xs",
      lg: "px-8 py-4 text-base"
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          magnetic && "magnetic-btn",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

AuctusButton.displayName = "AuctusButton"