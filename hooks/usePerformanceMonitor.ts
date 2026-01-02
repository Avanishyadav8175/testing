"use client";

import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
       if (entry.entryType === 'first-input') {
  const firstInputEntry = entry as PerformanceEventTiming;
  console.log(
    'FID:',
    firstInputEntry.processingStart - firstInputEntry.startTime
  );
}

        if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            console.log('CLS:', (entry as any).value);
          }
        }
      });
    });

    // Observe performance metrics
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.warn('Performance observer not fully supported');
    }

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 1000) { // Log slow resources
          console.warn('Slow resource:', entry.name, entry.duration + 'ms');
        }
      });
    });

    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
    } catch (e) {
      console.warn('Resource observer not supported');
    }

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);
};

export const reportWebVitals = (metric: any) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // In production, you might want to send to analytics
  // Example: analytics.track('Web Vital', metric);
};