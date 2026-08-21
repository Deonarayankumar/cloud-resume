import { navLinks } from '../content/profile';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="h-5 w-0.5 bg-white" />
          DK
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-neutral-300 transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="pill-btn hidden md:inline-flex">
          Contact
        </a>
      </nav>
    </header>
  );
}
