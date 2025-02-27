'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Optional: Smooth scrolling
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, searchParams]);

  return null; // This component doesn’t render anything
}