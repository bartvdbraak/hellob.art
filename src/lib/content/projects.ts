import keyweaveLogo from '$lib/assets/projects/keyweave-logo.png?enhanced';
import videoWallLogo from '$lib/assets/projects/videowall-logo.png?enhanced';
import ticketDashboardLogo from '$lib/assets/projects/triple-logo.png?enhanced';
import zaantjeLogo from '$lib/assets/projects/zaantje-logo.png?enhanced';
import helloBartLogo from '$lib/assets/logo-icon.png?enhanced';
import omnidashLogo from '$lib/assets/projects/omnidash-logo.png?enhanced';
import azureGeocodeMappingLogo from '$lib/assets/projects/azure-geocode-mapping-logo.png?enhanced';
import slayerWeightCalcLogo from '$lib/assets/projects/slayerweightcalc-logo.png?enhanced';

export type ProgrammingLanguage = {
	name: string;
	color: string;
};

export type Project = {
	url?: string;
	logo: string;
	title: string;
	description: string;
	languages: ProgrammingLanguage[];
	license: string;
	year: string;
};

const projects: Project[] = [
	{
		url: 'https://hellob.art',
		logo: helloBartLogo,
		title: 'hellob.art',
		description:
			'The website you are currently visiting. A personal portfolio website that regularly gets rebuilt. Currently it has been built in Svelte and SvelteKit and uses shadcn-svelte and Tailwind CSS for component styling.',
		year: '2020',
		license: 'GPLv3',
		languages: [
			{
				name: 'Svelte',
				color: 'text-orange-400'
			}
		]
	},
	{
		url: 'https://omnidash.io',
		logo: omnidashLogo,
		title: 'Omnidash',
		description:
			'Omnidash is an open-source dashboard for retrieving ticketing information from various sources and displaying them in a single view.',
		year: '2023',
		license: 'GPLv3',
		languages: [
			{
				name: 'Svelte',
				color: 'text-orange-400'
			}
		]
	},
	{
		url: 'https://github.com/bartvdbraak/azure-geocode-mapping',
		logo: azureGeocodeMappingLogo,
		title: 'azure-geocode-mapping',
		description:
			'azure-geocode-mapping is a Python package that generates a mapping of Azure regions to their display names and geocodes.',
		year: '2023',
		license: 'MIT',
		languages: [
			{
				name: 'Python',
				color: 'text-blue-400'
			}
		]
	},
	{
		url: 'https://www.github.com/bartvdbraak/keyweave',
		logo: keyweaveLogo,
		title: 'Keyweave',
		description:
			'Keyweave is an open-source tool crafted in Rust to seamlessly fetch secrets from Azure Key Vault and weave them into a convenient .env file.',
		year: '2023',
		license: 'GPLv3',
		languages: [
			{
				name: 'Rust',
				color: 'text-red-400'
			},
			{
				name: 'Bicep',
				color: 'text-blue-400'
			}
		]
	},
	{
		logo: videoWallLogo,
		title: 'Videowall',
		description:
			'An internal application to control an impressive 6x5 monitor setup with a user-friendly frontend built with React and Next.js utilizing a powerful backend developed in Golang.',
		year: '2022',
		license: 'Private',
		languages: [
			{
				name: 'Next.js',
				color: 'text-white'
			},
			{
				name: 'Golang',
				color: 'text-sky-400'
			}
		]
	},
	{
		logo: ticketDashboardLogo,
		title: 'Ticket Dashboard',
		description:
			'Web app that consolidates tickets from various sources into one view for easy navigation, filters, and search for efficient ticket management. Developed with Next.js for frontend and Golang for backend.',
		year: '2021',
		license: 'Private',
		languages: [
			{
				name: 'Next.js',
				color: 'text-white'
			},
			{
				name: 'Golang',
				color: 'text-sky-400'
			}
		]
	},
	{
		url: 'https://zaantje.com/',
		logo: zaantjeLogo,
		title: 'Zaantje',
		description:
			'A SPA crafted with Nuxt.js and Vue.js, backed by Sanity CMS, taking you on a virtual tour of Zaandam, showcasing locations of famous music videos.',
		year: '2020',
		license: 'Private',
		languages: [
			{
				name: 'Vue.js',
				color: 'text-emerald-400'
			}
		]
	},
	{
		url: 'https://bartvdbraak.github.io/SlayerWeightCalculator/',
		logo: slayerWeightCalcLogo,
		title: 'SlayerWeightCalculator',
		description:
			'I created this Slayer calculator for OldSchool RuneScape in 2019, but I am no longer maintaining it. As of 23th April 2023, I have decided to publicly archive the repository for it.',
		year: '2019',
		license: 'BSD-2',
		languages: [
			{
				name: 'Vue.js',
				color: 'text-emerald-400'
			},
			{
				name: 'Python',
				color: 'text-blue-400'
			}
		]
	}
];

export default projects;
