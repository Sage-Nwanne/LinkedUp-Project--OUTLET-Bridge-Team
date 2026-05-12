import Icon from '../components/Icons.jsx';

export default function Onboarding() {
  return (
    <section id="onboarding" className="section section--onboarding">
      <div className="container">
        <div className="section__head">
          <span className="kicker">Bridge Team Onboarding</span>
          <h2>Watch the <span className="grad">onboarding meeting</span>.</h2>
          <p className="section__sub">Full recorded session with the Bridge Team leadership and project context.</p>
        </div>

        <div className="onboarding-video">
          <iframe
            className="onboarding-video__player"
            src="https://www.youtube.com/embed/8Ves53xb_WE"
            title="OUTLET Bridge Team Onboarding & Leadership Meeting"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="onboarding-cta">
          <a href="/OUTLET_Bridge_Team_Onboarding_Leadership_Deck.pptx" download className="btn btn--primary">
            <Icon name="download" size={14} />
            <span>Download Leadership Presentation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
