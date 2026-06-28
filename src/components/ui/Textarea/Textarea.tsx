import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          `
          w-full
          min-h-[96px]
          rounded-xl
          border
          border-[var(--border)]
          bg-[var(--background)]
          px-3
          py-2
          text-sm
          text-[var(--foreground)]
          outline-none
          resize-none
          transition
          placeholder:text-[var(--muted-foreground)]
          focus:ring-2
          focus:ring-[var(--primary)]
          `,
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
