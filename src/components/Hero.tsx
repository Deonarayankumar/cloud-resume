import { heroIntro, profile } from '../content/profile';
import ClientStrip from './ClientStrip';

const heroBackground = (
  <div
    className="pointer-events-none absolute inset-0 -z-10"
    style={{ background: 'var(--hero-gradient)' }}
  />
);

export default function Hero() {
  return (
    <section id="home" className="relative px-6 pb-20 pt-32 md:pt-36">
      {heroBackground}

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent-muted)]">
            {profile.name}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[var(--text)] md:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-4 text-base text-[var(--accent-muted)] md:text-lg">{profile.roleLine}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--text-muted)] md:text-base">
            {heroIntro}
          </p>

          <ClientStrip />

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="pill-btn-primary">
              Explore my Work
            </a>
            <a href="#contact" className="pill-btn">
              Get in touch
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/profile.jpg"
            alt={`${profile.name} — DevOps Engineer`}
            width={288}
            height={288}
            decoding="async"
            fetchPriority="high"
            className="h-56 w-56 rounded-[2rem] border border-[var(--border)] object-cover object-top shadow-[var(--card-shadow)] md:h-72 md:w-72"
          />
        </div>
      </div>
    </section>
  );
}
