import { useState } from 'react';
import { ticketOptions } from '../data/events.js';
import Reveal from './Reveal.jsx';

export default function BookingSection() {
  const [selectedTicket, setSelectedTicket] = useState(ticketOptions[0].id);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 1800);
    event.currentTarget.reset();
  };

  return (
    <Reveal as="section" id="tickets" className="booking container">
      <div className="section-heading center"><span className="eyebrow">Book now</span><h2>Reserve your spot for the next big night.</h2></div>
      <div className="booking-wrap">
        <div className="ticket-list" aria-label="Choose an event">
          {ticketOptions.map((ticket) => (
            <button
              className={`ticket-item${selectedTicket === ticket.id ? ' active' : ''}`}
              key={ticket.id}
              type="button"
              aria-pressed={selectedTicket === ticket.id}
              onClick={() => setSelectedTicket(ticket.id)}
            >
              <span><span className="ticket-type">{ticket.type}</span><span className="ticket-name">{ticket.title}</span></span>
              <span className="ticket-info"><span>{ticket.date}</span><strong>{ticket.price}</strong></span>
            </button>
          ))}
        </div>
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>Full name<input type="text" name="name" placeholder="Your name" required /></label>
          <label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label>
          <label>Number of tickets<select name="quantity" defaultValue="2"><option value="2">2 tickets</option><option value="3">3 tickets</option><option value="4">4 tickets</option><option value="5">5+ tickets</option></select></label>
          <button type="submit" className="primary-btn wide" disabled={submitted}>{submitted ? 'Booked!' : 'Confirm booking'}</button>
        </form>
      </div>
    </Reveal>
  );
}