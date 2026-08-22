import { aboutNarrative, summary } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="About" title="About Me" />

        <div className="space-y-6 text-sm leading-8 text-[var(--text-muted)] md:text-base">
          <p>{summary}</p>
          <p>
            <span className="font-medium text-[var(--text)]">On the enterprise side: </span>
            {aboutNarrative.enterprise}
          </p>
          <p>
            <span className="font-medium text-[var(--text)]">On the cloud migration side: </span>
            {aboutNarrative.cloud}
          </p>
          <p>
            If you are building delivery platforms, modernising release workflows, or scaling cloud
            operations and need an engineer who can move between automation, infrastructure, and
            day-2 support, let&apos;s talk.
          </p>
        </div>
      </div>
    </section>
  );
}
