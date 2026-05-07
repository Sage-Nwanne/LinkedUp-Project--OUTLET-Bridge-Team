import { cicd, metrics, techStack } from '../data.js';
import Icon from '../components/Icons.jsx';

export default function Loop() {
  return (
    <section id="loop" className="section section--loop">
      <div className="container">
        <div className="section__head">
          <span className="kicker">06 · Continuous Integration</span>
          <h2>The system learns. Every event makes it more human.</h2>
          <p className="section__sub">
            Software ships code: <code>Code → Test → Deploy → Monitor → Improve</code>.
            <br />
            The OPP ships connection: <code>Event → Observe → Analyze → Refine → Re-deploy</code>.
          </p>
        </div>

        <div className="loop-ring" role="list">
          {cicd.map((c, i) => (
            <div className="loop-step" role="listitem" key={c.step}>
              <div className="loop-step__num">0{i + 1}</div>
              <div className="loop-step__icon" aria-hidden="true">
                <Icon name={c.icon} size={26} strokeWidth={1.6} />
              </div>
              <div className="loop-step__title">{c.step}</div>
              <p className="loop-step__detail">{c.detail}</p>
            </div>
          ))}
        </div>

        <div className="loop-grid">
          <div className="loop-card">
            <div className="loop-card__label">Key Metrics We Track</div>
            <ul className="metric-list">
              {metrics.map((m) => (
                <li key={m}>
                  <span className="metric-bullet" aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="loop-card">
            <div className="loop-card__label">Suggested Tech Stack</div>
            <div className="stack">
              {Object.entries(techStack).map(([k, items]) => (
                <div className="stack__row" key={k}>
                  <div className="stack__k">{k}</div>
                  <div className="stack__v">
                    {items.map((it) => (
                      <span className="chip" key={it}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
