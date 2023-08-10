import type { Metric } from 'web-vitals';
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

interface NavigatorWithConnection extends Navigator {
	connection: {
		effectiveType: string;
	};
}

type Params = Record<string, string>;

function getConnectionSpeed() {
	return 'connection' in navigator &&
		'connection' &&
		'effectiveType' in (navigator as NavigatorWithConnection).connection
		? (navigator as NavigatorWithConnection).connection.effectiveType
		: '';
}

function sendToAnalytics(
	metric: Metric,
	options: {
		params: Params;
		path: string;
		analyticsId: string;
		debug: boolean;
	}
) {
	const page = (Object.entries(options.params) as [string, string][]).reduce(
		(acc: string, [key, value]: [string, string]) => acc.replace(value, `[${key}]`),
		options.path
	);

	const body = {
		dsn: options.analyticsId,
		id: metric.id,
		page,
		href: location.href,
		event_name: metric.name,
		value: metric.value.toString(),
		speed: getConnectionSpeed()
	};

	if (options.debug) {
		console.log('[Web Vitals]', metric.name, JSON.stringify(body, null, 2));
	}

	const searchParams = new URLSearchParams(body);

	const blob = new Blob([searchParams.toString()], {
		type: 'application/x-www-form-urlencoded'
	});
	if (navigator.sendBeacon) {
		navigator.sendBeacon(vitalsUrl, blob);
	} else {
		fetch(vitalsUrl, {
			body: blob,
			method: 'POST',
			credentials: 'omit',
			keepalive: true
		});
	}
}

export function webVitals(options: {
	params: Params;
	path: string;
	analyticsId: string;
	debug: boolean;
}) {
	try {
		onFID((metric) => sendToAnalytics(metric, options));
		onTTFB((metric) => sendToAnalytics(metric, options));
		onLCP((metric) => sendToAnalytics(metric, options));
		onCLS((metric) => sendToAnalytics(metric, options));
		onFCP((metric) => sendToAnalytics(metric, options));
	} catch (err) {
		console.error('[Web Vitals]', err);
	}
}
