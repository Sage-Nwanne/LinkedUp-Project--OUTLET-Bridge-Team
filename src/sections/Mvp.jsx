import { mvp } from '../data.js';
import Icon from '../components/Icons.jsx';

export default function Mvp({ onOpenDocs }) {
  return (
    <section id="mvp" className="section section--mvp">
      <div className="container">
        <div className="section__head">
          <span className="kicker">07 · First Iteration</span>
          <h2>What we are <span className="grad">starting with</span>.</h2>
          <p className="section__sub">{mvp.intro}</p>
        </div>

        <div className="mvp-stack">
          <div className="mvp-col mvp-col--ship">
            <div className="mvp-col__label">
              <Icon name="check" size={14} />
              <span>Included in the first iteration</span>
            </div>
            <ul className="mvp-list">
              {mvp.shipping.map((item) => (
                <li className="mvp-item" key={item.h}>
                  <div className="mvp-item__h">{item.h}</div>
                  <p className="mvp-item__p">{item.p}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mvp-success">
            <div className="mvp-success__label">
              <Icon name="target" size={14} />
              <span>What success looks like</span>
            </div>
            <ul className="mvp-success__list">
              {mvp.successCriteria.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className="mvp-success__cta">
              <button type="button" className="btn btn--ghost btn--sm" onClick={onOpenDocs}>
                <Icon name="book" size={14} />
                <span>Read the full handoff doc</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
