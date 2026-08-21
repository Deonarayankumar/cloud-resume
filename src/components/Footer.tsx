import { profile } from '../content/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Connect with me</p>
      </div>
    </footer>
  );
}
