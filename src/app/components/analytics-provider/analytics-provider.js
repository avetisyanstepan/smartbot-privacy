'use client';
import { useEffect } from 'react';
import { mp, track } from '../../lib/mixpanel';

export default function AnalyticsProvider() {
  useEffect(() => {
    mp(); // init
    const url = typeof window !== 'undefined'
      ? window.location.pathname + window.location.search
      : '/';
    track('Page View', { url }); // первый визит
  }, []);

  return null;
}
