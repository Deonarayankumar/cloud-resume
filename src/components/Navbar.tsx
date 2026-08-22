import { navLinks, profile } from '../content/profile';
import { preloadSection } from '../lib/sections';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="font-mono-ui flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--c-heading)]">
          <span className="accent-bar h-5 w-0.5" />
          DK
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono-ui text-xs uppercase tracking-wider text-[var(--text-muted)] transition hover:text-[var(--c-accent)]"
                onMouseEnter={() => preloadSection(link.href)}
                onFocus={() => preloadSection(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={profile.resumeUrl} className="header-action__cta hidden sm:inline-flex">
            Resume
          </a>
          <ThemeToggle />
          <a
            href="#contact"
            className="pill-btn hidden md:inline-flex"
            onMouseEnter={() => preloadSection('#contact')}
            onFocus={() => preloadSection('#contact')}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
