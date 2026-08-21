import { skills } from '../content/skills';
import { stats } from '../content/profile';

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--border)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Professional Skills</h2>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {skills.map(({ name, Icon, color }) => (
            <div
              key={name}
              title={name}
              className="group flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2 transition hover:border-[var(--accent)] hover:bg-[var(--surface-elevated)] sm:h-24 sm:w-24"
            >
              <Icon className="text-3xl sm:text-4xl" style={{ color }} aria-hidden />
              <span className="sr-only">{name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-8 border-t border-[var(--border)] pt-12 sm:flex-row sm:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center px-16 text-center ${
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
