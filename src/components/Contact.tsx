import { profile } from '../content/profile';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title">Let&apos;s talk</h2>
        <p className="section-subtitle">
          I&apos;m actively seeking opportunities as a DevOps Engineer, Platform Engineer, or Cloud
          DevOps role. Feel free to reach out to discuss potential collaborations.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6 text-center transition hover:border-white/30"
          >
            <p className="text-xs uppercase tracking-wider text-neutral-500">Email</p>
            <p className="mt-2 text-sm text-white break-all">{profile.email}</p>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6 text-center transition hover:border-white/30"
          >
            <p className="text-xs uppercase tracking-wider text-neutral-500">Phone</p>
            <p className="mt-2 text-sm text-white">{profile.phone}</p>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6 text-center transition hover:border-white/30"
          >
            <p className="text-xs uppercase tracking-wider text-neutral-500">LinkedIn</p>
            <p className="mt-2 text-sm text-white">deonarayan-kumar-b73052186</p>
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
