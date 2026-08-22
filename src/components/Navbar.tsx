import { useState } from 'react';
import { navLinks, profile } from '../content/profile';
import { preloadSection } from '../lib/sections';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] backdrop-blur-md"
      style={{ background: 'var(--nav-blur)' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="flex items-center gap-3" onClick={handleNavClick}>
          <span className="accent-bar h-5 w-0.5" />
          <span className="text-lg font-semibold text-[var(--text)]">
            <span className="hidden sm:inline">{profile.name}</span>
            <span className="sm:hidden">DK</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--text-muted)] transition hover:text-[var(--text)]"
                onMouseEnter={() => preloadSection(link.href)}
                onFocus={() => preloadSection(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href={profile.resumeUrl} className="pill-btn text-sm">
            Resume
          </a>
          <a
            href="#contact"
            className="pill-btn-primary text-sm"
            onMouseEnter={() => preloadSection('#contact')}
            onFocus={() => preloadSection('#contact')}
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]"
            aria-label="Open navigation menu"
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
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--border)] px-6 py-4 lg:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-sm text-[var(--text-muted)]"
                  onClick={handleNavClick}
                  onFocus={() => preloadSection(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a href={profile.resumeUrl} className="pill-btn text-center text-sm" onClick={handleNavClick}>
              Resume
            </a>
            <a href="#contact" className="pill-btn-primary text-center text-sm" onClick={handleNavClick}>
              Get in touch
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
