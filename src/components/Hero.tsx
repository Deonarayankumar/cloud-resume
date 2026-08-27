import { heroIntro, profile } from '../content/profile';

export default function Hero() {
  return (
    <section id="home" className="relative px-6 pb-20 pt-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt={`${profile.name} — DevOps Engineer`}
            width={288}
            height={288}
            decoding="async"
            fetchPriority="high"
            className="box h-56 w-56 object-cover object-top md:h-72 md:w-72"
          />
        </div>

        <div className="max-w-2xl text-center md:text-left">
          <p className="overhead">operator console</p>
          <div className="availability-badge mt-4 inline-flex">
            <span className="status-led status-led--pulse" aria-hidden />
            Available for work
          </div>

          <h1
            className="mt-6 font-semibold leading-tight text-[var(--c-heading)]"
            style={{ fontSize: 'var(--font-5xl)' }}
          >
            I&apos;m {profile.firstName} Kumar
          </h1>
          <p className="font-mono-ui mt-3 text-[var(--c-accent)]" style={{ fontSize: 'var(--font-xl)' }}>
            {profile.tagline}
          </p>
          <p className="mt-6 leading-7 text-[var(--text-muted)]" style={{ fontSize: 'var(--font-body-sm)' }}>
            {heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#contact" className="pill-btn-primary">
              Connect with Me
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pill-btn">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
