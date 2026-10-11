const visitorIdKey = 'rooh-visitor-id';
const visitCountKey = 'rooh-visit-count';
let visitorMetadata;

export function createVisitorMetadata() {
  if (visitorMetadata) return visitorMetadata;

  try {
    let visitorId = localStorage.getItem(visitorIdKey);
    if (!visitorId) {
      visitorId = `rooh-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;
      localStorage.setItem(visitorIdKey, visitorId);
    }

    const visitCount = Number(localStorage.getItem(visitCountKey) || 0) + 1;
    localStorage.setItem(visitCountKey, String(visitCount));

    visitorMetadata = {
      visitor_id: visitorId,
      visit_count: visitCount,
      page_url: window.location.href,
      referrer: document.referrer || 'direct',
      user_agent: navigator.userAgent,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
      visited_at: new Date().toISOString(),
    };
    return visitorMetadata;
  } catch {
    visitorMetadata = {
      page_url: window.location.href,
      referrer: document.referrer || 'direct',
      visited_at: new Date().toISOString(),
    };
    return visitorMetadata;
  }
}