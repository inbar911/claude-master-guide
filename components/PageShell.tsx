import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TOC, type TocItem } from "@/components/TOC";

export function PageHeader({
  step,
  title,
  lead,
  badges,
}: {
  step?: string;
  title: string;
  lead: string;
  badges?: string[];
}) {
  return (
    <header className="mb-10">
      {step && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-clay/25 bg-clay-tint px-3 py-1 font-mono text-xs font-bold text-clay-dark">
          שלב {step}
        </div>
      )}
      <h1 className="text-3xl font-black leading-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-[1.8] text-ink/75">{lead}</p>
      {badges && badges.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-muted"
            >
              {b}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}

export function PageNav({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:justify-between">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 transition hover:border-clay/30 hover:shadow-soft"
        >
          <ArrowRight className="h-5 w-5 text-clay transition group-hover:-translate-x-1" />
          <span>
            <span className="block text-xs text-muted">הקודם</span>
            <span className="block font-bold text-ink">{prev.label}</span>
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          href={next.href}
          className="group flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 text-start transition hover:border-clay/30 hover:shadow-soft sm:flex-row-reverse sm:text-end"
        >
          <ArrowLeft className="h-5 w-5 text-clay transition group-hover:translate-x-1" />
          <span>
            <span className="block text-xs text-muted">הבא</span>
            <span className="block font-bold text-ink">{next.label}</span>
          </span>
        </Link>
      )}
    </div>
  );
}

export function PageShell({
  toc,
  children,
}: {
  toc?: TocItem[];
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:py-14">
      {toc && toc.length > 0 ? (
        <div className="grid gap-10 lg:grid-cols-[1fr_220px]">
          <div className="min-w-0">{children}</div>
          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <TOC items={toc} />
            </div>
          </aside>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
