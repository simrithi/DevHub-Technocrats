import { cn } from "@/lib/utils";

export function Badge({ label, variant = "default" }) {
  const styles = {
    default: "bg-zinc-700 text-zinc-200",
    success: "bg-green-700 text-green-100",
    danger: "bg-red-700 text-red-100",
  };
  return <span className={cn("px-2 py-0.5 rounded text-xs font-medium", styles[variant])}>{label}</span>;
}
