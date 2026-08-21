import { certifications, education } from '../content/profile';

export default function Education() {
  return (
    <section id="education" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="mt-12 space-y-6">
          <article className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6 text-center">
            <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
            <p className="mt-2 text-neutral-400">{education.institution}</p>
            <p className="mt-1 text-sm text-neutral-500">
              {education.period} · {education.detail}
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <article
                key={cert.name}
                className="rounded-xl border border-white/10 bg-[#0a0a0a] p-5 text-center"
              >
                <h3 className="text-sm font-medium text-white">{cert.name}</h3>
                <p className="mt-1 text-xs text-neutral-500">{cert.issuer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
