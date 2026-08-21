import { projects } from '../content/profile';
import { SectionHeading } from './About';

export default function Projects() {
  return (
    <section id="projects" className="border-t border-slate-800 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Projects" title="Advanced DevOps portfolio" />

        <div className="grid gap-6 lg:grid-cols-1">
          {projects.map((project) => (
            <a
              key={project.repo}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-slate-900/80"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400">
                  {project.name}
                </h3>
                <span className="text-sm text-slate-500">{project.repo}</span>
              </div>

              <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-400">
                    <span className="text-cyan-400">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium text-cyan-400 group-hover:text-cyan-300">
                View on GitHub →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
