import { SITE_URL } from '$lib/site-config';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const pages = ['projects', 'toolbox'];
	const body = sitemap(pages);

	return new Response(body, {
		headers: {
			'Cache-Control': `public, max-age=${86400}`, // 24 hours
			'Content-Type': 'application/xml'
		}
	});
}

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
    <url>
      <loc>${SITE_URL}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    ${pages
			.map(
				(page) => `
    <url>
      <loc>${SITE_URL}/${page}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `
			)
			.join('')}
  </urlset>`;
