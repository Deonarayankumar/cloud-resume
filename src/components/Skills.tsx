import { skills } from '../content/profile';

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="tag-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
