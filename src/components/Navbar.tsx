import { navLinks } from '../content/profile';
import { preloadSection } from '../lib/sections';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold text-[var(--text)]">
          <span className="accent-bar h-5 w-0.5" />
          DK
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-muted)]"
                onMouseEnter={() => preloadSection(link.href)}
                onFocus={() => preloadSection(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="pill-btn hidden md:inline-flex"
          onMouseEnter={() => preloadSection('#contact')}
          onFocus={() => preloadSection('#contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
