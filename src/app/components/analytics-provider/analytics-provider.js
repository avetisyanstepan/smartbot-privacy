'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { track } from 'mixpanel-browser';

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => { mp(); }, []); // инициализация 1 раз

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    track('Page View', { url });
  }, [pathname, searchParams]);

  return null;
}
