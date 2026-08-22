import { profile } from '../content/profile';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--text-muted)] sm:flex-row">
        <p>
          © {currentYear} {profile.name}
        </p>
        <p>Connect with me</p>
      </div>
    </footer>
  );
}
