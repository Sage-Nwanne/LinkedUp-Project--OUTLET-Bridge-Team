import { principles } from '../data.js';
import Icon from '../components/Icons.jsx';

export default function Hero({ onOpenDocs }) {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--a" />
        <div className="hero__orb hero__orb--b" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="eyebrow">
          <span className="dot" /> OUTLET Bridge Team · LinkedUP Church
        </div>

        <h1 className="hero__title">
          The relational <span className="grad">infrastructure</span>
          <br />
          behind authentic community.
        </h1>

        <p className="hero__lead">
          A living protocol for moving young adults from <em>attendance</em> to
          <em> participation</em>, to <em>connection</em>, to <em>belonging</em>,
          to <em>leadership</em>. Every event becomes a data point. Every cycle,
          the system becomes more human.
        </p>

        <div className="hero__cta">
          <a href="#pipeline" className="btn btn--primary">
            Explore the Pipeline
            <Icon name="arrowRight" size={14} strokeWidth={2.2} />
          </a>
          <button type="button" className="btn btn--ghost" onClick={onOpenDocs}>
            <Icon name="book" size={14} />
            <span>Read the source docs</span>
          </button>
        </div>

        <div className="hero__principles" role="list">
          {principles.map((p) => (
            <div className="principle" role="listitem" key={p.k}>
              <span className="principle__k">{p.k}</span>
              <span className="principle__v">{p.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
