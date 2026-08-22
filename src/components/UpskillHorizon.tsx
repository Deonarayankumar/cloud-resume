import { upskillGoals } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function UpskillHorizon() {
  return (
    <section id="upskill" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Growth" title="The Upskill Horizon" />

        <p className="mb-12 max-w-2xl text-sm leading-7 text-[var(--text-muted)] md:text-base">
          A focused roadmap of what I am building toward next — blending security, automation, and
          cloud-native depth.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {upskillGoals.map((goal) => (
            <article
              key={goal.title}
              className="surface-card rounded-[1.5rem] p-6 md:p-8"
              style={{
                background:
                  'linear-gradient(180deg, color-mix(in srgb, var(--surface) 92%, var(--accent) 8%), var(--surface))',
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] text-2xl">
                {goal.icon}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[var(--text)]">{goal.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{goal.detail}</p>
              {goal.tags ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {goal.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
