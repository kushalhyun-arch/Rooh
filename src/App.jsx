import DiscoverySections from './components/DiscoverySections.jsx';
import BookingSection from './components/BookingSection.jsx';
import FeedbackSection from './components/FeedbackSection.jsx';
import Hero from './components/Hero.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import SiteHeader from './components/SiteHeader.jsx';

export default function App() {
  return (
    <>
      <div className="bg-blur blur-one" aria-hidden="true" />
      <div className="bg-blur blur-two" aria-hidden="true" />
      <SiteHeader />
      <main id="home">
        <Hero />
        <DiscoverySections />
        <BookingSection />
        <FeedbackSection />
      </main>
      <SiteFooter />
    </>
  );
}