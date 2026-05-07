import { useState } from 'react';
import { pipeline } from '../data.js';

const DETAIL_BLOCKS = [
  { key: 'goals', label: 'Goals' },
  { key: 'inputs', label: 'Inputs' },
  { key: 'owners', label: 'Responsible' },
  { key: 'friction', label: 'Friction Points' },
  { key: 'failStates', label: 'Fail States' },
  { key: 'metrics', label: 'KPIs' },
];

export default function Pipeline() {
  const [activeId, setActiveId] = useState(pipeline[0].id);
  const active = pipeline.find((s) => s.id === activeId) ?? pipeline[0];

  return (
    <section id="pipeline" className="section section--pipeline">
      <div className="container">
        <div className="section__head">
          <span className="kicker">02 · The Pipeline</span>
          <h2>Seven stages from <span className="grad">curiosity to leadership</span>.</h2>
          <p className="section__sub">
            Tap any stage to expand its inputs, owners, friction points, fail
            states, and KPIs. The arrows are the journey. The detail panel is
            the operating manual.
          </p>
        </div>

        <ol className="pipeline">
          {pipeline.map((s, i) => {
            const isActive = s.id === activeId;
            return (
              <li
                key={s.id}
                className={`pipe-card${isActive ? ' is-active' : ''}`}
                style={{ '--stage-accent': s.accent }}
              >
                <button
                  type="button"
                  className="pipe-card__btn"
                  aria-expanded={isActive}
                  aria-controls="pipeline-detail"
                  onClick={() => setActiveId(s.id)}
                >
                  <div className="pipe-card__num">{s.n}</div>
                  <div className="pipe-card__title">{s.title}</div>
                  <div className="pipe-card__sub">{s.subtitle}</div>
                  <div className="pipe-card__bar" />
                </button>
                {i < pipeline.length - 1 && (
                  <span className="pipe-card__arrow" aria-hidden="true">→</span>
                )}
              </li>
            );
          })}
        </ol>

        <div
          id="pipeline-detail"
          className="pipe-detail"
          style={{ '--stage-accent': active.accent }}
          key={active.id}
        >
          <header className="pipe-detail__head">
            <div>
              <div className="pipe-detail__num">Stage {active.n}</div>
              <h3 className="pipe-detail__title">{active.title}</h3>
              <div className="pipe-detail__sub">{active.subtitle}</div>
            </div>
            <p className="pipe-detail__summary">{active.summary}</p>
          </header>

          {active.about && (
            <div className="pipe-detail__about">
              <div className="pipe-detail__about-label">About this stage</div>
              <p>{active.about}</p>
            </div>
          )}

          <div className="pipe-detail__grid">
            {DETAIL_BLOCKS.map((b) => (
              <div className={`detail-block detail-block--${b.key}`} key={b.key}>
                <div className="detail-block__label">{b.label}</div>
                <ul>
                  {active[b.key].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <footer className="pipe-detail__foot">
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => {
                const idx = pipeline.findIndex((s) => s.id === active.id);
                setActiveId(pipeline[(idx - 1 + pipeline.length) % pipeline.length].id);
              }}
            >
              ← Previous stage
            </button>
            <div className="pipe-progress" aria-hidden="true">
              {pipeline.map((s) => (
                <span
                  key={s.id}
                  className={`pipe-progress__dot${s.id === active.id ? ' is-active' : ''}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="btn btn--primary btn--sm"
              onClick={() => {
                const idx = pipeline.findIndex((s) => s.id === active.id);
                setActiveId(pipeline[(idx + 1) % pipeline.length].id);
              }}
            >
              Next stage →
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
}
