import { siteConfig } from '$lib/config/site';

const SITE_URL = siteConfig.url;

/**
 * SvelteKit RequestHandler for generating robots.txt.
 */
export async function GET() {
	// Define the robots.txt configuration
	const robotsConfig = [
		{
			agent: '*',
			disallow: import.meta.env.VERCEL_ENV === 'preview' ? ['/'] : ['/og.png/preview']
		}
	];

	const body = generateRobotsTxt(SITE_URL, robotsConfig);

	return new Response(body, {
		headers: {
			'Cache-Control': `public, max-age=${86400}`, // 24 hours
			'Content-Type': 'text/plain' // Corrected MIME type for robots.txt
		}
	});
}

/**
 * Generates robots.txt content.
 * @param {string} siteUrl Base site URL.
 * @param {Array} config Robots.txt configuration array.
 * @returns {string} robots.txt content.
 */
function generateRobotsTxt(siteUrl: string, config: { agent: string; disallow: string[] }[]) {
	return `Sitemap: https://${siteUrl}/sitemap.xml

# https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap#addsitemap
# https://www.robotstxt.org/robotstxt.html
${config.map((item) => generateRobotsTxtAgent(item.agent, item.disallow)).join('\n')}
`;
}

/**
 * Generates a user-agent section for robots.txt.
 * @param {string} agent User-agent string.
 * @param {string[]} disallow Array of paths to disallow.
 * @returns {string} User-agent section of robots.txt.
 */
function generateRobotsTxtAgent(agent: string, disallow: string[]) {
	const disallowEntries = disallow.map((path) => `Disallow: ${path}`).join('\n');
	return `User-agent: ${agent}\n${disallowEntries}`;
}
