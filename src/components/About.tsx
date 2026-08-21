import { summary } from '../content/profile';

export default function About() {
  return (
    <section id="about" className="border-t border-[var(--border)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">{summary}</p>
      </div>
    </section>
  );
}
