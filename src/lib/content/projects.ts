import keyweaveLogo from '$lib/assets/projects/keyweave-logo.png';
import videoWallLogo from '$lib/assets/projects/videowall-logo.png';
import ticketDashboardLogo from '$lib/assets/projects/triple-logo.png';
import zaantjeLogo from '$lib/assets/projects/zaantje-logo.png';

export type ProgrammingLanguage = {
	name: string;
	color: string;
};

export type Project = {
	url?: string;
	avatarImg: string;
	title: string;
	description: string;
	languages: ProgrammingLanguage[];
	license: string;
	year: string;
};

const projects: Project[] = [
	{
		url: 'https://www.github.com/bartvdbraak/keyweave',
		avatarImg: keyweaveLogo,
		title: 'Keyweave',
		description:
			'Keyweave is an open-source tool crafted in Rust to seamlessly fetch secrets from Azure Key Vault and weave them into a convenient .env file.',
		year: '2023',
		license: 'GPLv3',
		languages: [
			{
				name: 'Rust',
				color: 'text-red-400'
			}
		]
	},
	{
		avatarImg: videoWallLogo,
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
		avatarImg: ticketDashboardLogo,
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
		avatarImg: zaantjeLogo,
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
	}
];

export default projects;
