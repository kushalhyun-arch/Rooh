import ProgressButton from './ProgressButton.jsx';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Rooh home">
          <span className="brand-mark">R</span>
          <span className="brand-name">Rooh</span>
        </a>

        <div className="nav-links">
          <a href="#discover">Discover</a>
          <a href="#experiences">Experiences</a>
          <a href="#planner">Planner</a>
          <a href="#tickets">Tickets</a>
        </div>

        <div className="nav-actions">
          <ProgressButton className="ghost-btn">Log in</ProgressButton>
          <ProgressButton className="primary-btn">Book now</ProgressButton>
        </div>
      </nav>
    </header>
  );
}