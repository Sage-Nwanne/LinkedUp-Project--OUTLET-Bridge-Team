import { teamRoles } from '../data.js';

export default function Team() {
  return (
    <section id="team" className="section section--team">
      <div className="container">
        <div className="section__head">
          <span className="kicker">03 · Team & Responsibilities</span>
          <h2>Who carries which part of the bridge.</h2>
          <p className="section__sub">
            Every role exists to remove operational chaos so relationships can
            actually form. No one role owns everything — that is by design.
          </p>
        </div>

        <div className="org-chart">
          <div className="org-tier org-tier--1">
            <div className="org-node org-node--exec">
              <div className="org-node__label">Executive</div>
              <div className="org-node__title">Ministry Leadership</div>
              <div className="org-node__blurb">Vision, approvals, pastoral oversight, escalation decisions.</div>
            </div>
          </div>
          <div className="org-line" aria-hidden="true" />
          <div className="org-tier org-tier--2">
            <div className="org-node org-node--lead">
              <div className="org-node__label">Operational Lead</div>
              <div className="org-node__title">Bridge Team Lead</div>
              <div className="org-node__blurb">Owns the pipeline. Coordinates the team. Handles escalations.</div>
            </div>
          </div>
          <div className="org-line" aria-hidden="true" />
          <div className="org-tier org-tier--3">
            {teamRoles
              .filter((r) => !['lead', 'cgl'].includes(r.id))
              .map((r) => (
                <div className="role-card" key={r.id}>
                  <div className="role-card__title">{r.title}</div>
                  <div className="role-card__blurb">{r.blurb}</div>
                  <ul className="role-card__duties">
                    {r.duties.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <div className="org-line org-line--down" aria-hidden="true" />
          <div className="org-tier org-tier--4">
            <div className="org-node org-node--cgl">
              <div className="org-node__label">Receiving Layer</div>
              <div className="org-node__title">Connect Group Leaders</div>
              <div className="org-node__blurb">
                Where matched members land. Healthy environments, consistency,
                emotional safety, and retention.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
