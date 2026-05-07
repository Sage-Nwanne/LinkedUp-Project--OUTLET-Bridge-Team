import { problemStatement } from '../data.js';

export default function Problem() {
  return (
    <section id="problem" className="section section--problem">
      <div className="container">
        <div className="section__head">
          <span className="kicker">01b · The Problem</span>
          <h2>{problemStatement.headline}</h2>
        </div>

        <div className="problem-body">
          {problemStatement.body.map((para, i) => (
            <p className="problem-body__p" key={i}>{para}</p>
          ))}
        </div>

        <div className="problem-gaps">
          <div className="problem-gaps__label">Where the gaps live today</div>
          <div className="problem-gaps__grid">
            {problemStatement.gaps.map((g) => (
              <article className="gap-card" key={g.h}>
                <div className="gap-card__h">{g.h}</div>
                <p className="gap-card__p">{g.p}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
