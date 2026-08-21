import { certifications, education } from '../content/profile';

export default function Education() {
  return (
    <section id="education" className="border-t border-[var(--border)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="mt-12 space-y-6">
          <article className="surface-card rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-[var(--text)]">{education.degree}</h3>
            <p className="mt-2 text-[var(--accent-muted)]">{education.institution}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {education.period} · {education.detail}
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <article key={cert.name} className="surface-card rounded-xl p-5 text-center">
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
