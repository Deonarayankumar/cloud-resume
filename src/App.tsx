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
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback minHeight="28rem" />}>
          <Projects />
        </Suspense>
        <About />
        <Suspense fallback={<SectionFallback minHeight="36rem" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="28rem" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="22rem" />}>
          <UpskillHorizon />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="20rem" />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionFallback minHeight="18rem" />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback minHeight="5rem" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
