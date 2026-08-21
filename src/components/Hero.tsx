import { profile, summary } from '../content/profile';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {profile.tagline}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-xl text-slate-400">{profile.title}</p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
          <a href={`tel:${profile.phone}`} className="hover:text-cyan-400">
            {profile.phone}
          </a>
          <span className="text-slate-600">|</span>
          <a href={`mailto:${profile.email}`} className="hover:text-cyan-400">
            {profile.email}
          </a>
          <span className="text-slate-600">|</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            LinkedIn
          </a>
          <span className="text-slate-600">|</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            GitHub
          </a>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">{summary}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View Projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
          >
            GitHub Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
