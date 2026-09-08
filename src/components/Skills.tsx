import { SiJfrog } from 'react-icons/si';
import { skills } from '../content/skills';
import { stats } from '../content/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-deferred px-6 py-12">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeading label="Skills" title="Tools I work with" />

        <div className="reveal-stagger flex flex-wrap justify-center gap-3">
          {skills.map(({ name, iconClass }) => (
            <div
              key={name}
              className="box flex min-h-[5.25rem] w-[6.25rem] flex-col items-center justify-center gap-2 p-2"
            >
              {iconClass === 'skill-icon-jfrog' ? (
                <SiJfrog className="h-8 w-8" style={{ color: '#40BE46' }} aria-hidden />
              ) : (
                <i className={`${iconClass} skill-icon`} aria-hidden />
              )}
              <span className="text-center text-[length:var(--font-xs)] leading-tight text-[var(--text-muted)]">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal-stagger mx-auto mt-8 grid max-w-lg gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="box px-8 py-6 text-center">
              <p className="stat-value">{stat.value}</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{stat.label.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
