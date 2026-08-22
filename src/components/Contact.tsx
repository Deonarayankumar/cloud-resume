import { profile } from '../content/profile';

export default function Contact() {
  return (
    <section id="contact" className="section-deferred px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent-muted)]">
          Contact
        </p>
        <h2 className="section-title mt-4">Let&apos;s build something reliable together</h2>
        <p className="section-subtitle mx-auto">
          I&apos;m actively seeking opportunities as a DevOps Engineer, Platform Engineer, or Cloud
          DevOps role. Reach out to discuss collaborations, platform work, or delivery challenges.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="pill-btn-primary">
            Get in touch
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pill-btn">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="pill-btn">
            GitHub
          </a>
        </div>

        <div className="mt-12 grid gap-4 text-sm text-[var(--text-muted)] sm:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="surface-card rounded-2xl p-4 transition hover:border-[var(--accent)]">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="surface-card rounded-2xl p-4 transition hover:border-[var(--accent)]">
            {profile.phone}
          </a>
          <p className="surface-card rounded-2xl p-4">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
