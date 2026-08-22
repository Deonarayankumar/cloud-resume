import { useMemo, useState } from 'react';
import { projectCategories, projects, type ProjectCategory } from '../content/profile';
import Badge from './Badge';
import FilterTabs from './FilterTabs';
import { SectionHeading } from './SectionHeading';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Work" title="Explore my Work" />

        <div className="mb-10">
          <FilterTabs
            options={projectCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <a
              key={project.repo}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card surface-card group overflow-hidden rounded-[1.5rem]"
            >
              <div className={`flex h-52 items-end bg-gradient-to-br p-6 ${project.gradient}`}>
                <div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Badge variant="accent">{project.badge}</Badge>
                    <Badge>{project.category}</Badge>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-blue-100/80">{project.repo}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-[var(--accent-muted)]">{project.client}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
