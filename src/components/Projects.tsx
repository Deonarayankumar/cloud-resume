import { projects } from '../content/profile';

export default function Projects() {
  return (
    <section id="projects" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Projects</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.repo}
              className="surface-card overflow-hidden rounded-2xl"
            >
              <div className={`flex h-44 items-end bg-gradient-to-br p-5 ${project.gradient}`}>
                <div>
                  <p className="text-xs uppercase tracking-wider text-blue-200/70">{project.repo}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{project.name}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-[var(--text-muted)]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--text-muted)]"
                    >
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
