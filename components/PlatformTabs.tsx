"use client";

import { useState } from "react";
import { Apple, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function PlatformTabs({
  windows,
  mac,
}: {
  windows: React.ReactNode;
  mac: React.ReactNode;
}) {
  const [tab, setTab] = useState<"win" | "mac">("win");

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-line bg-paper shadow-soft">
      <div className="flex border-b border-line bg-cream/60">
        <button
          onClick={() => setTab("win")}
          className={cn(
            "flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-bold transition",
            tab === "win"
              ? "bg-paper text-ink shadow-[inset_0_-2px_0_var(--clay)]"
              : "text-muted hover:text-ink",
          )}
        >
          <Monitor className="h-4 w-4" /> Windows
        </button>
        <button
          onClick={() => setTab("mac")}
          className={cn(
            "flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-bold transition",
            tab === "mac"
              ? "bg-paper text-ink shadow-[inset_0_-2px_0_var(--clay)]"
              : "text-muted hover:text-ink",
          )}
        >
          <Apple className="h-4 w-4" /> Mac
        </button>
      </div>
      <div className="px-5 py-4 text-[0.97rem] leading-[1.8] text-ink/85 [&_strong]:font-bold [&_code]:rounded [&_code]:bg-ink/[0.06] [&_code]:px-1 [&_code]:py-px [&_code]:font-mono [&_code]:text-[0.85em] [&_.kbd]:mx-0.5">
        {tab === "win" ? windows : mac}
      </div>
    </div>
  );
}
