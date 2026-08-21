import { experience } from '../content/profile';

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Experience() {
  const job = experience[0];

  return (
    <section id="experience" className="border-t border-[var(--border)] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-title">Experience</h2>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--border)] md:block" />
          <div className="absolute left-1/2 top-8 z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] md:flex">
            <span className="text-sm">💼</span>
          </div>

          <article className="relative md:mt-4 md:w-[calc(50%-2rem)] md:pr-8">
            <div className="surface-card rounded-xl p-6 md:p-8">
              <div className="mb-4 flex h-12 w-32 items-center justify-center rounded border border-[var(--border)] bg-white px-3">
                <span className="text-xs font-bold tracking-wider text-[#0b1120]">HEXAWARE</span>
              </div>

              <h3 className="text-lg font-semibold text-[var(--text)]">{job.role}</h3>
              <p className="mt-1 text-sm text-[var(--accent-muted)]">{job.company}</p>

              <div className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                <p>🕐 {job.period}</p>
                <p>📍 {job.location}</p>
              </div>

              {job.engagements.map((engagement) => (
                <div key={engagement.client} className="mt-8 border-t border-[var(--border)] pt-6">
                  <h4 className="font-medium text-[var(--text)]">{engagement.client}</h4>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{engagement.period}</p>

                  <p className="mt-4 text-sm font-medium text-[var(--text)]">Key Achievements:</p>
                  <ul className="mt-3 space-y-3">
                    {engagement.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]">
                        <CheckIcon />
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
