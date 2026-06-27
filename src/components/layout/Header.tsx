import { Brain } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-[var(--border)] bg-(--background) px-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
          <Brain className="h-5 w-5 text-[var(--foreground)]" />
        </div>

        <div>
          <h1 className="text-sm font-semibold text-[var(--foreground)]">
            YouTube Knowledge Manager
          </h1>

          <p className="text-xs text-zinc-400">Learn smarter with AI</p>
        </div>
      </div>
    </header>
  );
}
