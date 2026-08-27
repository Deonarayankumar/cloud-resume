import { certifications, education } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section-deferred px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Education" title="Education and certifications" />

        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface-card p-6 text-center md:col-span-3">
            <p className="text-sm text-[var(--c-accent)]">{education.period}</p>
            <h3 className="mt-2 text-[length:var(--font-lg)] font-semibold text-[var(--c-heading)]">
              {education.degree}
            </h3>
            <p className="mt-2 text-[var(--text)]">{education.institution}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{education.detail}</p>
          </article>

          {certifications.map((cert) => (
            <article key={cert.name} className="surface-card p-6 text-center">
              <h3 className="text-sm font-medium text-[var(--c-heading)]">{cert.name}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{cert.issuer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
