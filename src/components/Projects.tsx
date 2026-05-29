import { projects } from '../content/profile';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <article key={project.name} className="card">
          <h3>
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          </h3>
          <p>{project.description}</p>
          <ul className="tag-list">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
