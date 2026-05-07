import { eventChain, escalation } from '../data.js';

export default function Communication() {
  return (
    <section id="communication" className="section section--comm">
      <div className="container">
        <div className="section__head">
          <span className="kicker">04 · Communication & Escalation</span>
          <h2>Clear chains. No bottlenecks. No guessing who handles what.</h2>
          <p className="section__sub">
            Two flows govern internal movement: the everyday event chain, and
            the escalation path for issues by severity.
          </p>
        </div>

        <div className="comm-block">
          <div className="comm-block__label">Event-Level Communication</div>
          <ol className="chain">
            {eventChain.map((node, i) => (
              <li className="chain__node" key={node}>
                <span className="chain__index">{i + 1}</span>
                <span className="chain__name">{node}</span>
                {i < eventChain.length - 1 && (
                  <span className="chain__arrow" aria-hidden="true">→</span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="comm-block">
          <div className="comm-block__label">Escalation Path</div>
          <div className="escalation">
            {escalation.map((e) => (
              <div
                className="esc-row"
                style={{ '--esc-tone': e.tone }}
                key={e.level}
              >
                <div className="esc-row__sev">{e.level}</div>
                <div className="esc-row__flow">
                  <span className="esc-pill">{e.from}</span>
                  <span className="esc-arrow" aria-hidden="true">→</span>
                  <span className="esc-pill esc-pill--to">{e.to}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
