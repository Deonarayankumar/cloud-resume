import { heroIntro, profile } from '../content/profile';

export default function Hero() {
  return (
    <section id="home" className="px-6 pb-20 pt-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
        <div className="shrink-0">
          <div className="flex h-56 w-56 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-neutral-800 to-neutral-900 text-5xl font-bold text-white shadow-[0_0_60px_rgba(255,255,255,0.05)] md:h-72 md:w-72 md:text-6xl">
            DK
          </div>
        </div>

        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            I&apos;m {profile.firstName} Kumar
          </h1>
          <p className="mt-3 text-2xl text-neutral-400 md:text-3xl">{profile.tagline}</p>
          <p className="mt-6 text-sm leading-7 text-neutral-400 md:text-base">{heroIntro}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#contact" className="pill-btn">
              Connect with Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="pill-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
