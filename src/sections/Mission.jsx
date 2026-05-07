export default function Mission() {
  return (
    <section id="mission" className="section section--mission">
      <div className="container">
        <div className="section__head">
          <span className="kicker">01 · Mission</span>
          <h2>Why the Bridge Team exists.</h2>
          <p className="section__sub">
            The OUTLET attracts young adults beautifully. What it has lacked is
            the <strong>infrastructure</strong> that turns recurring attendees
            into deeply connected community. The Bridge Team is that bridge.
          </p>
        </div>

        <div className="mission__grid">
          <article className="mission-card mission-card--big">
            <div className="mission-card__label">The Mission</div>
            <p className="mission-card__quote">
              Intentionally bridge young adults from <em>event attendance</em>
              {' '}into <em>authentic long-term community</em> — through Connect
              Groups, relational onboarding, strategic follow-up, and operational
              infrastructure.
            </p>
          </article>

          <article className="mission-card">
            <div className="mission-card__label">Not</div>
            <ul className="check-list check-list--no">
              <li>A hospitality team</li>
              <li>An event-attendance counter</li>
              <li>Pressure sales for church</li>
              <li>Performance metrics over people</li>
            </ul>
          </article>

          <article className="mission-card">
            <div className="mission-card__label">Yes</div>
            <ul className="check-list check-list--yes">
              <li>A community systems team</li>
              <li>Relational connectors</li>
              <li>Onboarding facilitators</li>
              <li>Retention infrastructure</li>
            </ul>
          </article>

          <article className="mission-card mission-card--wide">
            <div className="mission-card__label">The Core Objective</div>
            <p className="mission-card__quote">
              Increase sustainable young adult participation in Connect Groups
              through intentional systems, operational structure, and
              relationship-based follow-up.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
