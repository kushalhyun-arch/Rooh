const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealEls.forEach((el) => revealObserver.observe(el));

const ticketItems = document.querySelectorAll('.ticket-item');

ticketItems.forEach((item) => {
  item.addEventListener('click', () => {
    ticketItems.forEach((entry) => entry.classList.remove('active'));
    item.classList.add('active');
  });
});

const bookingForm = document.querySelector('.booking-form');

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = bookingForm.querySelector('button');
  const originalText = button.textContent;

  button.textContent = 'Booked!';
  button.disabled = true;
  button.style.opacity = '0.8';

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    button.style.opacity = '1';
    bookingForm.reset();
  }, 1800);
});

const getVisitorId = () => {
  const cacheKey = 'rooh-visitor-id';
  let visitorId = localStorage.getItem(cacheKey);

  if (!visitorId) {
    visitorId = `rooh-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;
    localStorage.setItem(cacheKey, visitorId);
  }

  return visitorId;
};

const storeVisitorData = () => {
  const visitKey = 'rooh-visit-count';
  const visitCount = Number(localStorage.getItem(visitKey) || 0) + 1;
  localStorage.setItem(visitKey, String(visitCount));

  const payload = {
    visitor_id: getVisitorId(),
    visit_count: visitCount,
    page_url: window.location.href,
    referrer: document.referrer || 'direct',
    user_agent: navigator.userAgent,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
    visited_at: new Date().toISOString(),
  };

  const hiddenFields = {
    'visitor-tracking': JSON.stringify(payload),
  };

  Object.entries(hiddenFields).forEach(([id, value]) => {
    const field = document.getElementById(id);
    if (field) {
      field.value = value;
    }
  });
};

const feedbackForm = document.getElementById('feedback-form');

if (feedbackForm) {
  storeVisitorData();

  feedbackForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = feedbackForm.querySelector('button[type="submit"]');
    const statusBox = feedbackForm.querySelector('.form-status');
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    submitButton.style.opacity = '0.8';

    const formData = new FormData(feedbackForm);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formsubmit.co/ajax/kushal.sharma2709@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      statusBox.textContent = 'Feedback submitted successfully. Thank you!';
      statusBox.classList.remove('error');
      statusBox.classList.add('success');
      feedbackForm.reset();
      storeVisitorData();
    } catch (error) {
      statusBox.textContent = 'Something went wrong while sending your feedback. Please try again.';
      statusBox.classList.remove('success');
      statusBox.classList.add('error');
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      submitButton.style.opacity = '1';
    }
  });
}
