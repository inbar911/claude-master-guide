"use client";

import { useState } from "react";
import { Copy, Check, TerminalSquare } from "lucide-react";

export function CommandBlock({
  commands,
  label = "טרמינל",
}: {
  commands: string[];
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(commands.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <div dir="ltr" className="my-5 overflow-hidden rounded-xl border border-ink/15 bg-[#1f1d18] shadow-card">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="flex items-center gap-2 font-mono text-xs text-white/55">
          <TerminalSquare className="h-3.5 w-3.5" /> {label}
        </span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-white/55 transition hover:bg-white/10 hover:text-white"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[0.85rem] leading-relaxed text-[#e9e2d0]">
        {commands.map((c, i) => (
          <div key={i} className="whitespace-pre">
            <span className="select-none text-clay-soft">$ </span>
            {c}
          </div>
        ))}
      </pre>
    </div>
  );
}
