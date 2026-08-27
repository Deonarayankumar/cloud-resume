import { summary } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="About" title="Career objective" />
        <p className="section-subtitle">
          {summary}
        </p>
      </div>
    </section>
  );
}
