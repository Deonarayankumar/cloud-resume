import { projects } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" label="Portfolio" title="Projects" />

        <div className="mt-12 flex gap-4 overflow-x-auto pb-4">
          {projects.map((project) => (
            <article
              key={project.repo}
              className="surface-card portfolio-card w-[min(100%,320px)] shrink-0 overflow-hidden"
            >
              <div className="flex h-44 items-end border-b border-[var(--border)] bg-[var(--c-surface-alt)] p-5">
                <div>
                  <p className="font-mono-ui text-xs uppercase tracking-wider text-[var(--c-accent)]">{project.repo}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--c-heading)]">{project.name}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-[var(--text-muted)]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="pill-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="pill-btn-primary block w-full text-center text-xs"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
