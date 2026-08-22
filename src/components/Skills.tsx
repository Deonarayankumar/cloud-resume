import { skills } from '../content/skills';
import { stats } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Skills" title="Tools I work with" />

        <div className="flex flex-wrap gap-4">
          {skills.map(({ name, Icon, color }) => (
            <div
              key={name}
              title={name}
              className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 transition hover:border-[var(--accent)] hover:bg-[var(--surface-elevated)] sm:h-24 sm:w-24"
            >
              <Icon className="text-3xl sm:text-4xl" style={{ color }} aria-hidden />
              <span className="sr-only">{name}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 border-t border-[var(--border)] pt-16 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-5xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
