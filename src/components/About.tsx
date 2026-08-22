import { summary } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="01" label="About" title="Career objective" />
        <p className="mx-auto max-w-3xl text-center leading-7 text-[var(--text-muted)]" style={{ fontSize: 'var(--font-body-sm)' }}>
          {summary}
        </p>
      </div>
    </section>
  );
}
