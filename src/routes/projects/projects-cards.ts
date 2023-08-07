import {
	ticketDashboardImage,
	ticketDashboardLogo,
	videowallImage,
	videowallLogo,
	zaantjeImage,
	zaantjeLogo
} from './projects-assets';

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
		headerImage: videowallImage,
		headerSubTitle: 'Private Project',
		title: 'Videowall',
		description: `An internal application to control an impressive 6x5 monitor setup with a user-friendly
										frontend built with React and Next.js utilizing a powerful backend developed in Golang.`,
		logo: videowallLogo,
		contributors: [],
		date: '2021'
	},
	{
		headerImage: ticketDashboardImage,
		headerSubTitle: 'Private Project',
		title: 'Ticket Dashboard',
		description: `Web app that consolidates tickets from various sources into one view for easy navigation, filters, and search for efficient 
			ticket management. Developed with Next.js for frontend and Golang for backend.`,
		logo: ticketDashboardLogo,
		contributors: [],
		date: '2020'
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
		date: '2020'
	}
];

export default projects;
