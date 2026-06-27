import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-[var(--primary)] text-white hover:opacity-90",

    secondary:
      "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--card)]",
  };

  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-[var(--radius)] px-4 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
