import { upskillGoals } from '../content/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export default function UpskillHorizon() {
  return (
    <section id="upskill" className="section-deferred px-6 py-12">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeading label="Growth" title="What I’m building toward" />
        <p className="section-subtitle mb-6">
          A focused roadmap blending security, automation, and cloud-native depth.
        </p>

        <ol className="reveal-stagger grid gap-4 md:grid-cols-2">
          {upskillGoals.map((goal) => (
            <li key={goal.title} className="surface-card p-6">
              <h3 className="text-[length:var(--font-lg)] font-semibold text-[var(--c-heading)]">{goal.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{goal.detail}</p>
              {goal.tags ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {goal.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
