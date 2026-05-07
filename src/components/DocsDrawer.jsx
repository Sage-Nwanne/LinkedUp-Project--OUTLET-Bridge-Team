import { useEffect, useMemo, useState } from 'react';
import handoff from '../the OUTLET/OUTLET_Bridge_Team_Project_Handoff.md?raw';
import infrastructure from '../the OUTLET/OUTLET_Bridge_Team_Infrastructure_Guide.md?raw';
import opp from '../the OUTLET/OPP_OUTLET_Pipeline_Protocol.md?raw';
import policies from '../the OUTLET/OPP_Policies_and_Behavior_Framework.md?raw';
import Markdown, { extractHeadings } from './Markdown.jsx';
import Icon from './Icons.jsx';

const DOCS = [
  { id: 'handoff', label: 'Project Handoff', meta: 'Foundational handoff file. Mission, philosophy, full member journey.', source: handoff },
  { id: 'infrastructure', label: 'Infrastructure Guide', meta: 'Pipeline, human + technical infrastructure, team responsibilities.', source: infrastructure },
  { id: 'opp', label: 'OUTLET Pipeline Protocol (OPP)', meta: 'The CI/CD-style operational intelligence system.', source: opp },
  { id: 'policies', label: 'Policies & Behavior Framework', meta: 'Operational standards, conduct, governance, failsafes.', source: policies },
];

export default function DocsDrawer({ open, onClose }) {
  const [docId, setDocId] = useState(DOCS[0].id);

  const doc = useMemo(() => DOCS.find((d) => d.id === docId) ?? DOCS[0], [docId]);
  const headings = useMemo(() => extractHeadings(doc.source, 2), [doc]);

  // Lock body scroll while drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // Esc to close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Reset content scroll when document changes.
  useEffect(() => {
    const el = document.querySelector('.docs-drawer__content');
    if (el) el.scrollTop = 0;
  }, [docId]);

  return (
    <>
      <div
        className={`docs-overlay${open ? ' is-open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`docs-drawer${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Source documentation"
        aria-hidden={!open}
      >
        <header className="docs-drawer__head">
          <div>
            <div className="docs-drawer__eyebrow">Source documentation</div>
            <h2 className="docs-drawer__title">The OUTLET / Bridge Team</h2>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label="Close documentation"
          >
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className="docs-drawer__tabs" role="tablist" aria-label="Documents">
          {DOCS.map((d) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={d.id === docId}
              className={`docs-tab${d.id === docId ? ' is-active' : ''}`}
              onClick={() => setDocId(d.id)}
            >
              <Icon name="book" size={14} />
              <span>{d.label}</span>
            </button>
          ))}
        </div>

        <div className="docs-drawer__body">
          <nav className="docs-toc" aria-label="Table of contents">
            <div className="docs-toc__label">On this page</div>
            <ul>
              {headings.map((h) => (
                <li key={h.id} className={`docs-toc__item docs-toc__item--l${h.level}`}>
                  <a
                    href={`#${h.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(h.id);
                      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    <Icon name="chevronRight" size={12} />
                    <span>{h.text}</span>
                  </a>
                </li>
              ))}
              {!headings.length && <li className="docs-toc__empty">No sections</li>}
            </ul>
          </nav>

          <div className="docs-drawer__content">
            <div className="docs-drawer__meta">{doc.meta}</div>
            <Markdown key={doc.id} source={doc.source} />
            <div className="docs-drawer__foot">
              <span>End of {doc.label}</span>
              <button
                type="button"
                className="link-btn"
                onClick={() => {
                  const el = document.querySelector('.docs-drawer__content');
                  if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
