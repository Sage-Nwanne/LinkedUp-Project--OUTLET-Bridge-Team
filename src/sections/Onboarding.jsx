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
          <video
            controls
            className="onboarding-video__player"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Crect fill='%23f0ede8' width='1280' height='720'/%3E%3C/svg%3E"
          >
            <source src="/Recorded-session-BridgeTeam-OnboardingMeeting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
