import { projects } from '../content/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="section-deferred px-6 py-12">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeading label="Projects" title="What I ship" />

        <div className="reveal-stagger grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.repo} className="surface-card flex flex-col overflow-hidden">
              <div className="border-b border-[var(--border)] bg-[var(--c-surface-alt)] px-5 py-5">
                <p className="text-[length:var(--font-xs)] text-[var(--c-accent)]">{project.repo}</p>
                <h3 className="mt-2 text-[length:var(--font-lg)] font-semibold text-[var(--c-heading)]">
                  {project.name}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-6 text-[var(--text-muted)]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn-primary w-full"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
