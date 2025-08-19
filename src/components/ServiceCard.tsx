import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  delay?: number
}

export const ServiceCard = ({ title, description, icon, className, delay = 0 }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl bg-card border border-line-700 card-hover stagger-fade",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-ac-500">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-fg-100 mb-3">
        {title}
      </h3>
      <p className="text-fg-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}