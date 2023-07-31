import type { Metric } from 'web-vitals';
import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

// Improve type safety by defining the navigator.connection type
interface NavigatorWithConnection extends Navigator {
  connection: {
    effectiveType: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Params = Record<string, any>; // Define a type for 'params'

function getConnectionSpeed() {
  return 'connection' in navigator && 'connection' && 'effectiveType' in (navigator as NavigatorWithConnection).connection
    ? (navigator as NavigatorWithConnection).connection.effectiveType
    : '';
}

function sendToAnalytics(metric: Metric, options: {
  params: Params;
  path: string;
  analyticsId: string;
  debug: boolean;
}) {
  const page = Object.entries(options.params).reduce(
    (acc, [key, value]) => acc.replace(value, `[${key}]`),
    options.path
  );

  const body = {
    dsn: options.analyticsId,
    id: metric.id,
    page,
    href: location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  if (options.debug) {
    console.log('[Web Vitals]', metric.name, JSON.stringify(body, null, 2));
  }

  // Serialize body to a URLSearchParams object
  const searchParams = new URLSearchParams(body);

  // The type 'Record<string, string>' is compatible with 'URLSearchParams'
  const blob = new Blob([searchParams.toString()], {
    type: 'application/x-www-form-urlencoded',
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else {
    fetch(vitalsUrl, {
      body: blob,
      method: 'POST',
      credentials: 'omit',
      keepalive: true,
    });
  }
}

export function webVitals(options: {
  params: Params; // Use the defined 'Params' type here
  path: string;
  analyticsId: string;
  debug: boolean;
}) {
  try {
    getFID((metric) => sendToAnalytics(metric, options));
    getTTFB((metric) => sendToAnalytics(metric, options));
    getLCP((metric) => sendToAnalytics(metric, options));
    getCLS((metric) => sendToAnalytics(metric, options));
    getFCP((metric) => sendToAnalytics(metric, options));
  } catch (err) {
    console.error('[Web Vitals]', err);
  }
}