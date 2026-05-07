import { useEffect, useState } from 'react';
import './App.css';
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Mission from './sections/Mission.jsx';
import Problem from './sections/Problem.jsx';
import Pipeline from './sections/Pipeline.jsx';
import Team from './sections/Team.jsx';
import Communication from './sections/Communication.jsx';
import Protocol from './sections/Protocol.jsx';
import Loop from './sections/Loop.jsx';
import Mvp from './sections/Mvp.jsx';
import DocsDrawer from './components/DocsDrawer.jsx';

export default function App() {
  const [docsOpen, setDocsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.section, .hero');
    sections.forEach((s) => s.classList.add('reveal'));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav onOpenDocs={() => setDocsOpen(true)} />
      <main>
        <Hero onOpenDocs={() => setDocsOpen(true)} />
        <Mission />
        <Problem />
        <Pipeline />
        <Team />
        <Communication />
        <Protocol />
        <Loop />
        <Mvp onOpenDocs={() => setDocsOpen(true)} />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>OUTLET Bridge Team · LinkedUP Church Young Adults</span>
          <a href="#hero" className="footer__top">Back to top ↑</a>
        </div>
      </footer>
      <DocsDrawer open={docsOpen} onClose={() => setDocsOpen(false)} />
    </>
  );
}
