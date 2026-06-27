import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-[var(--radius)]",
        "border border-[var(--border)]",
        "bg-[var(--surface)]",
        "px-4",
        "text-sm",
        "text-[var(--foreground)]",
        "placeholder:text-[var(--muted-foreground)]",
        "outline-none",
        "transition-all",
        "focus:border-[var(--primary)]",
        "focus:ring-2",
        "focus:ring-[var(--primary)]/20",
        className,
      )}
      {...props}
    />
  );
}
