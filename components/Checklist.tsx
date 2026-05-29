"use client";

import { useEffect, useState } from "react";
import { Check, ListChecks, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export function Checklist({
  id,
  title = "צ'קליסט שליטה",
  items,
}: {
  id: string;
  title?: string;
  items: string[];
}) {
  const storageKey = `checklist:${id}`;
  const [done, setDone] = useState<boolean[]>(() => items.map(() => false));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as boolean[];
        if (Array.isArray(parsed) && parsed.length === items.length) {
          setDone(parsed);
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, items.length]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done, hydrated, storageKey]);

  const toggle = (i: number) =>
    setDone((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  const reset = () => setDone(items.map(() => false));

  const count = done.filter(Boolean).length;
  const pct = Math.round((count / items.length) * 100);

  return (
    <div className="my-6 rounded-2xl border border-line bg-paper p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-base font-black text-ink">
          <ListChecks className="h-5 w-5 text-clay" strokeWidth={2.1} />
          {title}
        </span>
        <button
          onClick={reset}
          className="flex items-center gap-1 text-xs text-muted transition hover:text-clay"
        >
          <RotateCcw className="h-3.5 w-3.5" /> איפוס
        </button>
      </div>

      <div className="mb-4">
        <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-muted">
          <span>
            {count} מתוך {items.length}
          </span>
          <span>{pct}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-ink/[0.07]">
          <div
            className="h-full rounded-full bg-clay transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <ul className="flex flex-col gap-1.5">
        {items.map((item, i) => (
          <li key={i}>
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-start gap-3 rounded-xl px-2 py-2 text-start transition hover:bg-cream"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition",
                  done[i]
                    ? "border-clay bg-clay text-paper"
                    : "border-line bg-paper text-transparent",
                )}
              >
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span
                className={cn(
                  "text-[0.95rem] leading-relaxed transition",
                  done[i] ? "text-muted line-through" : "text-ink/90",
                )}
              >
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
