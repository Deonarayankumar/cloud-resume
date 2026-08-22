import { profile } from '../content/profile';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-[var(--text-muted)] sm:flex-row">
        <p>
          © {currentYear} {profile.name}
        </p>
        <p>DevOps Engineer · CI/CD · Cloud Platforms</p>
      </div>
    </footer>
  );
}
