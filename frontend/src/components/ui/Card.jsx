import { cn } from "@/lib/utils";

export function Card({ children, className }) {
  return <div className={cn("bg-zinc-900 rounded-xl p-4", className)}>{children}</div>;
}
