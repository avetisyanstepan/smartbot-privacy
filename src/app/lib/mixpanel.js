'use client';
import mixpanel from 'mixpanel-browser';

const TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || 'fe757ea874d265068a969042a107b6c0';

let inited = false;
export function mp() {
  if (!inited && typeof window !== 'undefined') {
    mixpanel.init(TOKEN, {
      debug: true,
      track_pageview: false, // pageview шлём сами
      persistence: 'localStorage',
      store_google: true,    // автосохранение UTM: source/medium/campaign/term/content
      save_referrer: true,   // initial_referrer и initial_referring_domain
            api_host: 'https://api-eu.mixpanel.com',  // ВАЖНО для EU проектов!

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
