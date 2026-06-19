import type { ReactNode } from "react";

const CONTROL =
  "w-full rounded-md border border-white/10 bg-main-black/30 px-3.5 py-2.5 text-sm text-main-mist placeholder:text-main-mist/30 transition-colors focus:border-main-accent-t1/50 focus:outline-none";

/** Mono-labelled form control wrapper — the "letterhead field" look. */
export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono-tech text-[10px] uppercase tracking-[0.2em] text-main-mist/50">{label}</span>
      {children}
    </label>
  );
}

export { CONTROL };
