import { profile } from '../content/profile';
import { SectionHeading } from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="07" label="Contact" title="Let's talk" />
        <p className="section-subtitle">
          I&apos;m actively seeking opportunities as a DevOps Engineer, Platform Engineer, or Cloud
          DevOps role. Feel free to reach out to discuss potential collaborations.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="surface-card rounded-xl p-6 text-center transition hover:border-[var(--c-accent)]"
          >
            <p className="overhead">Email</p>
            <p className="mt-2 text-sm text-[var(--text)] break-all">{profile.email}</p>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="surface-card rounded-xl p-6 text-center transition hover:border-[var(--c-accent)]"
          >
            <p className="overhead">Phone</p>
            <p className="mt-2 text-sm text-[var(--text)]">{profile.phone}</p>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="surface-card rounded-xl p-6 text-center transition hover:border-[var(--c-accent)]"
          >
            <p className="overhead">LinkedIn</p>
            <p className="mt-2 text-sm text-[var(--text)]">deonarayan-kumar8</p>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="pill-btn">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pill-btn-primary">
            Connect with Me
          </a>
        </div>
      </div>
    </section>
  );
}
