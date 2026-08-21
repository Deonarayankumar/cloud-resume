import { skillIcons, stats } from '../content/profile';

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Professional Skills</h2>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {skillIcons.map((skill) => (
            <div
              key={skill}
              className="flex h-20 w-20 items-center justify-center rounded-lg border border-white/20 bg-transparent p-2 text-center text-[10px] font-medium leading-tight text-neutral-300 sm:h-24 sm:w-24 sm:text-xs"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-8 border-t border-white/10 pt-12 sm:flex-row sm:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center px-10 text-center ${
                index > 0 ? 'sm:border-l sm:border-white/20' : ''
              }`}
            >
              <p className="text-4xl font-bold text-white md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-xs tracking-[0.2em] text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
