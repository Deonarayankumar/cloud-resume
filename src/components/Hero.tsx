import { heroIntro, profile } from '../content/profile';

const heroBackground = (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
    <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
  </div>
);

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-32">
      {heroBackground}

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt={`${profile.name} — DevOps Engineer`}
            width={288}
            height={288}
            decoding="async"
            fetchPriority="high"
            className="h-56 w-56 rounded-full border-2 border-[var(--border)] object-cover object-top shadow-[0_0_40px_rgba(59,130,246,0.15)] md:h-72 md:w-72"
          />
        </div>

        <div className="min-w-0 max-w-2xl text-center lg:text-left">
          <h1 className="text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
            I&apos;m {profile.firstName} Kumar
          </h1>
          <p className="mt-3 text-xl text-[var(--accent-muted)] sm:text-2xl lg:text-3xl">{profile.tagline}</p>
          <p className="mt-6 text-sm leading-7 text-[var(--text-muted)] md:text-base">{heroIntro}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
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
