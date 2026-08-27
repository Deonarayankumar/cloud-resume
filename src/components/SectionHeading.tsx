type SectionHeadingProps = {
  label?: string;
  title: string;
  align?: 'center' | 'left';
};

export function SectionHeading({ label, title, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mb-5 text-center' : 'mb-5 text-left'}>
      {label ? <p className="section-kicker">{label}</p> : null}
      <h2 className={`section-title ${label ? 'mt-3' : ''}`}>{title}</h2>
    </div>
  );
}
