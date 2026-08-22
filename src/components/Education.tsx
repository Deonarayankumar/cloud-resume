import { certifications, education } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Education" title="Education & Certifications" />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card rounded-[1.5rem] p-6 md:p-8">
            <h3 className="text-xl font-semibold text-[var(--text)]">{education.degree}</h3>
            <p className="mt-2 text-[var(--accent-muted)]">{education.institution}</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {education.period} · {education.detail}
            </p>
          </article>

          <div className="grid gap-4">
            {certifications.map((cert) => (
              <article key={cert.name} className="surface-card rounded-[1.5rem] p-5">
                <h3 className="text-sm font-medium text-[var(--text)]">{cert.name}</h3>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{cert.issuer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
