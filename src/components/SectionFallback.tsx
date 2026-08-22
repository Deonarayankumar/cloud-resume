type SectionFallbackProps = {
  minHeight?: string;
};

export function SectionFallback({ minHeight = '24rem' }: SectionFallbackProps) {
  return (
    <div
      className="section-deferred px-6 py-24"
      style={{ minHeight }}
      role="status"
      aria-label="Loading section"
    />
  );
}
