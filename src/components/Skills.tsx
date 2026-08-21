import { skillGroups } from '../content/profile';
import { SectionHeading } from './About';

export default function Skills() {
  return (
    <section id="skills" className="border-t border-slate-800 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Skills" title="Technical expertise" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <h3 className="text-sm font-semibold text-cyan-400">{group.category}</h3>
              <ul className="mt-3 space-y-1.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-slate-400">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
