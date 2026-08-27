import { experience } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function Experience() {
  const job = experience[0];

  return (
    <section id="experience" className="section-deferred px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Experience" title="Work experience" />

        <div className="surface-card p-6 md:p-8">
          <header>
            <h3 className="text-[length:var(--font-lg)] font-semibold text-[var(--c-heading)]">{job.role}</h3>
            <p className="mt-1 text-[var(--c-accent)]">{job.company}</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {job.period} · {job.location}
            </p>
          </header>

          <p className="section-kicker mt-8">Client engagements</p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {job.engagements.map((engagement) => (
              <article
                key={engagement.client}
                className="flex flex-col rounded-[var(--radius-box)] border border-[var(--border)] bg-[var(--c-surface-alt)] p-5 md:p-6"
              >
                <h4 className="text-[length:var(--font-lg)] font-medium text-[var(--c-heading)]">
                  {engagement.client}
                </h4>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{engagement.period}</p>
                <ul className="mt-5 flex flex-1 flex-col gap-3">
                  {engagement.highlights.map((item) => (
                    <li key={item} className="text-sm leading-6 text-[var(--text-muted)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
