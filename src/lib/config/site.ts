export const siteConfig = {
	name: 'hellob.art',
	author: 'Bart van der Braak',
	url: import.meta.env.VERCEL_URL,
	ogImage: 'https://hellob.art/og.png',
	description: 'Personal website of Bart van der Braak, DevOps/Platform Engineer at Triple.',
	links: {
		twitter: 'https://twitter.com/bartvdbraak',
		linkedIn: 'https://www.linkedin.com/in/bartvdbraak',
		gitHubProfile: 'https://github.com/bartvdbraak',
		gitHubProject: 'https://github.com/bartvdbraak',
		shadcnSvelte: 'https://www.shadcn-svelte.com/',
		vercel: 'https://vercel.com/'
	},
	keywords: `Bart van der Braak,DevOps,Azure,Triple,Cloud`
};

export type SiteConfig = typeof siteConfig;
