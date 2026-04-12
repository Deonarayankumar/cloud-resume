import { profile } from '../content/profile';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <p>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        {' · '}
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </section>
  );
}
