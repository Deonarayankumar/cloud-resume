import { experience } from '../content/profile';

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((job) => (
        <article key={job.company} className="card">
          <h3>{job.role}</h3>
          <p className="muted">
            {job.company} · {job.period}
          </p>
          <ul>
            {job.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
