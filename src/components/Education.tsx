import { education } from '../content/profile';
import { SectionHeading } from './About';

export default function Education() {
  return (
    <section id="education" className="border-t border-slate-800 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Education" title="Academic background" />
        <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
          <p className="mt-2 text-cyan-400">{education.institution}</p>
          <p className="mt-1 text-sm text-slate-500">
            {education.period} · {education.detail}
          </p>
        </article>
      </div>
    </section>
  );
}
