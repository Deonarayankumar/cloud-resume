import { profile } from '../content/profile';
import { SectionHeading } from './About';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-800 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Contact" title="Get in touch" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard label="Email" href={`mailto:${profile.email}`} value={profile.email} />
          <ContactCard label="Phone" href={`tel:${profile.phone}`} value={profile.phone} />
          <ContactCard label="LinkedIn" href={profile.linkedin} value="deonarayan-kumar" external />
          <ContactCard label="GitHub" href={profile.github} value="Deonarayankumar" external />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  href,
  value,
  external,
}: {
  label: string;
  href: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-cyan-500/40"
    >
      <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">{label}</p>
      <p className="mt-2 text-sm text-slate-300 break-all">{value}</p>
    </a>
  );
}
