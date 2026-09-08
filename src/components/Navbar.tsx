import { navLinks, profile } from '../content/profile';
import { preloadSection } from '../lib/sections';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/92 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <a href="#home" className="text-[length:var(--font-lg)] font-semibold tracking-tight text-[var(--c-heading)]">
          DK
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--c-heading)]"
                onMouseEnter={() => preloadSection(link.href)}
                onFocus={() => preloadSection(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={profile.resumeUrl} download className="header-action__cta">
            Resume
          </a>
          <ThemeToggle />
          <a
            href="#contact"
            className="pill-btn hidden sm:inline-flex"
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
