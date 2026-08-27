export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent-muted)]">
        {label}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-[var(--text)] md:text-4xl">{title}</h2>
    </div>
  );
}
