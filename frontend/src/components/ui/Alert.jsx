import { cn } from "@/lib/utils";

export function Alert({ message, type = "info" }) {
  const styles = {
    info: "bg-blue-900/40 text-blue-300 border-blue-700",
    warning: "bg-yellow-900/40 text-yellow-300 border-yellow-700",
    error: "bg-red-900/40 text-red-300 border-red-700",
  };
  return <div className={cn("border rounded-lg px-4 py-2 text-sm", styles[type])}>{message}</div>;
}
