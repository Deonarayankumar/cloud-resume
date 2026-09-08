import { profile } from '../content/profile';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-[var(--text-muted)] sm:flex-row">
        <p>
          © {currentYear} {profile.name}
        </p>
        <a href={`mailto:${profile.email}`} className="text-[var(--text)] no-underline transition-colors duration-200 hover:text-[var(--c-accent)]">
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
