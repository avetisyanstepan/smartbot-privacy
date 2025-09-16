'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { mp, track } from 'mixpanel-browser';

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => { mp(); }, []); // init 1 раз

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    track('Page View', { url });
  }, [pathname, searchParams]);

  return null;
}
