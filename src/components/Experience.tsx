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
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" label="Experience" title="Work history" />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--border)] md:block" />
          <div className="absolute left-1/2 top-8 z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center border border-[var(--border)] bg-[var(--bg)] md:flex" style={{ borderRadius: 'var(--radius-box)' }}>
            <span className="text-sm">💼</span>
          </div>

          <article className="relative md:mt-4 md:w-[calc(50%-2rem)] md:pr-8">
            <div className="surface-card exp-card p-6 md:p-8">
              <div className="mb-4 inline-flex border border-[var(--border)] bg-[var(--c-surface-alt)] px-3 py-2" style={{ borderRadius: 'var(--radius-box)' }}>
                <span className="font-mono-ui text-xs font-semibold tracking-wider text-[var(--c-heading)]">HEXAWARE</span>
              </div>

              <h3 className="text-lg font-semibold text-[var(--c-heading)]">{job.role}</h3>
              <p className="font-mono-ui mt-1 text-sm text-[var(--c-accent)]">{job.company}</p>

              <div className="font-mono-ui mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                <p>{job.period}</p>
                <p>{job.location}</p>
              </div>

              {job.engagements.map((engagement) => (
                <div
                  key={engagement.client}
                  className="content-visibility-auto mt-8 space-y-4 border-l-2 border-[var(--c-accent)]/40 pl-5"
                >
                  <h4 className="font-medium text-[var(--c-heading)]">{engagement.client}</h4>
                  <p className="font-mono-ui mt-1 text-xs text-[var(--text-muted)]">{engagement.period}</p>

                  <p className="overhead mt-4">Key achievements</p>
                  <ul className="mt-3 space-y-3">
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
