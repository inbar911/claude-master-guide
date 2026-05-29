"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Asterisk } from "lucide-react";
import { navItems } from "@/lib/nav";
import { cn } from "@/lib/utils";

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "group flex items-center gap-3 rounded-xl border px-3 py-2.5 transition",
              active
                ? "border-clay/30 bg-clay-tint shadow-soft"
                : "border-transparent hover:border-line hover:bg-paper",
            )}
          >
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition",
                active
                  ? "border-clay/30 bg-paper text-clay"
                  : "border-line bg-paper text-muted group-hover:text-ink",
              )}
            >
              <Icon className="h-4.5 w-4.5" strokeWidth={1.9} size={18} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2">
                <span
                  className={cn(
                    "truncate text-sm font-bold",
                    active ? "text-ink" : "text-ink/85",
                  )}
                >
                  {item.title}
                </span>
                {item.step && (
                  <span
                    className={cn(
                      "rounded-md px-1.5 py-px font-mono text-[0.65rem] font-semibold",
                      active
                        ? "bg-clay text-paper"
                        : "bg-ink/[0.06] text-muted",
                    )}
                  >
                    {item.step}
                  </span>
                )}
              </span>
              <span className="block truncate text-xs text-muted">
                {item.subtitle}
              </span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-clay text-paper shadow-glow">
        <Asterisk className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-black text-ink">המדריך ל-Claude</span>
        <span className="block text-xs text-muted">Chat · Cowork · Code</span>
      </span>
    </Link>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-cream/90 px-4 py-3 backdrop-blur md:hidden">
        <Brand />
        <button
          onClick={() => setOpen(true)}
          aria-label="פתח תפריט"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-paper text-ink"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-[286px] shrink-0 flex-col border-s border-line bg-cream/60 md:flex">
        <div className="border-b border-line px-5 py-5">
          <Brand />
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <NavList />
        </div>
        <div className="border-t border-line px-5 py-4 text-xs leading-relaxed text-muted">
          מדריך עצמאי. לא קשור רשמית ל-Anthropic.
          <br />
          עודכן: מאי 2026
        </div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 end-0 flex w-[300px] max-w-[85vw] flex-col bg-cream shadow-card animate-fade-up">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <Brand />
              <button
                onClick={() => setOpen(false)}
                aria-label="סגור תפריט"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-paper text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-4">
              <NavList onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
