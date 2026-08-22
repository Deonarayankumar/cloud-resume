import { experience } from '../content/profile';
import { SectionHeading } from './SectionHeading';

const checkIcon = (
  <svg
    className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Experience() {
  const job = experience[0];

  return (
    <section id="experience" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Experience" title="Where I've delivered impact" />

        <div className="space-y-8">
          <article className="surface-card rounded-[1.5rem] p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-4 inline-flex rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2 text-xs font-bold tracking-wider text-[var(--text)]">
                  {job.logoLabel}
                </div>
                <h3 className="text-2xl font-semibold text-[var(--text)]">{job.role}</h3>
                <p className="mt-1 text-[var(--accent-muted)]">{job.company}</p>
              </div>
              <div className="text-sm text-[var(--text-muted)]">
                <p>{job.period}</p>
                <p>{job.location}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {job.engagements.map((engagement) => (
                <div
                  key={engagement.client}
                  className="content-visibility-auto rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5"
                >
                  <h4 className="text-lg font-medium text-[var(--text)]">{engagement.client}</h4>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{engagement.period}</p>

                  <ul className="mt-4 space-y-3">
                    {engagement.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]">
                        {checkIcon}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
