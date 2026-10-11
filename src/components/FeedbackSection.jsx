import { useEffect, useState } from 'react';
import { submitFeedback } from '../services/feedbackService.js';
import { createVisitorMetadata } from '../utils/visitorTracking.js';
import Reveal from './Reveal.jsx';

export default function FeedbackSection() {
  const [visitorTracking, setVisitorTracking] = useState('');
  const [status, setStatus] = useState({ message: '', type: '' });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setVisitorTracking(JSON.stringify(createVisitorMetadata()));
  }, []);

  useEffect(() => {
    if (!status.message) return undefined;
    const timer = window.setTimeout(() => setStatus({ message: '', type: '' }), 3000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSending(true);
    setStatus({ message: '', type: '' });

    try {
      await submitFeedback({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        visitor_tracking: visitorTracking,
      });
      form.reset();
      setStatus({ message: 'Feedback submitted successfully. Thank you!', type: 'success' });
    } catch {
      setStatus({ message: 'Something went wrong while sending your feedback. Please try again.', type: 'error' });
    } finally {
      setSending(false);
    }
  };

  return (
    <Reveal as="section" id="feedback" className="feedback container">
      <div className="section-heading center"><span className="eyebrow">Your voice matters</span><h2>Share your feedback and help us shape better nights.</h2></div>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input type="hidden" name="visitor_tracking" value={visitorTracking} readOnly />
        <div className="form-grid">
          <label>Full name<input type="text" name="name" placeholder="Your name" required /></label>
          <label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label>
        </div>
        <label>Your feedback<textarea name="message" rows="5" placeholder="Tell us what kind of events you love, what you would improve, or how we can make your experience better..." required /></label>
        <button type="submit" className="primary-btn wide" disabled={sending}>{sending ? 'Sending...' : 'Send feedback'}</button>
        <p className={`form-status${status.type ? ` ${status.type}` : ''}`} aria-live="polite">{status.message}</p>
      </form>
    </Reveal>
  );
}