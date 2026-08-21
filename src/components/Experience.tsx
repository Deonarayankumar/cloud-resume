import { experience } from '../content/profile';
import { SectionHeading } from './About';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-800 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Experience" title="Professional experience" />

        {experience.map((job) => (
          <article key={job.company} className="mb-12">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <p className="mt-1 text-cyan-400">{job.company}</p>
              </div>
              <p className="text-sm text-slate-500">{job.period}</p>
            </div>

            <div className="mt-8 space-y-10">
              {job.engagements.map((engagement) => (
                <div
                  key={engagement.client}
                  className="relative border-l border-slate-700 pl-6"
                >
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan-400" />
                  <div className="flex flex-col justify-between gap-1 md:flex-row">
                    <h4 className="font-medium text-white">{engagement.client}</h4>
                    <p className="text-sm text-slate-500">{engagement.period}</p>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {engagement.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
