import { apiRequest, API_BASE_URL } from './apiClient.js';

export async function submitFeedback(feedback) {
  if (API_BASE_URL) {
    return apiRequest('/feedback', {
      method: 'POST',
      body: JSON.stringify(feedback),
    });
  }

  const email = import.meta.env.VITE_FORMSUBMIT_EMAIL?.trim();
  if (!email) {
    throw new Error('Set VITE_FORMSUBMIT_EMAIL to use FormSubmit.');
  }

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...feedback,
      _captcha: false,
      _template: 'table',
      _subject: 'Rooh Feedback Submission',
    }),
  });

  if (!response.ok) {
    throw new Error('Feedback submission failed.');
  }

  return response.json();
}