type SectionHeadingProps = {
  index?: string;
  label: string;
  title: string;
};

export function SectionHeading({ index, label, title }: SectionHeadingProps) {
  const overhead = index ? `${index} / ${label}` : label;

  return (
    <div className="mb-10 text-center">
      <p className="overhead">{overhead}</p>
      <h2 className="section-title mt-3">{title}</h2>
    </div>
  );
}
