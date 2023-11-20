import keyweaveImage from '$lib/assets/projects/keyweave-terminal.jpg?enhanced';
import keyweaveLogo from '$lib/assets/projects/keyweave-logo.png';
import videowallImage from '$lib/assets/projects/videowall.jpg?enhanced';
import videowallLogo from '$lib/assets/projects/videowall-logo.png';
import ticketDashboardImage from '$lib/assets/projects/ticketdashboard.png?enhanced';
import ticketDashboardLogo from '$lib/assets/projects/triple-logo.png';
import zaantjeImage from '$lib/assets/projects/zaantje.png?enhanced';
import zaantjeLogo from '$lib/assets/projects/zaantje-logo.png';

interface Contributor {
	name: string;
	imageSrc: string;
}

export interface Project {
	link?: string;
	headerImage: string;
	headerSubTitle: string;
	title: string;
	description: string;
	logo: string;
	contributors: Contributor[];
	date: string;
}

const projects: Project[] = [
	{
		link: 'https://github.com/bartvdbraak/keyweave',
		headerImage: keyweaveImage,
		headerSubTitle: 'Open Source Project',
		title: 'Keyweave',
		description: `Keyweave is an open-source tool crafted in Rust to seamlessly fetch secrets from Azure Key Vault 
			and weave them into a convenient .env file.`,
		logo: keyweaveLogo,
		contributors: [],
		date: '11-05-2023'
	},
	{
		headerImage: videowallImage,
		headerSubTitle: 'Private Project',
		title: 'Videowall',
		description: `An internal application to control an impressive 6x5 monitor setup with a user-friendly
										frontend built with React and Next.js utilizing a powerful backend developed in Golang.`,
		logo: videowallLogo,
		contributors: [],
		date: '05-31-2022'
	},
	{
		headerImage: ticketDashboardImage,
		headerSubTitle: 'Private Project',
		title: 'Ticket Dashboard',
		description: `Web app that consolidates tickets from various sources into one view for easy navigation, filters, and search for efficient 
			ticket management. Developed with Next.js for frontend and Golang for backend.`,
		logo: ticketDashboardLogo,
		contributors: [],
		date: '12-14-2021'
	},
	{
		link: 'https://zaantje.com',
		headerImage: zaantjeImage,
		headerSubTitle: 'Personal Project',
		title: 'Zaantje',
		description: `A SPA crafted with Nuxt.js and Vue.js, backed by Sanity CMS, taking you 
										on a virtual tour of Zaandam, showcasing locations of famous music videos.`,
		logo: zaantjeLogo,
		contributors: [],
		date: '01-01-2020'
	}
];

export default projects;
