import { summary } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="About Me" title="Career objective" />
        <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-[var(--text-muted)] md:text-base">
          {summary}
        </p>
      </div>
    </section>
  );
}
