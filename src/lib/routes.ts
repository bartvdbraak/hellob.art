export type Route = {
	url: string;
	label: string;
};

const routes: Route[] = [
	{ url: '/', label: 'Home' },
	{ url: '/projects', label: 'Projects' },
	{ url: '/toolbox', label: 'Toolbox' },
	{ url: '/timeline', label: 'Timeline' }
	// { url: '/blog', label: 'Blog' }
];

export default routes;
