import { cn } from "@/lib/utils";
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning";
  className?: string;
}
export const Badge = ({
  children,
  variant = "default",
  className
}: BadgeProps) => {
  const variants = {
    default: "bg-bg-800 text-fg-100 border-line-700",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20"
  };
  
  return (
    <span className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};