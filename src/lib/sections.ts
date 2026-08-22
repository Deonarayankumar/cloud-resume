import { lazy } from 'react';

const importSkills = () => import('../components/Skills');
const importExperience = () => import('../components/Experience');
const importProjects = () => import('../components/Projects');
const importUpskillHorizon = () => import('../components/UpskillHorizon');
const importEducation = () => import('../components/Education');
const importContact = () => import('../components/Contact');
const importFooter = () => import('../components/Footer');

export const Skills = lazy(importSkills);
export const Experience = lazy(importExperience);
export const Projects = lazy(importProjects);
export const UpskillHorizon = lazy(importUpskillHorizon);
export const Education = lazy(importEducation);
export const Contact = lazy(importContact);
export const Footer = lazy(importFooter);

const sectionPreloaders: Record<string, () => Promise<unknown>> = {
  '#skills': importSkills,
  '#experience': importExperience,
  '#projects': importProjects,
  '#upskill': importUpskillHorizon,
  '#contact': importContact,
};

export function preloadSection(href: string) {
  const loader = sectionPreloaders[href];
  if (loader && typeof window !== 'undefined') {
    void loader();
  }
}

export function preloadDeferredSections() {
  if (typeof window === 'undefined') {
    return;
  }

  const preloadAll = () => {
    void importSkills();
    void importExperience();
    void importProjects();
    void importUpskillHorizon();
    void importEducation();
    void importContact();
    void importFooter();
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(preloadAll);
  } else {
    setTimeout(preloadAll, 200);
  }
}
