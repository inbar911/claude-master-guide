"use client";

import { useState } from "react";
import { Copy, Check, Quote } from "lucide-react";

export function PromptCard({
  title = "פרומפט מוכן להעתקה",
  prompt,
  note,
}: {
  title?: string;
  prompt: string;
  note?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-clay/25 bg-paper shadow-soft">
      <div className="flex items-center justify-between gap-3 border-b border-clay/15 bg-clay-tint/50 px-4 py-2.5">
        <span className="flex items-center gap-2 text-sm font-bold text-clay-dark">
          <Quote className="h-4 w-4" strokeWidth={2.2} />
          {title}
        </span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-lg border border-clay/30 bg-paper px-3 py-1.5 text-xs font-bold text-clay transition hover:bg-clay hover:text-paper"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" /> הועתק
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> העתק
            </>
          )}
        </button>
      </div>
      <pre dir="auto" className="overflow-x-auto whitespace-pre-wrap px-4 py-4 text-[0.92rem] leading-[1.8] text-ink/90">
        {prompt}
      </pre>
      {note && (
        <div className="border-t border-line bg-cream/50 px-4 py-2.5 text-xs leading-relaxed text-muted">
          {note}
        </div>
      )}
    </div>
  );
}
