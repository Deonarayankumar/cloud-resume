import { summary } from '../content/profile';

export default function About() {
  return (
    <section id="about" className="border-t border-slate-800 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="About" title="Career objective" />
        <p className="max-w-4xl text-lg leading-8 text-slate-400">{summary}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">{label}</p>
      <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}
