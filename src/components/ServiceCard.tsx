import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  delay?: number
  variant?: "default" | "neon" | "neon-blue" | "neon-green" | "neon-red"
}

export const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  className, 
  delay = 0, 
  variant = "default" 
}: ServiceCardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "neon":
        return "neon-glass";
      case "neon-blue":
        return "neon-glass-blue";
      case "neon-green":
        return "neon-glass-green";
      case "neon-red":
        return "neon-glass-red";
      default:
        return "bg-card border border-line-700 card-hover";
    }
  };

  return (
    <div
      className={cn(
        "p-6 rounded-xl stagger-fade",
        getVariantClasses(),
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