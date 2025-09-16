'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { track } from '@/app/lib/mixpanel';

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // init один раз
  useEffect(() => { mp(); }, []);

  // отправляем Page View при любом роут-переходе
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    track('Page View', { url });
  }, [pathname, searchParams]);

  return null;
}
