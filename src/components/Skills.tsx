import { skills } from '../content/skills';
import { stats } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" label="Skills" title="Professional Skills" />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map(({ name, Icon, color }) => (
            <div
              key={name}
              title={name}
              className="box flex h-20 w-20 flex-col items-center justify-center p-2 transition hover:border-[var(--c-accent)] sm:h-24 sm:w-24"
            >
              <Icon className="text-3xl sm:text-4xl" style={{ color }} aria-hidden />
              <span className="sr-only">{name}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`box stat-card flex flex-col items-center px-10 py-6 text-center sm:min-w-[12rem] ${
                index > 0 ? 'sm:ml-4' : ''
              }`}
            >
              <p className="font-mono-ui font-semibold text-[var(--c-accent)]" style={{ fontSize: 'var(--font-stat)' }}>
                {stat.value}
              </p>
              <p className="font-mono-ui mt-2 text-xs tracking-[0.15em] text-[var(--text-muted)] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
