import { profile } from '../content/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const linkedinHandle = profile.linkedin.replace(/\/$/, '').split('/').filter(Boolean).pop();

export default function Contact() {
  return (
    <section id="contact" className="section-deferred px-6 py-12">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeading label="Contact" title="How to reach me" />
        <p className="section-subtitle">
          Email is the fastest way to reach me. Phone and LinkedIn are listed as well.
        </p>

        <div className="reveal-stagger mt-10 grid gap-4 sm:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="surface-card p-6 text-center no-underline">
            <p className="section-kicker">Email</p>
            <p className="mt-3 break-all text-sm text-[var(--c-heading)]">{profile.email}</p>
          </a>
          <a href={`tel:${profile.phone}`} className="surface-card p-6 text-center no-underline">
            <p className="section-kicker">Phone</p>
            <p className="mt-3 text-sm text-[var(--c-heading)]">{profile.phone}</p>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card p-6 text-center no-underline"
          >
            <p className="section-kicker">LinkedIn</p>
            <p className="mt-3 text-sm text-[var(--c-heading)]">{linkedinHandle}</p>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="pill-btn">
            GitHub
          </a>
          <a href={profile.resumeUrl} download className="pill-btn-primary">
            Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
