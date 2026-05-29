import { cn } from "@/lib/utils";

export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <ol className="my-6 flex flex-col gap-0 ps-0">{children}</ol>
  );
}

export function Step({
  n,
  title,
  children,
  last = false,
}: {
  n: number | string;
  title: string;
  children?: React.ReactNode;
  last?: boolean;
}) {
  return (
    <li className="relative flex gap-4 ps-0">
      <div className="flex flex-col items-center">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-clay/30 bg-clay-tint font-mono text-sm font-bold text-clay-dark">
          {n}
        </span>
        {!last && <span className="w-px flex-1 bg-line" />}
      </div>
      <div className={cn("min-w-0 flex-1", last ? "pb-1" : "pb-7")}>
        <h4 className="mb-1 text-[1.05rem] font-bold text-ink">{title}</h4>
        <div className="text-[0.97rem] leading-[1.8] text-ink/85 [&_strong]:font-bold [&_code]:rounded [&_code]:bg-ink/[0.06] [&_code]:px-1 [&_code]:py-px [&_code]:font-mono [&_code]:text-[0.85em] [&_a]:font-medium [&_a]:text-clay [&_a]:underline [&_a]:decoration-clay/30 [&_a]:underline-offset-2">
          {children}
        </div>
      </div>
    </li>
  );
}
