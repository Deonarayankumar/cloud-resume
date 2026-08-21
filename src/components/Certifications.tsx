import { certifications } from '../content/profile';
import { SectionHeading } from './About';

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-slate-800 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Certifications" title="Credentials" />
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <h3 className="font-medium text-white">{cert.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
