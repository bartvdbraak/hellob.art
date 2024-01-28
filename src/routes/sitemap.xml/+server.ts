import { siteConfig } from '$lib/config/site';
import { navConfig } from '$lib/config/nav';
import type { NavItem } from '$lib/types/nav';

const SITE_URL = `https://${siteConfig.url}`;

/**
 * SvelteKit RequestHandler for generating sitemap.
 */
export async function GET() {
	const pages = generatePagePaths(navConfig.mainNav);
	const body = generateSitemapXml(SITE_URL, pages);

	return new Response(body, {
		headers: {
			'Cache-Control': `public, max-age=${86400}`, // 24 hours
			'Content-Type': 'application/xml'
		}
	});
}

/**
 * Generates paths for pages from navigation configuration.
 * @param {Array} navItems Navigation items configuration.
 * @returns {Array} Filtered and transformed page paths.
 */
function generatePagePaths(navItems: NavItem[]) {
	return navItems
		.map((item: { href: string }) => item.href.replace(/^\//, ''))
		.filter((href: string) => href !== '');
}

/**
 * Generates XML sitemap content.
 * @param {string} siteUrl Base site URL.
 * @param {Array} pages Array of page paths.
 * @returns {string} Sitemap XML content.
 */
function generateSitemapXml(siteUrl: string, pages: string[]) {
	return `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${generateUrlElement(siteUrl)}
      ${pages.map((page: string) => generateUrlElement(`${siteUrl}/${page}`)).join('')}
    </urlset>`;
}

/**
 * Generates a URL element for sitemap XML.
 * @param {string} url URL for the sitemap entry.
 * @returns {string} URL element XML string.
 */
function generateUrlElement(url: string) {
	return `
    <url>
      <loc>${url}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `;
}
