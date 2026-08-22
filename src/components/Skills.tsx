import { skills } from '../content/skills';
import { stats } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Skills" title="Professional Skills" />

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(({ name, Icon, color }) => (
            <div
              key={name}
              title={name}
              className="flex h-20 w-20 flex-col items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2 transition hover:border-[var(--accent)] hover:bg-[var(--surface-elevated)] sm:h-24 sm:w-24"
            >
              <Icon className="text-3xl sm:text-4xl" style={{ color }} aria-hidden />
              <span className="sr-only">{name}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center sm:items-start sm:text-left sm:pl-6 md:pl-8 ${
                index > 0 ? 'sm:border-l sm:border-[var(--border)]' : ''
              }`}
            >
              <p className="text-4xl font-bold text-[var(--accent-muted)] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs tracking-[0.2em] text-[var(--text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
