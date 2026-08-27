import { upskillGoals } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function UpskillHorizon() {
  return (
    <section id="upskill" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="05" label="Growth" title="The Upskill Horizon" />

        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-7 text-[var(--text-muted)] md:text-base">
          A focused roadmap of what I am building toward next — blending security, automation,
          and cloud-native depth.
        </p>

        <ol className="space-y-4">
          {upskillGoals.map((goal, index) => (
            <li key={goal.title} className="surface-card scope-card flex gap-5 p-6">
              <span className="font-mono-ui flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--border)] bg-[var(--c-surface-alt)] text-sm font-bold text-[var(--c-accent)]" style={{ borderRadius: 'var(--radius-box)' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--c-heading)]">{goal.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{goal.detail}</p>
                {goal.tags ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {goal.tags.map((tag) => (
                      <span key={tag} className="pill-mono">
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
