import { cn } from "@/lib/utils"

interface MarqueeProps {
  items: string[]
  className?: string
}

export const Marquee = ({ items, className }: MarqueeProps) => {
  const duplicatedItems = [...items, ...items]
  
  return (
    <div className={cn("overflow-hidden relative bg-bg-900/50 py-4", className)}>
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <span 
            key={index}
            className="text-fg-300 font-medium text-sm px-4 py-2 bg-bg-800 rounded-lg border border-line-700 flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
      {/* Fade gradients */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-bg-900/50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-bg-900/50 to-transparent pointer-events-none" />
    </div>
  )
}