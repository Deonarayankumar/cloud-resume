import { profile } from '../content/profile';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--border)] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title">Let&apos;s talk</h2>
        <p className="section-subtitle">
          I&apos;m actively seeking opportunities as a DevOps Engineer, Platform Engineer, or Cloud
          DevOps role. Feel free to reach out to discuss potential collaborations.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="surface-card rounded-xl p-6 text-center transition hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Email</p>
            <p className="mt-2 text-sm text-[var(--text)] break-all">{profile.email}</p>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="surface-card rounded-xl p-6 text-center transition hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Phone</p>
            <p className="mt-2 text-sm text-[var(--text)]">{profile.phone}</p>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="surface-card rounded-xl p-6 text-center transition hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">LinkedIn</p>
            <p className="mt-2 text-sm text-[var(--text)]">deonarayan-kumar-b73052186</p>
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
