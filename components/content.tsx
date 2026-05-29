import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="anchor-target scroll-mt-24 border-t border-line pt-10">
      {eyebrow && (
        <div className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-clay">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl font-black text-ink sm:text-[1.75rem]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-8 text-xl font-bold text-ink">{children}</h3>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-[1.8] text-ink/80 [&_strong]:font-bold [&_strong]:text-ink">
      {children}
    </p>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="prose-he">{children}</div>;
}

export function Divider() {
  return <hr className="my-10 border-line" />;
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "clay" | "sage" | "ocean" | "amber";
}) {
  const tones = {
    neutral: "border-line bg-paper text-muted",
    clay: "border-clay/30 bg-clay-tint text-clay-dark",
    sage: "border-sage/30 bg-sage-tint text-sage",
    ocean: "border-ocean/30 bg-ocean-tint text-ocean",
    amber: "border-amber/40 bg-amber-tint text-amber",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function Card({
  icon: Icon,
  title,
  children,
  className,
}: {
  icon?: LucideIcon;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-line bg-paper p-5 shadow-soft", className)}>
      {(Icon || title) && (
        <div className="mb-2 flex items-center gap-2.5">
          {Icon && (
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-clay-tint text-clay">
              <Icon className="h-4.5 w-4.5" strokeWidth={2} size={18} />
            </span>
          )}
          {title && <h4 className="text-base font-bold text-ink">{title}</h4>}
        </div>
      )}
      <div className="text-[0.95rem] leading-[1.75] text-ink/85 [&_strong]:font-bold [&_strong]:text-ink">
        {children}
      </div>
    </div>
  );
}

export function Grid({
  cols = 2,
  children,
}: {
  cols?: 2 | 3;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "my-6 grid gap-4",
        cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {children}
    </div>
  );
}

export function TermCard({
  term,
  en,
  children,
}: {
  term: string;
  en?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 rounded-2xl border border-ocean/25 bg-ocean-tint/40 p-5">
      <div className="mb-1.5 flex items-baseline gap-2">
        <span className="text-base font-black text-ink">{term}</span>
        {en && <span className="font-mono text-xs text-ocean">{en}</span>}
      </div>
      <div className="text-[0.95rem] leading-[1.8] text-ink/85 [&_strong]:font-bold">
        {children}
      </div>
    </div>
  );
}

export function KeyTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border-s-4 border-clay bg-paper p-5 shadow-soft">
      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-clay">
        בקצרה
      </div>
      <div className="text-[1.02rem] font-medium leading-[1.8] text-ink">
        {children}
      </div>
    </div>
  );
}
