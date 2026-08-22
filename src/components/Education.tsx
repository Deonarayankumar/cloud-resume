import { certifications, education } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="06" label="Education" title="Education & Certifications" />

        <div className="space-y-4">
          <article className="surface-card edu-card p-6 text-center">
            <p className="font-mono-ui text-xs text-[var(--c-accent)]">{education.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-[var(--c-heading)]">{education.degree}</h3>
            <p className="mt-2 text-[var(--text-muted)]">{education.institution}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{education.detail}</p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <article key={cert.name} className="surface-card edu-card p-5 text-center">
                <h3 className="text-sm font-medium text-[var(--c-heading)]">{cert.name}</h3>
                <p className="font-mono-ui mt-1 text-xs text-[var(--text-muted)]">{cert.issuer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
