import { useState } from 'react';
import { navLinks } from '../content/profile';
import { preloadSection } from '../lib/sections';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <a href="#home" className="flex min-w-0 items-center gap-2 text-lg font-semibold text-[var(--text)]">
          <span className="accent-bar h-5 w-0.5 shrink-0" />
          <span className="truncate">DK</span>
        </a>

        <ul className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
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

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="pill-btn text-sm"
            onMouseEnter={() => preloadSection('#contact')}
            onFocus={() => preloadSection('#contact')}
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[var(--border)] px-4 py-4 sm:px-6 lg:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-[var(--text-muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
                  onClick={closeMenu}
                  onFocus={() => preloadSection(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="pill-btn-primary mt-4 block w-full text-center text-sm"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      ) : null}
    </header>
  );
}
