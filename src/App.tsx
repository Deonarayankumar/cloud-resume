import { Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { SectionFallback } from './components/SectionFallback';
import {
  Contact,
  Education,
  Experience,
  Footer,
  preloadDeferredSections,
  Projects,
  Skills,
  UpskillHorizon,
} from './lib/sections';

export default function App() {
  useEffect(() => {
    preloadDeferredSections();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Suspense fallback={<SectionFallback minHeight="28rem" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="22rem" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="16rem" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="14rem" />}>
          <UpskillHorizon />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="12rem" />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="12rem" />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback minHeight="5rem" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
