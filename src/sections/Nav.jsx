import { useEffect, useState } from 'react';
import Icon from '../components/Icons.jsx';

const LINKS = [
  { id: 'mission', label: 'Mission' },
  { id: 'problem', label: 'Problem' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'team', label: 'Team' },
  { id: 'communication', label: 'Comms' },
  { id: 'protocol', label: 'Protocol' },
  { id: 'loop', label: 'CI / CD' },
  { id: 'mvp', label: 'MVP' },
];

export default function Nav({ onOpenDocs }) {
  const [active, setActive] = useState('mission');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#hero" className="nav__brand" aria-label="OUTLET home">
          <span className="nav__brand-mark" aria-hidden="true">◆</span>
          <span className="nav__brand-text">
            OUTLET <span className="nav__brand-faint">/ Bridge Team</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Section navigation">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link${active === l.id ? ' is-active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="btn btn--ghost btn--sm nav__cta"
            onClick={onOpenDocs}
          >
            <Icon name="book" size={14} />
            <span>Source docs</span>
          </button>
          <button
            type="button"
            className="icon-btn nav__menu"
            onClick={onOpenDocs}
            aria-label="Open documentation"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
