import { heroIntro, profile } from '../content/profile';

export default function Hero() {
  return (
    <section id="home" className="relative px-6 pb-12 pt-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt={`${profile.name} — DevOps Engineer`}
            width={288}
            height={288}
            decoding="async"
            fetchPriority="high"
            className="portrait h-56 w-56 md:h-72 md:w-72"
          />
        </div>

        <div className="max-w-2xl text-center md:text-left">
          <p className="section-kicker">{profile.location} · Hexaware Technologies</p>
          <h1 className="display-title mt-5">{profile.name}</h1>
          <p className="mt-4 text-[length:var(--font-xl)] font-medium text-[var(--c-accent)]">
            {profile.tagline}
          </p>
          <p className="mt-6 text-[length:var(--font-body-sm)] leading-7 text-[var(--text-muted)]">
            {heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href={profile.resumeUrl} download className="pill-btn-primary">
              Resume
            </a>
            <a href="#contact" className="pill-btn">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
