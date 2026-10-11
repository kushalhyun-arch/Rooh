import { eventCards } from '../data/events.js';
import ProgressButton from './ProgressButton.jsx';
import Reveal from './Reveal.jsx';

function DandiyaHighlight() {
  return (
    <Reveal as="section" className="dandiya-highlight container">
      <div className="festival-banner">Cuttack spotlight • Navratri Nights</div>
      <div className="dandiya-feature">
        <div className="dandiya-copy">
          <span className="eyebrow">Cuttack nights</span>
          <h2>Celebrate Navratri 2026 with DJ Dandiya nights around the city’s most loved gathering spots.</h2>
          <p>
            From the energy around Baliyatra to the late-night buzz near the city core, Cuttack’s
            event scene is all about music, movement, and memorable nights. Rooh brings together
            the most happening Navratri experiences with easy access, premium vibes, and a crowd
            that loves to go all in.
          </p>
          <div className="feature-pills"><span>Navratri 2026</span><span>DJ Dandiya</span><span>Baliyatra buzz</span></div>
        </div>
        <div className="dandiya-visual">
          <div className="visual-card">
            <div className="dandiya-art" aria-hidden="true">
              <span className="art-glow glow-one" /><span className="art-glow glow-two" />
              <span className="art-ring ring-one" /><span className="art-ring ring-two" />
            </div>
            <p className="visual-label">Featured event</p>
            <h3>Raas at Cuttack</h3>
            <div className="visual-meta"><span>Baliyatra</span><span>From ₹1,299</span></div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Brands() {
  return (
    <Reveal as="section" id="discover" className="brands container">
      <p>Trusted by creators, venues, and local communities</p>
      <div className="brand-row"><span>Pulse District</span><span>Moonlight House</span><span>Solstice Audio</span><span>Downtown Beats</span></div>
    </Reveal>
  );
}

function Features() {
  const features = [
    ['🎉', 'Curated nightlife', 'From indie gigs to house parties and rooftop sets, discover experiences matched to your vibe.'],
    ['🎟️', 'Quick ticket access', 'Book entry in seconds and stay ready for the city’s most happening nights.'],
    ['✨', 'Event magic handled', 'Whether it’s a birthday, launch, or intimate gathering, we keep the flow seamless and stylish.'],
  ];

  return (
    <Reveal as="section" className="features container">
      <div className="section-heading"><span className="eyebrow">Why Rooh</span><h2>Everything you need for a memorable night.</h2></div>
      <div className="feature-grid">
        {features.map(([icon, title, description]) => (
          <article className="feature-card" key={title}>
            <div className="icon-wrap" aria-hidden="true">{icon}</div>
            <h3>{title}</h3><p>{description}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function Events() {
  return (
    <Reveal as="section" id="experiences" className="experiences container">
      <div className="section-heading split">
        <div><span className="eyebrow">Featured nights</span><h2>Trending across the city.</h2></div>
        <a href="#tickets" className="text-link">View all events</a>
      </div>
      <div className="event-grid">
        {eventCards.map((event, index) => (
          <article className={`event-card${index === 0 ? ' large-card' : ''}`} key={event.title}>
            <div className={`event-image ${event.image}`} role="img" aria-label={`${event.title} event`} />
            <div className="event-body">
              <div className="meta-row"><span className={`tag ${event.categoryStyle}`}>{event.category}</span><span className="date">{event.date}</span></div>
              <h3>{event.title}</h3><p>{event.description}</p>
              <div className="event-footer"><span>{event.price}</span><ProgressButton>Book</ProgressButton></div>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function Planner() {
  return (
    <Reveal as="section" id="planner" className="planner container">
      <div className="planner-copy">
        <span className="eyebrow">Event planning</span>
        <h2>Build the night your guests will still talk about.</h2>
        <p>Whether you’re hosting a private birthday, a launch party, or a cultural gathering, Rooh handles the mood, the flow, and the details that make events feel effortless.</p>
        <ul><li>Venue sourcing &amp; styling</li><li>Guest list and ticketing</li><li>Music, food, and flow planning</li></ul>
      </div>
      <div className="planner-panel">
        <div className="mini-panel">
          <p>Event snapshot</p><h3>Sunset Social</h3>
          <div className="panel-metrics"><div><span>Guests</span><strong>180</strong></div><div><span>Budget</span><strong>₹80k</strong></div></div>
        </div>
        <div className="progress-card"><div className="progress-row"><span>Venue setup</span><strong>92%</strong></div><div className="progress-bar"><span /></div></div>
      </div>
    </Reveal>
  );
}

function About() {
  return (
    <Reveal as="section" id="about" className="about container">
      <div className="section-heading split"><div><span className="eyebrow">About us</span><h2>Team Rooh is building better evenings for everyone.</h2></div></div>
      <div className="about-grid">
        <div className="about-copy">
          <p>Rooh began with a simple idea: city nights should feel personal, exciting, and easy to access. We bring together community, music, and memorable experiences so people can discover events that actually match their energy.</p>
          <p>From local concerts to intimate parties and private gatherings, our team works closely with creators, venues, and communities to make every night feel effortless and worth sharing.</p>
          <div className="team-stats"><div><strong>8</strong><span>core members</span></div><div><strong>30+</strong><span>venue partners</span></div><div><strong>1K+</strong><span>weekly community checks</span></div></div>
        </div>
        <div className="team-card">
          <div className="team-header"><div className="team-avatar">R</div><div><p className="team-label">Founding team</p><h3>Rooh Collective</h3></div></div>
          <ul className="team-list"><li><span>Product</span><strong>Events &amp; discovery</strong></li><li><span>Operations</span><strong>Venue experiences</strong></li><li><span>Marketing</span><strong>Community growth</strong></li></ul>
          <div className="connect-links"><a href="mailto:hello@rooh.com">hello@rooh.com</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://x.com" target="_blank" rel="noreferrer">X / Twitter</a></div>
        </div>
      </div>
    </Reveal>
  );
}

export default function DiscoverySections() {
  return <><DandiyaHighlight /><Brands /><Features /><Events /><Planner /><About /></>;
}