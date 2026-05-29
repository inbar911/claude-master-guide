"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; label: string };

export function TOC({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="text-sm">
      <div className="mb-3 flex items-center gap-2 font-bold text-ink">
        <List className="h-4 w-4 text-clay" />
        בדף הזה
      </div>
      <ul className="flex flex-col gap-0.5 border-s border-line ps-3">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={cn(
                "block rounded-md px-2 py-1.5 leading-snug transition",
                active === it.id
                  ? "font-bold text-clay"
                  : "text-muted hover:text-ink",
              )}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
