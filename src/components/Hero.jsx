import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <Reveal as="section" className="hero container">
      <div className="hero-copy">
        <span className="eyebrow">Nights made for India.</span>
        <h1>Discover the city’s best events, gigs, and late-night energy.</h1>
        <p>
          Rooh brings together curated concerts, pop-ups, celebrations, and social experiences
          across India so you can find your vibe and book your next unforgettable night.
        </p>

        <div className="cta-row">
          <a href="#tickets" className="primary-btn">Explore events</a>
          <a href="#planner" className="secondary-btn">Plan my event</a>
        </div>

        <div className="hero-stats">
          <div><strong>12k+</strong><span>night lovers</span></div>
          <div><strong>220+</strong><span>city events</span></div>
          <div><strong>4.9/5</strong><span>community love</span></div>
        </div>
      </div>

      <div className="hero-visual" aria-label="Featured event preview">
        <div className="floating-card card-main">
          <div className="card-top" aria-hidden="true">
            <span className="dot red" /><span className="dot amber" /><span className="dot green" />
          </div>
          <div className="event-art" aria-hidden="true">
            <div className="event-figure">
              <span className="speaker" /><span className="speaker" /><span className="speaker" />
            </div>
            <div className="glow-orb" />
          </div>
          <div className="event-meta">
            <div><p className="event-label">Next big night</p><h3>DJ Dandiya</h3></div>
            <span className="tag">Cuttack</span>
          </div>
        </div>
        <div className="floating-card card-mini mini-one"><p>Saturday</p><strong>18:30</strong></div>
        <div className="floating-card card-mini mini-two"><p>Tickets</p><strong>From ₹899</strong></div>
      </div>
    </Reveal>
  );
}