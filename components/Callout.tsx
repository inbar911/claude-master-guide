import { Lightbulb, AlertTriangle, Flame, Info, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "tip" | "warning" | "important" | "note";

const styles: Record<
  Variant,
  { icon: LucideIcon; ring: string; chip: string; label: string; iconColor: string }
> = {
  tip: {
    icon: Lightbulb,
    ring: "border-sage/30 bg-sage-tint/60",
    chip: "bg-sage text-paper",
    label: "טיפ",
    iconColor: "text-sage",
  },
  warning: {
    icon: AlertTriangle,
    ring: "border-amber/40 bg-amber-tint/70",
    chip: "bg-amber text-paper",
    label: "זהירות",
    iconColor: "text-amber",
  },
  important: {
    icon: Flame,
    ring: "border-clay/30 bg-clay-tint/70",
    chip: "bg-clay text-paper",
    label: "חשוב",
    iconColor: "text-clay",
  },
  note: {
    icon: Info,
    ring: "border-ocean/30 bg-ocean-tint/60",
    chip: "bg-ocean text-paper",
    label: "לתשומת לב",
    iconColor: "text-ocean",
  },
};

export function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: React.ReactNode;
}) {
  const s = styles[variant];
  const Icon = s.icon;
  return (
    <div className={cn("my-6 rounded-2xl border p-5", s.ring)}>
      <div className="mb-2 flex items-center gap-2.5">
        <span
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-lg bg-paper",
            s.iconColor,
          )}
        >
          <Icon className="h-4 w-4" strokeWidth={2.2} />
        </span>
        <span
          className={cn(
            "rounded-md px-2 py-0.5 text-xs font-bold",
            s.chip,
          )}
        >
          {title ?? s.label}
        </span>
      </div>
      <div className="text-[0.97rem] leading-[1.85] text-ink/90 [&_strong]:font-bold [&_code]:rounded [&_code]:bg-ink/[0.06] [&_code]:px-1 [&_code]:py-px [&_code]:font-mono [&_code]:text-[0.85em]">
        {children}
      </div>
    </div>
  );
}
