import { profile } from '../content/profile';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--text-muted)] sm:flex-row">
        <p>
          © {currentYear} {profile.name}
        </p>
        <p className="font-mono-ui flex items-center gap-2 text-xs uppercase tracking-wider">
          <span className="status-led status-led--pulse" aria-hidden />
          All systems operational
        </p>
      </div>
    </footer>
  );
}
