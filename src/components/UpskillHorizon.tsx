import { upskillGoals } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function UpskillHorizon() {
  return (
    <section id="upskill" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Growth" title="The Upskill Horizon" />

        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-7 text-[var(--text-muted)] md:text-base">
          A focused roadmap of what I am building toward next — blending security, automation,
          and cloud-native depth.
        </p>

        <ol className="space-y-6">
          {upskillGoals.map((goal, index) => (
            <li
              key={goal.title}
              className="surface-card group flex gap-5 rounded-xl p-6 transition hover:border-[var(--accent)]/50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--surface-elevated)] text-sm font-bold text-[var(--accent-muted)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent-muted)]">
                  {goal.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{goal.detail}</p>
                {goal.tags ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {goal.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
