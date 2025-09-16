'use client';
import mixpanel from 'mixpanel-browser';

const TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || 'fe757ea874d265068a969042a107b6c0';

let inited = false;
export function mp() {
  if (!inited && typeof window !== 'undefined') {
    mixpanel.init(TOKEN, {
      debug: true,
      track_pageview: false,       // pageview шлём сами
      persistence: 'localStorage',
      store_google: true,
      save_referrer: true,
      api_host: 'https://api-eu.mixpanel.com', // ВАЖНО: проект в EU
    });
    inited = true;
  }
  return mixpanel;
}

export function track(event, props = {}) {
  const m = mp();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : undefined;
  m.track(event, { pathname, ...props });
}

export default mixpanel;
