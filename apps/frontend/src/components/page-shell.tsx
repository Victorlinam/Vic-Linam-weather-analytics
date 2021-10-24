import { ReactNode } from 'react';
export function PageShell({ title, children }: { title: string; children?: ReactNode }) {
  return <main className="p-6"><h1 className="text-2xl font-bold mb-4">{title}</h1><div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">{children ?? 'Content coming from APIs and analytics services.'}</div></main>;
}
