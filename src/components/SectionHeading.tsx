type SectionHeadingProps = {
  label: string;
  title: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ label, title, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`mb-10 flex flex-col ${alignment}`}>
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent-muted)]">
        {label}
      </p>
      <h2 className="section-title mt-2">{title}</h2>
    </div>
  );
}
