const SITE_URL =
	import.meta.env.VERCEL_ENV === 'preview' ? import.meta.env.VERCEL_URL : 'https://hellob.art';

export const siteConfig = {
	name: 'hellob.art',
	author: 'Bart van der Braak',
	url: SITE_URL,
	description: 'Personal website of Bart van der Braak, DevOps/Platform Engineer at Triple.',
	ogImage: `https://${SITE_URL}/og.png`,
	links: {
		twitter: 'https://twitter.com/bartvdbraak',
		linkedIn: 'https://www.linkedin.com/in/bartvdbraak',
		gitHubProfile: 'https://github.com/bartvdbraak',
		gitHubProject: 'https://github.com/bartvdbraak/hellob.art',
		shadcnSvelte: 'https://www.shadcn-svelte.com/',
		vercel: 'https://vercel.com/'
	},
	keywords: `Bart van der Braak,DevOps,Azure,Triple,Cloud`
};

export type SiteConfig = typeof siteConfig;
