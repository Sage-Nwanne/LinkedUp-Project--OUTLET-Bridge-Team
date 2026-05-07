import { useState } from 'react';
import { protocolTabs } from '../data.js';

export default function Protocol() {
  const [tabId, setTabId] = useState(protocolTabs[0].id);
  const tab = protocolTabs.find((t) => t.id === tabId) ?? protocolTabs[0];

  return (
    <section id="protocol" className="section section--protocol">
      <div className="container">
        <div className="section__head">
          <span className="kicker">05 · Protocol & Behavior</span>
          <h2>The OPP — how the system actually behaves.</h2>
          <p className="section__sub">
            The OUTLET Pipeline Protocol defines the standards, conduct, and
            safeguards that keep the system human-centered. Switch tabs to read
            each layer.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Protocol layers">
          {protocolTabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={t.id === tabId}
              aria-controls={`tab-panel-${t.id}`}
              id={`tab-${t.id}`}
              className={`tab${t.id === tabId ? ' is-active' : ''}`}
              onClick={() => setTabId(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          id={`tab-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          className="tab-panel"
          key={tab.id}
        >
          <p className="tab-panel__intro">{tab.intro}</p>
          {tab.kind === 'dialogue' ? (
            <div className="dialogue-list">
              {tab.sections.map((s) => (
                <article className="dialogue-card" key={s.h}>
                  <header className="dialogue-card__head">
                    <h4 className="dialogue-card__h">{s.h}</h4>
                    <p className="dialogue-card__when">{s.when}</p>
                  </header>
                  <ul className="dialogue-card__lines">
                    {s.lines.map((l, i) => (
                      <li className="dialogue-line" key={i}>
                        <span className="dialogue-line__who">{l.who}</span>
                        <p className="dialogue-line__text">{l.text}</p>
                      </li>
                    ))}
                  </ul>
                  {s.avoid && (
                    <div className="dialogue-card__avoid">
                      <span className="dialogue-card__avoid-label">Avoid</span>
                      <span>{s.avoid}</span>
                    </div>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="policy-grid">
              {tab.sections.map((s) => (
                <article className="policy" key={s.h}>
                  <h4 className="policy__h">{s.h}</h4>
                  <p className="policy__p">{s.p}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
